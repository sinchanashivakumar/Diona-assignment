# Exercise 1 — Medical & Travel Expense Request

## Overview
This project recreates the supplied **Medical & Travel Expense Request** PDF using only HTML, CSS and JavaScript.

The implementation is data-driven: the document is generated from JavaScript objects instead of hard-coded table rows.

## Features
- WCB-style header and supplied logo asset
- Claim number and worker/application information
- Prescription Drugs table
- Over-the-Counter Drugs table
- Medical Supplies table
- Parking table
- Mileage table
- Bus/Taxi table
- Privacy Notice acknowledgement
- Footer with Worker App ID, submission date/time and page number
- Default dataset matching the supplied PDF
- 10-row demo dataset to demonstrate dynamic rendering
- Print / Save as PDF support

## How to run
Open `index.html` in a browser.

For a local server, for example:
```bash
python -m http.server 5500
```
Then open:
`http://localhost:5500`

## Video demonstration plan
1. Explain that the PDF was analysed into static document elements and dynamic data elements.
2. Load the default dataset and compare the output with the reference PDF.
3. Load the 10-row demo and show that JavaScript generates additional records.
4. Open `script.js` and explain:
   - data objects
   - reusable table renderer
   - section rendering
   - dynamic rows
5. Explain CSS:
   - A4 dimensions
   - table borders
   - header/footer layout
   - print styling
6. Mention challenges such as reproducing the PDF spacing and keeping table layout reusable.
7. Disclose AI assistance if used and point to `AI-PROMPTS.md`.

## Assumptions
- The supplied WCB logo is reused as an image asset.
- The reference document's two-page structure is preserved for the default dataset.
- Data values shown in the supplied PDF are treated as sample/demo data.
- Dynamic datasets are used to demonstrate that rows are generated from JavaScript rather than hard-coded HTML.


## Dynamic pagination
The implementation now includes a data-driven pagination layer. When the demo dataset is expanded, table records are chunked into page-sized groups and new A4 pages are created automatically. The footer is generated after the page count is known, so `Page X of Y` stays correct for the resulting document.

The original PDF dataset is intentionally kept in its two-page composition to match the reference document, while larger datasets are allowed to create additional pages.
