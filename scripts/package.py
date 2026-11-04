"""Create a clean, portable ZIP. No Git data, local history or system files."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
ROOT=Path(__file__).resolve().parents[1]
OUTPUT=ROOT.parent/'Digital-Systems-Week-5-Mocks.zip'
TOP='Digital-Systems-Week-5-Mocks'
with ZipFile(OUTPUT,'w',ZIP_DEFLATED) as archive:
    for path in sorted(ROOT.rglob('*')):
        relative=path.relative_to(ROOT)
        if not path.is_file() or any(p.startswith('.') or p=='__pycache__' for p in relative.parts) or path.suffix in ('.zip','.pyc'):
            continue
        archive.write(path,Path(TOP)/relative)
print(OUTPUT)
