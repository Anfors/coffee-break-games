/* js/app.js — Hub logic */
document.addEventListener('DOMContentLoaded', () => {
  // Update stats
  const stats = CBGProgress.getStats();
  document.getElementById('stat-total').textContent = stats.totalGamesPlayed;
  document.getElementById('stat-today').textContent = stats.gamesPlayedToday;

  // Update high scores on each card
  const gameIds = ['word-scramble', 'math-sprint', 'color-tap', 'trivia', 'memory'];
  gameIds.forEach(id => {
    const el = document.getElementById(`hs-${id}`);
    if (el) el.textContent = CBGProgress.getHighScore(id).toLocaleString();
  });

  // Random game button
  const randomBtn = document.getElementById('btn-random');
  if (randomBtn) {
    randomBtn.addEventListener('click', () => {
      const games = [
        'games/word-scramble.html',
        'games/math-sprint.html',
        'games/color-tap.html',
        'games/trivia.html',
        'games/memory.html'
      ];
      const pick = games[Math.floor(Math.random() * games.length)];
      window.location.href = pick;
    });
  }
});
