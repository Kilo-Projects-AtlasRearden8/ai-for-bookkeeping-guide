# STATUS

## What was built

A beginner manual on using AI for small-business bookkeeping, published by
Asdale Dynamics, LLC (Indiana, formed October 2026). Education only — not tax
advice.

**Manual (`docs/`)** — 11 Markdown files:
- `00-read-me-first.md` — education-only disclaimer, privacy checklist, how to use
- `01-ai-bookkeeping-basics.md` — what AI can/cannot do, tools, weekly workflow, copy-and-paste prompts, key terms
- `02-tracking-income.md` — recording payments, business/personal separation, fees, prompts
- `03-categorizing-expenses.md` — common expense categories, AI categorization prompts, mileage tip
- `04-receipts.md` — capturing/storing receipts, retention, AI receipt prompts
- `05-quarterly-tax-prep.md` — estimated tax, typical deadlines, quarterly prep routine, prompts
- `06-when-to-hire-a-pro.md` — signs it is time for a CPA/EA, what pros do AI cannot
- `docs/worksheets/` — Income Log, Monthly Expense Tracker, Receipt Log, Quarterly Tax Prep Checklist

**Static site (`site/`)** — 12 HTML files plus shared `css/style.css` and `js/app.js`:
- `index.html` — home with chapter index and how to use
- `basics.html`, `income.html`, `expenses.html`, `receipts.html`, `quarterly-taxes.html`, `hire-pro.html`
- `worksheets/index.html` + four printable worksheet pages with `@media print` styles and print buttons

**Other files:** `LICENSE` (MIT, copyright line exactly
`Copyright (c) 2026 Asdale Dynamics, LLC`), `README.md` (credits Asdale
Dynamics, LLC), `STATUS.md` (this file).

## How to run it

No build step, no server, no installation:

1. Open `site/index.html` in any web browser.
2. Navigate chapters from the menu. Worksheet pages have a Print button;
   or press `Ctrl+P`/`Cmd+P` to print any page.
3. Or read the Markdown files in `docs/` directly.

## Verification results

- Custom verification script (`/tmp/kilo/verify_guide.py`, not part of the repo):
  - 12 HTML files all parse; 11 Markdown files present
  - All internal `href`/`src` links resolve (no broken links)
  - `LICENSE` contains the exact copyright line
  - `README.md` credits Asdale Dynamics, LLC
  - No `.github/` directory; no secret/key patterns found in files
- Print CSS present (`@media print` in `site/css/style.css`): hides nav,
  footer, and print buttons; keeps worksheet tables readable on paper
- Site is static HTML/CSS/JS; opens in a browser without a build step

## Known gaps

- No automated test suite or CI (no `.github/workflows` by design); verification
  is the link/structure script above plus manual browser review
- Estimated-tax deadlines and dollar thresholds are U.S.-typical and can
  change; each chapter tells readers to verify with IRS.gov and a tax pro
- Worksheets are print-ready forms, not editable spreadsheets
- No full-text search on the static site
