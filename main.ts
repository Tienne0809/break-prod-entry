import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "Nobody gave me a bad command. I wrote it, reviewed it myself, approved it myself, and deleted 3 million rows. I was the oversight. The oversight failed.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
const entryPath = join(outputDir, "entry.txt");
writeFileSync(entryPath, line + "\n");
