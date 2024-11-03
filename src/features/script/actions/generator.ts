"use server";

import "server-only";

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
    switch (app) {
        case "node":
            return "curl -fsSL https://deb.nodesource.com/setup_22.x | bash - && apt-get install -y nodejs";
        case "docker":
            return "curl -fsSL https://get.docker.com | bash -";
        default:
            return null;
    }
}
