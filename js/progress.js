/* js/progress.js — Coffee Break Games progress manager */
(function () {
  const KEY = 'cbg_progress';

  const DEFAULT = {
    totalGamesPlayed: 0,
    gamesPlayedToday: 0,
    lastPlayedDate: '',
    games: {
      'word-scramble': { highScore: 0, gamesPlayed: 0, lastScore: 0 },
      'math-sprint':   { highScore: 0, gamesPlayed: 0, lastScore: 0 },
      'color-tap':     { highScore: 0, gamesPlayed: 0, lastScore: 0 },
      'trivia':        { highScore: 0, gamesPlayed: 0, lastScore: 0 },
      'memory':        { highScore: 0, gamesPlayed: 0, lastScore: 0 },
    }
  };

  function today() {
    return new Date().toISOString().slice(0, 10);
  }

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return structuredClone(DEFAULT);
      const data = JSON.parse(raw);
      // Merge in any missing game keys
      for (const id of Object.keys(DEFAULT.games)) {
        if (!data.games[id]) data.games[id] = structuredClone(DEFAULT.games[id]);
      }
      return data;
    } catch {
      return structuredClone(DEFAULT);
    }
  }

  function save(data) {
    try { localStorage.setItem(KEY, JSON.stringify(data)); } catch { /* storage full */ }
  }

  function saveScore(gameId, score) {
    const data = load();
    const t = today();

    // Reset today counter if it's a new day
    if (data.lastPlayedDate !== t) {
      data.gamesPlayedToday = 0;
      data.lastPlayedDate = t;
    }

    data.totalGamesPlayed += 1;
    data.gamesPlayedToday += 1;

    if (!data.games[gameId]) {
      data.games[gameId] = { highScore: 0, gamesPlayed: 0, lastScore: 0 };
    }

    const g = data.games[gameId];
    g.gamesPlayed += 1;
    g.lastScore = score;
    if (score > g.highScore) g.highScore = score;

    save(data);
    return g.highScore === score && score > 0; // returns true if new high score
  }

  function getHighScore(gameId) {
    const data = load();
    return data.games[gameId] ? data.games[gameId].highScore : 0;
  }

  function getStats() {
    const data = load();
    const t = today();
    if (data.lastPlayedDate !== t) {
      return { totalGamesPlayed: data.totalGamesPlayed, gamesPlayedToday: 0 };
    }
    return { totalGamesPlayed: data.totalGamesPlayed, gamesPlayedToday: data.gamesPlayedToday };
  }

  window.CBGProgress = { load, saveScore, getHighScore, getStats };
})();
