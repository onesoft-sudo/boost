import fs from "fs/promises";
import path from "path";

const files = await fs.readdir(path.join(process.cwd(), "src/installers"));
const installers = files.filter((file) => file.endsWith(".sh"));
const map = new Map<string, string>();

for (const installer of installers) {
    const content = await fs.readFile(`src/installers/${installer}`, "utf-8");
    map.set(installer.replace(/\.sh$/, ""), content);
}

const json = JSON.stringify([...map.entries()], null, 4);
await fs.writeFile("src/installers/bundle.json", json);
