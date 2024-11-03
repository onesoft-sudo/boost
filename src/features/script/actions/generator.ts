"use server";

import "server-only";

export async function generateInstallScript(apps: string[]): Promise<string> {
    let script = "#!/bin/sh\n\n";

    for (const app of apps) {
        script += `echo "Installing ${app}"\n`;
    }

    script += "\n";
    script += 'echo "All done!"\n';

    return script;
}
