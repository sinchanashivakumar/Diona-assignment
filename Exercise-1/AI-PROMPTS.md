# AI Prompt History

## Exercise 1 — Medical & Travel Expense Request

This document records the prompts used during AI-assisted development of Exercise 1.

### Prompt 1 — Requirement Analysis

> I have been given an assignment to recreate a provided PDF using HTML, CSS, and JavaScript. The implementation should include the image, header, footer, page numbers, and dynamic data. Analyse the attached Medical & Travel Expense Request PDF and identify all sections, tables, static elements, dynamic data elements, and page-level elements that need to be implemented.

**Purpose:**
Used to understand the PDF structure and identify which elements should be static and which should be dynamically generated.

---

### Prompt 2 — HTML Structure

> Based on the attached Medical & Travel Expense Request PDF, create a semantic HTML structure that reproduces the document as closely as practical. Include the WCB header, logo, contact details, claim number, worker information, all expense sections and tables, privacy acknowledgement, and footer. Structure the page so that table rows can later be generated dynamically using JavaScript.

**Purpose:**
Used to plan the HTML structure and reusable document sections.

---

### Prompt 3 — CSS and A4 Layout

> Create CSS to make the HTML document visually similar to the provided PDF. Use an A4-style page layout with appropriate margins, typography, table borders, spacing, header and footer positioning, and print styling. The result should look like an official document rather than a normal web page.

**Purpose:**
Used to implement the PDF-like visual layout and print-friendly styling.

---

### Prompt 4 — Dynamic Data

> Convert the expense tables into a data-driven implementation using vanilla JavaScript. Create JavaScript data objects for Prescription Drugs, Over-the-Counter Drugs, Medical Supplies, Parking, Mileage, and Bus or Taxi Fare. Generate table rows dynamically so that the same page can display one record, multiple records, or no records.

**Purpose:**
Used to implement dynamic table generation instead of hard-coded table rows.

---

### Prompt 5 — Multiple Datasets

> The assignment requires demonstrating dynamic behavior with different datasets, such as a table containing one element or ten elements. Create a default dataset matching the sample PDF and a larger demonstration dataset containing ten records. Add controls to switch between the datasets in the browser without manually changing the HTML.

**Purpose:**
Used to demonstrate that the application responds to changes in the underlying data.

---

### Prompt 6 — Dynamic Pagination

> The document currently has a fixed two-page structure, but the amount of dynamic data can increase. Implement a JavaScript-based pagination approach that creates additional A4 pages when required. The footer should automatically display the correct Page X of Y. Preserve the original two-page layout for the reference dataset while allowing larger datasets to generate additional pages.

**Purpose:**
Used to handle larger datasets without overflowing the document and to make page numbering dynamic.

---

### Prompt 7 — Long Content and Table Handling

> Review the dynamic tables for long addresses and text values. Ensure that long content wraps correctly, table columns remain readable, and rows do not break awkwardly across pages. Improve the CSS and JavaScript where necessary while keeping the implementation limited to HTML, CSS, and vanilla JavaScript.

**Purpose:**
Used to improve the reliability of the layout when dynamic data contains longer values.

---

### Prompt 8 — Code Review

> Review my Exercise 1 implementation as a frontend developer. Check the HTML, CSS, and JavaScript for unnecessary duplication, hard-coded data, poor naming, unsafe dynamic HTML insertion, and opportunities for reusable functions. Keep the implementation simple and compatible with the assignment requirements.

**Purpose:**
Used to review and improve code quality.

---

### Prompt 9 — Final Assignment Check

> Review Exercise 1 against the assignment requirements and identify anything missing. Check for image, header, footer, page numbers, dynamic data, one-record and ten-record datasets, PDF-like layout, dynamic pagination, print support, assumptions, challenges, and AI documentation.

**Purpose:**
Used as a final compliance check before submission.

---

## AI Assistance Disclosure

AI was used as a development assistance tool during this project.

AI assistance was used for:

* Requirement analysis
* HTML structure planning
* CSS and A4 layout development
* JavaScript data modelling
* Dynamic table generation
* Dynamic pagination
* Code review and refinement

The generated suggestions were reviewed and tested in the browser. The implementation was modified where necessary to match the reference PDF and assignment requirements.

The final project was tested using both the reference dataset and a larger dataset to verify dynamic behavior.
