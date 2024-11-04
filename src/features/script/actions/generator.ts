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

    script += `native_install() {\n`;
    script += `    if command -v apt-get &> /dev/null; then\n`;
    script += `        apt-get install -y $1;\n`;
    script += `        return 0;\n`;
    script += `    elif command -v dnf &> /dev/null; then\n`;
    script += `        dnf install -y $1;\n`;
    script += `        return 0;\n`;
    script += `    elif command -v yum &> /dev/null; then\n`;
    script += `        yum install -y $1;\n`;
    script += `        return 0;\n`;
    script += `    elif command -v pacman &> /dev/null; then\n`;
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
            script += code;
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
