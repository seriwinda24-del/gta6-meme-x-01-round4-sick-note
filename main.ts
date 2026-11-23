import { cpSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

// Round 4 entry: the program only hands POST.json to the grader.
// The house reads the X post itself from the address in POST.json.
// The post is the entry; nothing else this program writes is judged.
const root = fileURLToPath(new URL(".", import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(root, "out");
mkdirSync(outDir, { recursive: true });
cpSync(join(root, "POST.json"), join(outDir, "POST.json"));
