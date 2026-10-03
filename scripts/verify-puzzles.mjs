// Script to verify puzzle grid intersections and dimensions
import { puzzles } from '../src/data/puzzles.ts';

console.log(`Checking ${puzzles.length} puzzles...`);

let hasError = false;

puzzles.forEach((puzzle, pIdx) => {
  const grid = Array.from({ length: puzzle.rows }, () => Array(puzzle.cols).fill(null));
  console.log(`\n--- Puzzle ${puzzle.typeNumber}: ${puzzle.title} (${puzzle.rows}x${puzzle.cols}) ---`);

  puzzle.words.forEach((w) => {
    const letters = w.word.toUpperCase().split('');
    const len = letters.length;

    // Check bounds
    if (w.row < 0 || w.col < 0) {
      console.error(`[Puzzle ${puzzle.typeNumber}] Word "${w.word}" has negative coordinate: row=${w.row}, col=${w.col}`);
      hasError = true;
    }
    if (w.direction === 'across') {
      if (w.col + len > puzzle.cols || w.row >= puzzle.rows) {
        console.error(`[Puzzle ${puzzle.typeNumber}] Word "${w.word}" out of bounds: row=${w.row}, col=${w.col}, len=${len}, maxCols=${puzzle.cols}`);
        hasError = true;
      }
    } else {
      if (w.row + len > puzzle.rows || w.col >= puzzle.cols) {
        console.error(`[Puzzle ${puzzle.typeNumber}] Word "${w.word}" out of bounds: row=${w.row}, col=${w.col}, len=${len}, maxRows=${puzzle.rows}`);
        hasError = true;
      }
    }

    // Check intersections
    letters.forEach((letter, i) => {
      const r = w.direction === 'across' ? w.row : w.row + i;
      const c = w.direction === 'across' ? w.col + i : w.col;

      if (r < puzzle.rows && c < puzzle.cols) {
        const existing = grid[r][c];
        if (existing && existing !== letter) {
          console.error(`[Puzzle ${puzzle.typeNumber}] Conflict at (${r},${c}): existing '${existing}', tried to place '${letter}' from "${w.word}"`);
          hasError = true;
        } else {
          grid[r][c] = letter;
        }
      }
    });
  });

  console.log(`Total words: ${puzzle.words.length}`);
});

if (hasError) {
  console.error("\n❌ Errors found in puzzles!");
  process.exit(1);
} else {
  console.log("\n✅ All 10 puzzles passed verification perfectly!");
}
