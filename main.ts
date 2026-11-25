// The Tired Dark Lord: A 100-Word Villain Monologue
// Revision 2 — trimmed from 103 to exactly 100 words: cut the repeated
// "come in" and "only" so every word earns its place; the pauses, the lost
// thread ("... where was I?"), the trailing lanterns and the "Sit. Wait."
// deflection now carry the tiredness, and the last line lands the sting.
// Writes the monologue to /output/entry.txt (gate: 1-600 UTF-8 chars).
import { mkdirSync, writeFileSync } from "node:fs";

const MONOLOGUE = [
  "Come in \u2014 mind the third step, it bites.",
  "I am Fenwick, keeper of the Drowned Bridge, and for forty years every soul crossing my river has paid me one memory.",
  "A first kiss. A mother's lullaby.",
  "I keep them in jars, labelled, shelved \u2014 ... where was I? Ah. The toll.",
  "Tonight it rises. Not a coin. Not a memory. Your name.",
  "Give it, and the far bank is yours, and my lanterns will... hmm. The oil is low.",
  "Sit. Wait. I need to count the jars once more, then \u2014 then I shall be terrible again, I promise.",
].join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MONOLOGUE, "utf8");

const words = MONOLOGUE.trim().split(/\s+/).length;
console.log(`Wrote /output/entry.txt: ${words} words, ${MONOLOGUE.length} chars`);
