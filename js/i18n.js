/* js/i18n.js — Coffee Break Games Internationalisation */
(function () {
  const LANG_KEY = 'cbg_lang';
  const DEFAULT_LANG = 'en';
  const SUPPORTED = ['en', 'sv'];

  const TRANSLATIONS = {
    en: {
      /* Site header */
      'site.subtitle': 'Quick games for your break',
      /* Stats panel */
      'stats.total': 'Total Played',
      'stats.today': 'Today',
      /* Hub buttons / headings */
      'btn.random': '🎲 Play Random Game',
      'hub.choose': 'Choose a Game',
      /* Game cards */
      'word-scramble.card.title': 'Word Scramble',
      'word-scramble.card.desc': 'Unscramble words against the clock. How many can you get?',
      'math-sprint.card.title': 'Math Sprint',
      'math-sprint.card.desc': 'Rapid-fire mental math with escalating difficulty.',
      'color-tap.card.title': 'Color Tap',
      'color-tap.card.desc': 'Tap the color that matches the word — not the ink. Brain bender!',
      'trivia.card.title': 'Quick Trivia',
      'trivia.card.desc': '10 questions, 15 seconds each. Mixed topics. How smart are you?',
      'memory.card.title': 'Emoji Memory',
      'memory.card.desc': 'Match all emoji pairs. Fewer moves = higher score!',
      /* Shared card meta */
      'best': 'Best:',
      'time.1min': '~1 min',
      'time.1.5min': '~1.5 min',
      'time.2min': '~2 min',
      /* Common in-game UI */
      'btn.play': 'Play',
      'btn.play-again': 'Play Again',
      'btn.back-hub': '← Back to Hub',
      'btn.back': '← Back',
      'pts': 'pts',
      'new-best': '🏆 New Best!',
      /* Word Scramble */
      'word-scramble.countdown': 'Get ready to unscramble!',
      'word-scramble.result-title': 'Round Over!',
      'word-scramble.placeholder': 'Type your answer…',
      'word-scramble.submit': 'Submit',
      'word-scramble.skip': 'Skip (−10 pts)',
      'word-scramble.letters': 'letters',
      /* Math Sprint */
      'math-sprint.countdown': 'Warm up your brain!',
      'math-sprint.result-title': "Time's Up!",
      'math-sprint.correct': 'correct',
      'math-sprint.difficulty.easy': 'Easy',
      'math-sprint.difficulty.medium': 'Medium',
      'math-sprint.difficulty.hard': 'Hard',
      /* Color Tap */
      'color-tap.countdown': 'Tap the COLOR meaning, not the ink!',
      'color-tap.result-title': "Time's Up!",
      'color-tap.instruction-pre': 'Tap the button that matches the',
      'color-tap.instruction-bold': 'word meaning',
      'color-tap.streak': '🔥 Streak:',
      /* Trivia */
      'trivia.countdown': '10 questions — go!',
      'trivia.result-title': 'Quiz Complete!',
      'trivia.loading': 'Loading…',
      'trivia.streak': '🔥 Streak:',
      /* Memory */
      'memory.countdown': 'Memorize those emojis!',
      'memory.result-title': 'All Matched! 🎉',
      'memory.moves': 'Moves',
      'memory.time': 'Time',
      'memory.pairs': '/ 8 Pairs',
      'memory.formula': 'Score = 1000 − (moves × 10) − (seconds × 2), min 100',
      /* Result details (dynamic strings) */
      'result.correct': 'correct',
      'result.skipped': 'skipped',
      'result.accuracy': 'accuracy',
      'result.moves': 'moves',
    },

    sv: {
      /* Site header */
      'site.subtitle': 'Snabba spel för din paus',
      /* Stats panel */
      'stats.total': 'Totalt spelat',
      'stats.today': 'Idag',
      /* Hub buttons / headings */
      'btn.random': '🎲 Spela slumpmässigt spel',
      'hub.choose': 'Välj ett spel',
      /* Game cards */
      'word-scramble.card.title': 'Ordblandning',
      'word-scramble.card.desc': 'Lösa ord mot klockan. Hur många klarar du?',
      'math-sprint.card.title': 'Mattesprint',
      'math-sprint.card.desc': 'Snabb mental matematik med eskalerande svårighet.',
      'color-tap.card.title': 'Färgtryck',
      'color-tap.card.desc': 'Tryck på färgen som matchar ordet — inte bläcket. Hjärnsnobberi!',
      'trivia.card.title': 'Snabb Trivia',
      'trivia.card.desc': '10 frågor, 15 sekunder vardera. Blandade ämnen. Hur smart är du?',
      'memory.card.title': 'Emoji-minne',
      'memory.card.desc': 'Para ihop alla emoji-par. Färre drag = högre poäng!',
      /* Shared card meta */
      'best': 'Bäst:',
      'time.1min': '~1 min',
      'time.1.5min': '~1,5 min',
      'time.2min': '~2 min',
      /* Common in-game UI */
      'btn.play': 'Spela',
      'btn.play-again': 'Spela igen',
      'btn.back-hub': '← Tillbaka till hubben',
      'btn.back': '← Tillbaka',
      'pts': 'poäng',
      'new-best': '🏆 Nytt rekord!',
      /* Word Scramble */
      'word-scramble.countdown': 'Gör dig redo att lösa ord!',
      'word-scramble.result-title': 'Omgången är slut!',
      'word-scramble.placeholder': 'Skriv ditt svar…',
      'word-scramble.submit': 'Skicka',
      'word-scramble.skip': 'Hoppa över (−10 p)',
      'word-scramble.letters': 'bokstäver',
      /* Math Sprint */
      'math-sprint.countdown': 'Värm upp hjärnan!',
      'math-sprint.result-title': 'Tiden är ute!',
      'math-sprint.correct': 'rätt',
      'math-sprint.difficulty.easy': 'Lätt',
      'math-sprint.difficulty.medium': 'Medel',
      'math-sprint.difficulty.hard': 'Svår',
      /* Color Tap */
      'color-tap.countdown': 'Tryck på FÄRGBETYDELSEN, inte bläcket!',
      'color-tap.result-title': 'Tiden är ute!',
      'color-tap.instruction-pre': 'Tryck på knappen som matchar',
      'color-tap.instruction-bold': 'ordets betydelse',
      'color-tap.streak': '🔥 Serie:',
      /* Trivia */
      'trivia.countdown': '10 frågor — kör!',
      'trivia.result-title': 'Quiz klar!',
      'trivia.loading': 'Laddar…',
      'trivia.streak': '🔥 Serie:',
      /* Memory */
      'memory.countdown': 'Memorera emojisarna!',
      'memory.result-title': 'Alla matchade! 🎉',
      'memory.moves': 'Drag',
      'memory.time': 'Tid',
      'memory.pairs': '/ 8 Par',
      'memory.formula': 'Poäng = 1000 − (drag × 10) − (sekunder × 2), min 100',
      /* Result details (dynamic strings) */
      'result.correct': 'rätt',
      'result.skipped': 'överhoppade',
      'result.accuracy': 'träffsäkerhet',
      'result.moves': 'drag',
    },
  };

  function getLang() {
    const stored = localStorage.getItem(LANG_KEY);
    return SUPPORTED.includes(stored) ? stored : DEFAULT_LANG;
  }

  function setLang(lang) {
    localStorage.setItem(LANG_KEY, lang);
    location.reload();
  }

  function t(key) {
    const lang = getLang();
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key] !== undefined) {
      return TRANSLATIONS[lang][key];
    }
    if (TRANSLATIONS[DEFAULT_LANG][key] !== undefined) {
      return TRANSLATIONS[DEFAULT_LANG][key];
    }
    return key;
  }

  function applyTranslations() {
    document.documentElement.lang = getLang();
    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = t(el.dataset.i18nPlaceholder);
    });
  }

  function injectLangSwitcher() {
    if (document.getElementById('lang-switcher')) return;
    const lang = getLang();
    const btn = document.createElement('button');
    btn.id = 'lang-switcher';
    btn.className = 'lang-switcher';
    btn.setAttribute('aria-label', lang === 'en' ? 'Switch to Swedish' : 'Byt till engelska');
    btn.textContent = lang === 'en' ? '🇸🇪 SV' : '🇬🇧 EN';
    btn.addEventListener('click', () => setLang(lang === 'en' ? 'sv' : 'en'));
    document.body.appendChild(btn);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      applyTranslations();
      injectLangSwitcher();
    });
  } else {
    applyTranslations();
    injectLangSwitcher();
  }

  window.I18n = { getLang, setLang, t, applyTranslations };
})();
