# OG Image Generator

Source files for `public/og-image.png` — the 1200×630 banner that previews when
the portfolio is shared on LinkedIn, WhatsApp, Discord, Slack, Twitter, etc.

## Files

- **og-image.html** — the visual layout (charcoal background, corner brackets,
  photo, name, role label, stack list, domain). Edit this when the stack or
  positioning changes.
- **og-photo.png** — the cropped circular photo used by `og-image.html`.

## Regenerating after edits

The HTML loads Google Fonts (Inter + JetBrains Mono), so a real browser is
needed to render it. Easiest path on Windows uses Edge headless (already
installed on every Win 10/11 box):

```powershell
$edge = 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
$src  = 'file:///C:/Projetos/matheus-portfolio/scripts/og/og-image.html'
$out  = 'C:\Projetos\matheus-portfolio\public\og-image.png'
$tmp  = "$env:TEMP\og-image-render.png"
if (Test-Path $tmp) { Remove-Item $tmp -Force }
& $edge --headless=new --disable-gpu --hide-scrollbars --no-sandbox `
        --window-size=1200,630 --virtual-time-budget=8000 `
        "--screenshot=$tmp" $src
Move-Item -Path $tmp -Destination $out -Force
```

The `--virtual-time-budget=8000` gives Google Fonts 8s to load before the
screenshot is taken; without it the page renders with system fallback fonts.

After regenerating, ask the LinkedIn Post Inspector and Facebook Sharing
Debugger to re-scrape the URL so the preview cache updates:

- https://www.linkedin.com/post-inspector/
- https://developers.facebook.com/tools/debug/

## When to update

- The stack on the banner drifts from the bio in the Sobre section
- The domain or positioning changes
- The photo is replaced with a fresher portrait

The text content lives in `og-image.html` between the `.content` div — no other
edits needed for copy changes.
