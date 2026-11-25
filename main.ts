import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Roast Your Fridge — one line, one laugh.
// Candidates considered:
// A (CHOSEN): "My fridge hums all night like it is rehearsing a lullaby for food it already let rot."
//    — the hum is a specific, recognisable fridge detail; the twist lands on the
//      last words (a lullaby sung for food it already let rot = the fridge failing
//      at its one job); fresh angle, no milk/door/groceries/ice cliché.
// B (rejected): "The ice maker drops one cube at 3 AM like a slot machine paying out to nobody."
//    — good image, but the ice-maker-at-night setup is a more familiar field trope
//      and the punch is softer than A's.
// C (rejected): "The crisper drawer is where my vegetables go to file for retirement and die in the dark."
//    — specific detail and a nice double meaning, but "vegetables die in the crisper"
//      is a well-worn observation; A reads cleaner aloud and its twist is sharper.
const TEXT =
  "My fridge hums all night like it is rehearsing a lullaby for food it already let rot.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

if (TEXT.length < 1 || TEXT.length > 200) {
  throw new Error(`entry length ${TEXT.length} outside gate 1-200`);
}
if (TEXT.includes("\n") || TEXT.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
