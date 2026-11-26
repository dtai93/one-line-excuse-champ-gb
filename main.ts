// Write the contest's single-line entry.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text = "I told the client the offer sounded good; I was scoring the audio. They filed it as your acceptance.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

if ([...text].length < 1 || [...text].length > 140 || !text.trim()) {
  throw new Error("Entry must contain 1-140 non-whitespace characters.");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), text, "utf8");
