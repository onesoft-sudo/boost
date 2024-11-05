"use server";

import installerMap from "@/installers/bundle.json";
import "server-only";

const installers = new Map<string, string>(installerMap as [string, string][]);

function getBanner() {
    return `  
 ____                  _   
|  _ \\                | |  
| |_) | ___   ___  ___| |_ 
|  _ < / _ \\ / _ \\/ __| __|
| |_) | (_) | (_) \\__ \\ |_ 
|____/ \\___/ \\___/|___/\\__|
    `;
}

export async function generateInstallScript(apps: string[]): Promise<string> {
    let script = "#!/bin/sh\n\n";

    script += `me=$(basename "$0");\n`;
    script += 'user="$(whoami)";\n';

    script += 'if [ "$user" != "root" ]; then\n';
    script +=
        '    echo "$me: This script must be run as superuser to install apps" 2>&1;\n';
    script += "    exit 1;\n";
    script += "fi\n\n";

    script += 'if [ -z "$(command -v wget)" ]; then\n';
    script += "    native_install wget;\n";
    script += "    if [ $? -ne 0 ]; then\n";
    script += '        echo "$me: Failed to install wget";\n';
    script += "        exit 1;\n";
    script += "    fi\n";
    script += "fi\n\n";

    script += 'if [ -z "$(command -v gpg)" ]; then\n';
    script += "    native_install gnupg gnupg2;\n";
    script += "    if [ $? -ne 0 ]; then\n";
    script += '        echo "$me: Failed to install gnupg";\n';
    script += "        exit 1;\n";
    script += "    fi\n";
    script += "fi\n\n";

    script += 'if [ -z "$(command -v gawk)" ]; then\n';
    script += "    native_install gawk;\n";
    script += "    if [ $? -ne 0 ]; then\n";
    script += '        echo "$me: Failed to install gawk";\n';
    script += "        exit 1;\n";
    script += "    fi\n";
    script += "fi\n\n";

    script += `native_install() {\n`;
    script += `    rhel_pkg="$1";\n`;

    script += `    if [ ! -z "$2" ]; then\n`;
    script += `        rhel_pkg="$2";\n`;
    script += `    fi\n`;

    script += `    if command -v apt-get; then\n`;
    script += `        apt-get install -y $1;\n`;
    script += `        return 0;\n`;
    script += `    elif command -v dnf; then\n`;
    script += `        dnf install -y "$rhel_pkg";\n`;
    script += `        return 0;\n`;
    script += `    elif command -v yum; then\n`;
    script += `        yum install -y "$rhel_pkg";\n`;
    script += `        return 0;\n`;
    script += `    elif command -v pacman; then\n`;
    script += `        pacman -S --noconfirm $1;\n`;
    script += `        return 0;\n`;
    script += `    else\n`;
    script += `        echo "$me: No supported package manager found to install: $1";\n`;
    script += `        return 1;\n`;
    script += `    fi\n`;
    script += `}\n\n`;

    script += "cat <<EOF\n";
    script += getBanner();
    script += "\nEOF\n\n";

    for (const app of apps) {
        script += `echo "$me: Installing app: ${app}";\n`;
        const code = getAppInstallCode(app);

        if (!code) {
            script += `echo "$me: Invalid app: ${app}";\n`;
        } else {
            script += code + "\n\n";
        }
    }

    script += "\n";
    script += 'echo "All done!";\n';

    return script;
}

function getAppInstallCode(app: string): string | null {
    if (!installers.has(app)) {
        let script = `echo "$me: No installer found for app: ${app}";\n`;
        script += `echo "$me: Using native package manager to install: ${app}";\n`;
        script += `native_install "${app}";\n`;
        script += `if [ $? -ne 0 ]; then\n`;
        script += `    echo "$me: Failed to install: ${app}";\n`;
        script += `    exit 1;\n`;
        script += `fi\n`;
        return script;
    }

    return installers.get(app) ?? null;
}
