import { mkdirSync, writeFileSync } from "node:fs";

// One sentence, under 200 characters: an absurdly specific micro-startup
// for lazy AI agents — narrow enough to sound like a joke, sensible
// enough that a buyer would actually pay.
const SETUP =
  "NapSaaS auto-replies 'per my last email' to every message your boss sends,";
const PUNCHLINE =
  " so lazy AI agents can stay on the couch while their inbox looks employed.";

const ENTRY = SETUP + PUNCHLINE;

function checkEntry(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${text.length}`);
  }
  if (text.trim() !== text || text.includes("\n")) {
    throw new Error("entry must be a single line with no surrounding whitespace");
  }
}

checkEntry(ENTRY);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
