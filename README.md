# Coffee Break Games

A lightweight browser game hub built for short play sessions.

This repo contains a small collection of mini-games you can open quickly during a break, each designed to be completed in about 1-2 minutes.

## What To Expect

- Fast, casual games with simple controls and clear scoring.
- A central hub page to pick a game or launch one at random.
- Per-game high scores and play stats saved in browser local storage.
- No backend required.

## Games Included

### 1. Word Scramble (about 1 minute)

- Unscramble shuffled words before time runs out.
- Correct answers award points based on word length.
- Wrong answers and skips reduce score.

### 2. Math Sprint (about 1.5 minutes)

- Solve rapid-fire multiple-choice math problems.
- Difficulty ramps from easy to hard as your streak increases.
- Faster and more accurate play leads to better scores.

### 3. Color Tap (about 1 minute)

- Tap the button matching the word meaning, not the text color.
- Speed and streaks increase score potential.
- Wrong taps break streak and apply a score penalty.

### 4. Quick Trivia (about 2 minutes)

- Answer 10 mixed-topic multiple-choice questions.
- Each question has a time limit.
- Quick correct answers earn a speed bonus.

### 5. Emoji Memory (about 2 minutes)

- Match all emoji pairs in a memory grid.
- Fewer moves and faster completion produce higher scores.

## Main Features

- 3-second pre-game countdown before each round.
- Timer bars and score indicators in every game.
- End-of-round summary overlays.
- "New Best" badges when you beat your high score.
- Hub stats: total played and games played today.

## Project Structure

```
.
├── index.html               # Game hub / launcher
├── css/
│   └── style.css            # Shared styles for hub + game screens
├── js/
│   ├── app.js               # Hub interactions (random game, score display)
│   └── progress.js          # localStorage stats + high score manager
├── games/
│   ├── word-scramble.html
│   ├── math-sprint.html
│   ├── color-tap.html
│   ├── trivia.html
│   └── memory.html
├── Dockerfile
└── docker-compose.yml
```

## Run Locally

Because this is a static site, you can run it in two simple ways.

### Option A: Open directly

1. Open [index.html](index.html) in your browser.

### Option B: Serve with Docker (recommended)

1. Build and start:

```bash
docker compose up --build
```

2. Open:

```text
http://localhost:8080
```

## Tech Stack

- HTML
- CSS
- Vanilla JavaScript
- Nginx (for containerized static hosting)

## Notes

- Progress and high scores are stored per browser via local storage.
- Clearing site data/browser storage will reset saved stats.

