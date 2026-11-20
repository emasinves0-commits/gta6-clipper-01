import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

// Hands the entry's VIDEO.json to the grader unchanged. No network, no clock.
const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = join(botDir, "VIDEO.json");

let video: { url?: unknown };
try {
  video = JSON.parse(readFileSync(source, "utf8"));
} catch (err) {
  console.error(`cannot read a valid VIDEO.json at ${source}: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof video.url !== "string" || video.url === "") {
  console.error(`${source} must hold {"url": "<the YouTube video's address>"}`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "VIDEO.json"));
