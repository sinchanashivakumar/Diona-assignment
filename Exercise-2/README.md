# Exercise 2 — Worker Progress Report

A pure HTML, CSS and Vanilla JavaScript recreation of the supplied three-page Worker Progress Report PDF.

## Tech Stack
- HTML5
- CSS3
- Vanilla JavaScript

No npm packages or external libraries are required.

## Run

```bash
python -m http.server 5500
```

Open `http://localhost:5500/`.

Alternatively, open `index.html` directly in a browser.

## Features
- A4 print-oriented three-page document
- WCB logo, contact information, report title and claim number
- Return to Work section with dynamic selections and dates
- Recovery section with dynamic status and comments
- Pain/discomfort scale from 1–10
- Medical treatment and provider information
- Medication status
- Chiropractor/physiotherapist frequency
- Home exercise status and exercise details
- Other Information section
- Certification and Privacy Notice acknowledgement
- Worker App ID, submission timestamp and page numbering
- Dynamic data rendered entirely through JavaScript
- Three datasets for browser demonstration: reference data, alternate data, and long-text data
- Print / Save as PDF support

## Dynamic Elements Identified from the Reference PDF
The supplied PDF contains data such as worker name, claim number, report date, return-to-work status/date, work-duty status, return-to-work comments, expected return date, employer contact, recovery status/comments, pain rating, treatment status/provider details, treatment dates, therapy frequency, medication status/name, home exercise status/list, other information, certification and privacy acknowledgement. The reference is three pages. fileciteturn2file0L44-L62 fileciteturn2file0L65-L105 fileciteturn2file0L107-L116

## Assumptions
- The source PDF is treated as a generated report rather than an editable form, so JavaScript data drives the displayed values.
- The supplied logo is reused as the document image asset.
- The default dataset reproduces the visible/sample values in the PDF; fields that appear blank or unselected remain blank/unselected.
- The reference document is maintained as three A4 pages. Longer dynamic text is wrapped within the corresponding fields.

## Challenges and Solutions
- **Dynamic check states:** A reusable JavaScript `check()` function renders selected/unselected states from data.
- **PDF-like layout:** CSS uses A4 dimensions, fixed footer placement, print rules and bordered sections.
- **Variable text:** Dynamic text is escaped before HTML insertion and text-heavy areas wrap naturally.
- **Multiple datasets:** The same rendering functions are reused for the reference, alternate and long-text datasets.

## AI Usage
See `AI-PROMPTS.md` for the documented AI-assisted development prompts. Replace the consolidated examples with the exact prompts used during development if required by the submission process.
