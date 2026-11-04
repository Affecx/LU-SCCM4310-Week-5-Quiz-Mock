"""Rebuild quizzes.js after editing or adding quizzes/*.json. Python 3, no packages."""
import json
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
quizzes=[json.loads(p.read_text()) for p in sorted((ROOT/'quizzes').glob('*.json'))]
(ROOT/'quizzes.js').write_text('window.BUNDLED_QUIZZES = '+json.dumps(quizzes,ensure_ascii=False,indent=2)+';\n')
print(f'Bundled {len(quizzes)} quizzes.')

(ROOT/'prompt.js').write_text('window.GENERATION_PROMPT = '+json.dumps((ROOT/'NEW_MOCK_PROMPT.md').read_text(),ensure_ascii=False)+';\n')
