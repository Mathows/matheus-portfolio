# CV Generator

Source for `public/cv/Matheus-Alexandre-CV.pdf` — the résumé behind the "CV"
button in the site header.

## Files

- **cv.html** — the one-page A4 layout (English, single column, ATS-friendly:
  real text, standard section headings, no letter-spaced titles). Edit this
  when experience, projects, skills or certifications change.

## Regenerating after edits

Same approach as `scripts/og`: Edge headless renders the HTML (it loads Inter
from Google Fonts) and prints it to PDF.

```powershell
$edge = 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
$src  = 'file:///C:/Projetos/matheus-portfolio/scripts/cv/cv.html'
$out  = 'C:\Projetos\matheus-portfolio\public\cv\Matheus-Alexandre-CV.pdf'
& $edge --headless=new --disable-gpu --no-sandbox --no-pdf-header-footer `
        --virtual-time-budget=8000 "--print-to-pdf=$out" $src
```

Open the PDF afterwards and check it still fits on a single page.
