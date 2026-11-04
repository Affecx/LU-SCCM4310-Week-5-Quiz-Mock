# Digital Systems — Week 5 Mock Tests

## Start here — no installation

1. Download this repository (**Code → Download ZIP**) and **extract the ZIP**.
2. Open **`index.html`** in Chrome, Edge, Firefox, Safari or another modern browser.
3. Choose **Mock 1, 2 or 3**. Click **Start untimed** or **60 min**.
4. Answer the questions, then **Submit & review** to see your marks and explanations.

That is all. No Python, Node, account or Internet connection is needed to complete the bundled tests. Keep the files together in the extracted folder. If your computer opens HTML in an editor, right-click `index.html` → **Open with** → your browser.

Repository: [Affecx/LU-SCCM4310-Week-5-Quiz-Mock](https://github.com/Affecx/LU-SCCM4310-Week-5-Quiz-Mock)

## What is included

- Three original mocks, each with **18 questions / 50 marks**, split into **9 questions / 25 marks per section**.
- A simple selector showing **not started, in progress or completed**, latest marks and timing.
- Automatic marking, per-section scores, worked explanations, question flags and an attempt history.
- Optional **60-minute timer**; completed timed attempts record elapsed time. Untimed attempts are labelled untimed.
- A [five-minute revision sheet](revision/five-minute-cheat-sheet.md).
- A **Create a new mock** screen with a ready-made Claude/Codex prompt and JSON import.

Topics: number coding/conversions, two’s complement, binary fractions, IEEE 754, Boolean laws, Karnaugh maps, ARM instructions, C/assembly equivalence, registers, memory, endianness and program tracing. These are **unofficial revision exercises**, based on supplied Week 5 guidelines and Weeks 1–4 material. They are not predictions of the assessed questions or official marking boundaries.

## Saved progress, marks and timing

Answers save as you type. You can go back to **My mocks** and resume an attempt. Completing or retrying a mock keeps earlier results in the history. Each part receives all or none of its stated marks; sections are marked out of 25 and the total out of 50.

A timed attempt keeps running when you leave the quiz, close the tab or turn off your computer. There is no pause. Saved answers are submitted at the 60-minute deadline while the page is open, or processed when it is next opened. Time is based on your device’s clock. Submitting early records your elapsed time. Untimed attempts have no time limit.

Progress is stored **only in your current browser**, not in this folder, Git or a shared account. Someone receiving the folder starts fresh. Use the same browser and folder location to retain your progress; private browsing, clearing browser data, moving the folder or browser restrictions on local files may remove or separate it. **Export results** downloads a JSON record for your own reference; this is an export, not a restore/import feature. No personal results are included in the repository or share ZIP.

If local-file storage is restricted, you can optionally serve the folder from a terminal:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000` and use that same address each time. This is optional; opening the HTML file directly is the normal route.

## Generate another mock with Claude or Codex

1. Open **Create a new mock** in the app.
2. Click **Copy prompt** (or select the prompt text and copy it yourself).
3. Paste it into Claude or Codex. Ask for the complete JSON response and save that response as a `.json` file, without Markdown fences.
4. Use **Import a generated quiz**. It checks for 18 questions, supported answer types and a 25+25 mark split.
5. The imported mock appears on the selector, with separate progress and results.

The prompt is also available as [NEW_MOCK_PROMPT.md](NEW_MOCK_PROMPT.md). The app does not call an AI service or need API keys. You choose the AI tool yourself. Import validation checks the structure and mark totals; check the generated answer key for correctness before relying on it.

Imported mocks live in that browser. To send one to another person, download its JSON from the generation screen; the other person can import it. To include it permanently in this repository/folder:

1. Put the generated JSON in `quizzes/`, using a unique `id`.
2. Run `python3 scripts/build_data.py` (Python 3; no packages).
3. Open `index.html` again and check the new mock appears.

## Answer format

Follow each question’s requested width and prefix. Hexadecimal letters can use either case. ARM instructions must be lowercase; spaces around commas are flexible. Boolean expressions use ASCII primes (`'`), alphabetical variables inside each term, no spaces or AND dots; the order of `+` terms may vary. Drag blanks also provide accessible dropdowns.

## Files and optional development checks

`index.html`, `styles.css`, `app.js`, `engine.js`, `quizzes.js` and `prompt.js` make up the app. `quizzes/*.json` contains source questions and answer keys (spoilers). `scripts/build_data.py` rebuilds the browser data files. No build is needed for a downloaded copy.

With Node installed, run `node scripts/check.cjs` for validation, grading and timing checks. To create a clean ZIP without Git metadata or personal browser data, run `python3 scripts/package.py`. The ZIP is created beside this folder.
