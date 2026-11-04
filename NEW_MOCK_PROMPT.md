Create a NEW, original SCCM4310 Digital Systems Week 5 practice mock that I can import into the quiz app at https://github.com/Affecx/LU-SCCM4310-Week-5-Quiz-Mock.

Return ONE valid JSON object only, without Markdown fences or extra commentary. Use 18 questions, 50 marks, split Q1–9=25 marks and Q10–18=25 marks. Suggested question totals:
Q1–9: 2,3,3,2,3,3,3,3,3.
Q10–18: 2,3,3,3,3,3,2,2,4.
Each question can contain multiple parts; their positive integer marks must sum to its total.

Scope and question plan:
1. Lecture MCQ: architecture, coding, gates or signed/unsigned ranges.
2. Unsigned decimal/binary/hexadecimal conversions (both directions).
3. Fixed-width two's complement conversions (binary and hex, both directions).
4. Decimal to unsigned binary fraction.
5. Decimal to IEEE 754 binary32 hex, including sign/exponent subparts.
6. Binary32 hex to decimal, including unbiased exponent.
7. Recognise valid Boolean identities (De Morgan, absorption, distributivity, etc.).
8–9. Simplify 3- and 4-variable Karnaugh maps to minimal sum of products. Gray-code axes 00,01,11,10; include wrapping/overlap where useful. Supply actual map tables. Choose maps with a unique minimal expression up to term order, or include all valid minimal alternatives in accept.
10. ARM fundamentals MCQ.
11. Big/little endian memory bytes or word reconstruction.
12. Arithmetic/bitwise/shift register trace.
13. Single-line C to ARM instructions.
14. Complete a C-equivalent ARM if/else or loop using dropdown/drag blanks with plausible distractors.
15. Trace a short ARM program and identify its purpose.
16. Memory/array loads or byte stores; state endian and widths.
17. Match equivalent C and ARM code blocks (multiple choice).
18. Complete a missing instruction in a short working ARM program, with final-register subparts.

Do not ask for Boolean-law simplification derivations, drawing circuits, or writing a complex ARM program from scratch. Use ARMv7 A32, 32-bit registers, 4-byte words; explicitly state signedness for order comparisons and endianness for memory tasks. Define where execution stops. Avoid overflow/undefined C behaviour unless that is explicitly the question. Use fresh values and code, not just a copy of a standard worked example.

JSON schema (the object below illustrates ONE question only; your actual output MUST have all 18):
{
  "id": "mock-new-unique-slug",
  "title": "Mock 4 — Fresh practice",
  "description": "One sentence describing this mock's emphasis.",
  "questions": [
    {
      "title": "Unsigned conversions",
      "prompt": "Convert the following numbers. Follow the requested widths exactly.",
      "parts": [
        {"label":"Decimal 19 to exactly 8 binary digits","answer":"00010011","marks":1,"kind":"text","accept":[]},
        {"label":"Decimal 19 to exactly 2 hexadecimal digits, no prefix","answer":"13","marks":1,"kind":"hex","accept":[]}
      ],
      "why": "19 = 16+2+1, so binary 00010011 and hex 13."
    }
  ]
}

Part kinds and marking:
- "text": exact string matching; use for binary/decimal answers. State precise format (integer or decimal representation, width, prefix).
- "hex": case-insensitive string matching, but exact digit width and prefix. State those explicitly.
- "asm": lowercase instruction string; whitespace around commas is flexible. Put other valid instruction forms or decimal/hex immediate alternatives into "accept".
- "boolean": exact expression except the order of + terms is ignored. ASCII apostrophe for NOT, no spaces or AND dots, alphabetical variables inside each term. No unnecessary parentheses. Include other minimal valid forms in "accept".
- A part with "options": ["choice A", "choice B", "choice C"] renders as one-answer multiple choice. The "answer" must exactly equal one option string. Spread correct options across positions; use plausible distractors. Omit "options" on typed answers.
- "drop" plus "options" renders a draggable/selectable blank. Answer must be one option. State whether options may be reused across parts.
- "accept" is an optional list of additional correct answer strings. No executable code or custom grading logic.

"prompt" can contain simple HTML: p, br, pre, code, strong, em, ul, ol, li, table, caption, thead, tbody, tr, th, td. Escape C comparisons inside HTML as &lt; and &gt;. Use <pre> for code. Do not include scripts, links, images, styles, personal data or external dependencies. Titles, labels, explanations, options and answers are plain text. All answers must be strings, including numbers.

Before returning JSON: independently verify every conversion (including IEEE 754 field widths), test each K-map expression against every displayed cell, trace code and memory in execution order, check every correct answer is in its options, and sum marks per section. Put a concise worked explanation in "why" for EVERY question. The import validator checks structure/marks, not the mathematical truth of your answer key.
