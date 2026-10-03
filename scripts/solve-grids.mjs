// scripts/solve-grids.mjs
// This script finds valid crossword placements for our 10 topic word sets

function solvePuzzle(words, maxRows = 11, maxCols = 11) {
  // words is array of { word, clue, ... }
  // We place words[0] across, and try all combinations for subsequent words
  const placed = [];
  
  function canPlace(word, r, c, dir, grid) {
    const len = word.length;
    if (dir === 'across') {
      if (c + len > maxCols || r >= maxRows || r < 0 || c < 0) return false;
      let hasIntersection = placed.length === 0;
      for (let i = 0; i < len; i++) {
        const cell = grid[r][c + i];
        if (cell !== null && cell !== word[i]) return false;
        if (cell === word[i]) hasIntersection = true;
      }
      return hasIntersection;
    } else {
      if (r + len > maxRows || c >= maxCols || r < 0 || c < 0) return false;
      let hasIntersection = placed.length === 0;
      for (let i = 0; i < len; i++) {
        const cell = grid[r + i][c];
        if (cell !== null && cell !== word[i]) return false;
        if (cell === word[i]) hasIntersection = true;
      }
      return hasIntersection;
    }
  }

  function applyWord(word, r, c, dir, grid) {
    const nextGrid = grid.map(row => [...row]);
    for (let i = 0; i < word.length; i++) {
      if (dir === 'across') nextGrid[r][c + i] = word[i];
      else nextGrid[r + i][c] = word[i];
    }
    return nextGrid;
  }

  const grid = Array.from({ length: maxRows }, () => Array(maxCols).fill(null));

  function backtrack(index, currentGrid) {
    if (index === words.length) return true;
    const w = words[index];

    // Try both directions and all (r, c)
    for (const dir of ['across', 'down']) {
      for (let r = 0; r < maxRows; r++) {
        for (let c = 0; c < maxCols; c++) {
          if (canPlace(w.word, r, c, dir, currentGrid)) {
            // Check spacing: ensure words don't awkwardly run into each other parallel
            // For crossword simplicity, check canPlace
            placed.push({ ...w, row: r, col: c, direction: dir });
            const nextG = applyWord(w.word, r, c, dir, currentGrid);
            if (backtrack(index + 1, nextG)) return true;
            placed.pop();
          }
        }
      }
    }
    return false;
  }

  const success = backtrack(0, grid);
  return success ? placed : null;
}

// Export or test
export { solvePuzzle };
