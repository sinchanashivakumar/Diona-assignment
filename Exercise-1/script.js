const defaultData = {
  workerAppId: "712041",
  submitted: "March 28, 2024 20:43",
  claimNo: "20042047",
  workerName: "Madeleine Willson",
  contact: {
    address: "333 Broadway",
    city: "Winnipeg, MB R3C 4W3",
    phone: "(204) 954-4321",
    tollFree: "1-855-954-4321",
    website: "wcb.mb.ca"
  },
  prescriptionDrugs: [
    {
      drugName: "Naproxen",
      prescriptionDate: "February 28, 2024",
      datePurchased: "February 29, 2024",
      provider: "Dr. Best",
      amount: "$20.00"
    }
  ],
  otcDrugs: [
    {
      drugName: "Advil",
      datePurchased: "March 28, 2024",
      amount: "$8.00",
      seller: "Shoppers Drug Mart",
      reason: "Pain"
    }
  ],
  medicalSupplies: [
    {
      item: "Tensor",
      datePurchased: "February 28, 2024",
      prescribed: "Yes",
      provider: "Dr. Best",
      amount: "$10.00",
      seller: "Shoppers DrugMart"
    }
  ],
  parking: [
    {
      facility: "333 St Mary Ave, Winnipeg MB R3C4A5, Canada",
      date: "March 28, 2024",
      amount: "$10.00",
      meterUsed: "yes",
      meterNumber: "12245"
    }
  ],
  mileage: [
    {
      appointmentDate: "March 28, 2024",
      facility: "HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada",
      workplace: "WCB, 333 Broadway, Winnipeg MB R3C 4W3,Canada",
      km: "20 km"
    }
  ],
  busTaxi: [
    {
      appointmentDate: "March 28, 2024",
      startingPoint: "",
      facility: "HSC Winnipeg Women’s Hospital, 665 William Ave, Winnipeg MB R3E 0Z2, Canada",
      type: "Bus",
      fare: "$3.00"
    },
    {
      appointmentDate: "March 27, 2024",
      startingPoint: "25 Furby St, Winnipeg MB R3C2A2, Canada",
      facility: "440 Edmonton St, Winnipeg MB R3B 2M4, Canada",
      type: "Taxi",
      fare: "$15.00"
    }
  ]
};

const tableDefinitions = {
  prescriptionDrugs: {
    title: "Prescription Drugs",
    headers: ["Drug Name", "Prescription Date", "Date Purchased", "Healthcare Provider Name", "Paid Amount"],
    widths: ["21%", "17%", "17%", "32%", "13%"],
    map: x => [x.drugName, x.prescriptionDate, x.datePurchased, x.provider, x.amount]
  },
  otcDrugs: {
    title: "Over-the-Counter Drugs",
    headers: ["Drug Name", "Date Purchased", "Paid Amount", "Seller's Name", "Reason for Purchasing"],
    widths: ["21%", "17%", "11%", "24%", "27%"],
    map: x => [x.drugName, x.datePurchased, x.amount, x.seller, x.reason]
  },
  medicalSupplies: {
    title: "Bandages, Braces or Other Medical Supplies",
    headers: ["Item Purchased", "Date Purchased", "Was this Prescribed?", "Healthcare Provider Name", "Paid Amount", "Seller's Name"],
    widths: ["20%", "10%", "10%", "23%", "11%", "26%"],
    map: x => [x.item, x.datePurchased, x.prescribed, x.provider, x.amount, x.seller]
  },
  parking: {
    title: "Parking for Medical Appointments",
    headers: ["Address of Healthcare Provider/Medical Facility", "Date", "Paid Amount", "Meter Used?", "Meter Number"],
    widths: ["40%", "18%", "14%", "12%", "16%"],
    map: x => [x.facility, x.date, x.amount, x.meterUsed, x.meterNumber]
  },
  mileage: {
    title: "Mileage to Medical Appointments",
    headers: ["Appointment Date", "Address of Healthcare Provider/Medical Facility", "Address of Workplace", "Number of km (Round Trip)"],
    widths: ["16%", "34%", "31%", "19%"],
    note: "The WCB will generally reimburse only those transportation costs which are in excess of costs that would be incurred by the worker while travelling to and from work.",
    map: x => [x.appointmentDate, x.facility, x.workplace, x.km]
  },
  busTaxi: {
    title: "Bus or Taxi Fare for Medical Appointments*",
    headers: ["Appointment Date", "Address of Starting Point", "Address of Healthcare Provider/Medical Facility", "Bus or Taxi (indicate one)", "Total Fare Paid"],
    widths: ["14%", "29%", "34%", "14%", "9%"],
    note: "*Note: Pre-approval is required from your WCB representative to claim taxi fare(s).",
    map: x => [x.appointmentDate, x.startingPoint, x.facility, x.type, x.fare]
  }
};

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function row(cells) {
  return `<tr>${cells.map(value => `<td class="data">${escapeHtml(value)}</td>`).join("")}</tr>`;
}

function table(definition, records) {
  const colgroup = definition.widths
    ? `<colgroup>${definition.widths.map(w => `<col style="width:${w}">`).join("")}</colgroup>`
    : "";

  return `
    <table>
      ${colgroup}
      <thead>
        <tr>${definition.headers.map(h => `<th>${escapeHtml(h)}</th>`).join("")}</tr>
      </thead>
      <tbody>
        ${records.length
          ? records.map(definition.map).map(row).join("")
          : `<tr class="empty-row"><td colspan="${definition.headers.length}">No entries</td></tr>`}
      </tbody>
    </table>`;
}

function header(data) {
  return `
    <header class="header">
      <div>
        <img class="logo" src="assets/wcb-logo.png" alt="Workers Compensation Board of Manitoba">
      </div>
      <div class="contact">
        <div>${escapeHtml(data.contact.address)}</div>
        <div>${escapeHtml(data.contact.city)}</div>
        <div>Phone: ${escapeHtml(data.contact.phone)}</div>
        <div>Toll Free: ${escapeHtml(data.contact.tollFree)}</div>
        <div>${escapeHtml(data.contact.website)}</div>
      </div>
      <div class="title-area">
        <h1 class="title">Medical &amp; Travel Expense<br>Request</h1>
        <div class="claim-box">Claim No. ${escapeHtml(data.claimNo)}</div>
      </div>
    </header>`;
}

function footer(data, page, total) {
  return `
    <footer class="footer">
      <div>Worker App ID: ${escapeHtml(data.workerAppId)}</div>
      <div class="footer-right">
        <div>Submitted: ${escapeHtml(data.submitted)}</div>
        <div>Page ${page} of ${total}</div>
      </div>
    </footer>`;
}

/*
  Pagination model:
  - A page has a conservative "content unit" capacity.
  - Long/large datasets are split into row chunks.
  - The paginator keeps related section headings with their first rows.
  - Page numbers are generated only after all pages are known, so they always
    show Page X of Y.
  - The default PDF dataset naturally remains a two-page document.
*/
const PAGE_CAPACITY = 31;
const HEADER_UNITS = 8;
const INTRO_UNITS = 4;
const SECTION_HEADING_UNITS = 3;
const NOTE_UNITS = 4;
const ROW_UNITS = 3;

function chunkRecords(records, maxRows) {
  const chunks = [];
  for (let i = 0; i < records.length; i += maxRows) {
    chunks.push(records.slice(i, i + maxRows));
  }
  return chunks.length ? chunks : [[]];
}

function sectionUnits(definition, records) {
  const longText = records.some(record =>
    definition.map(record).some(value => String(value ?? "").length > 55)
  );
  return SECTION_HEADING_UNITS + (definition.note ? NOTE_UNITS : 0) +
    records.reduce((total, record) => {
      const cells = definition.map(record);
      const extra = cells.some(value => String(value ?? "").length > 80) ? 1 : 0;
      return total + ROW_UNITS + extra;
    }, 0) + 2;
}

function paginateSections(data) {
  const orderedKeys = [
    "prescriptionDrugs",
    "otcDrugs",
    "medicalSupplies",
    "parking",
    "mileage",
    "busTaxi"
  ];

  const pages = [];
  let current = {
    intro: false,
    sections: [],
    units: HEADER_UNITS
  };

  function pushPage() {
    if (current.sections.length || current.intro) pages.push(current);
    current = { intro: false, sections: [], units: HEADER_UNITS };
  }

  // Keep the document introduction on the first page.
  current.intro = true;
  current.units += INTRO_UNITS;

  orderedKeys.forEach(key => {
    const def = tableDefinitions[key];
    const records = data[key] || [];

    // Default/reference data: keep the original two-page composition.
    if (data === defaultData) {
      if (key !== "busTaxi") {
        current.sections.push({ key, def, records, continuation: false });
        current.units += sectionUnits(def, records);
      }
      return;
    }

    // Dynamic dataset: split each table into conservative chunks.
    const availableUnits = Math.max(
      1,
      PAGE_CAPACITY - current.units - SECTION_HEADING_UNITS - (def.note ? NOTE_UNITS : 0)
    );
    const maxRows = Math.max(1, Math.floor(availableUnits / ROW_UNITS));
    const chunks = chunkRecords(records, maxRows);

    chunks.forEach((chunk, index) => {
      const units = sectionUnits(def, chunk);

      if (current.sections.length && current.units + units > PAGE_CAPACITY) {
        pushPage();
      }

      // If a single chunk is still too large, split it further.
      if (current.units + units > PAGE_CAPACITY && chunk.length > 1) {
        const smallerChunks = chunkRecords(chunk, Math.max(1, Math.floor(chunk.length / 2)));
        smallerChunks.forEach((smallChunk, smallIndex) => {
          const smallUnits = sectionUnits(def, smallChunk);
          if (current.sections.length && current.units + smallUnits > PAGE_CAPACITY) {
            pushPage();
          }
          current.sections.push({
            key, def, records: smallChunk,
            continuation: index > 0 || smallIndex > 0
          });
          current.units += smallUnits;
        });
      } else {
        if (current.sections.length && current.units + units > PAGE_CAPACITY) {
          pushPage();
        }
        current.sections.push({
          key, def, records: chunk,
          continuation: index > 0
        });
        current.units += units;
      }
    });
  });

  // For the reference dataset, Bus/Taxi is page 2.
  if (data === defaultData) {
    pushPage();
    pages.push({
      intro: false,
      sections: [{
        key: "busTaxi",
        def: tableDefinitions.busTaxi,
        records: data.busTaxi,
        continuation: false
      }],
      units: HEADER_UNITS + sectionUnits(tableDefinitions.busTaxi, data.busTaxi)
    });
  } else {
    pushPage();
  }

  return pages;
}

function renderSection(section) {
  const continuationLabel = section.continuation ? " (continued)" : "";
  return `
    <section class="section">
      <h2>${escapeHtml(section.def.title)}${continuationLabel}</h2>
      ${section.def.note ? `<p class="section-note">${escapeHtml(section.def.note)}</p>` : ""}
      ${table(section.def, section.records)}
    </section>`;
}

function render(data) {
  const pages = paginateSections(data);
  const total = pages.length;

  document.getElementById("document").innerHTML = pages.map((page, index) => `
    <section class="document">
      ${index === 0 ? header(data) : `<div class="continuation-header">Medical &amp; Travel Expense Request</div>`}

      ${index === 0 && page.intro ? `
        <p class="intro">
          <span class="worker-name">${escapeHtml(data.workerName)}</span>
          requested reimbursement for the following medical and/or travel expenses:
        </p>` : ""}

      ${page.sections.map(renderSection).join("")}

      ${index === total - 1 ? `
        <hr class="divider">
        <label class="privacy">
          <input type="checkbox" checked>
          <span>I understand that the <a href="#" onclick="return false;">Privacy Notice</a> applies to the personal information collected in this document.</span>
        </label>` : ""}

      ${footer(data, index + 1, total)}
    </section>
  `).join("");
}

function makeLargeData() {
  const d = structuredClone(defaultData);

  d.prescriptionDrugs = Array.from({length: 10}, (_, i) => ({
    drugName: ["Naproxen", "Ibuprofen", "Acetaminophen", "Aspirin", "Celecoxib"][i % 5],
    prescriptionDate: `March ${10 + i}, 2024`,
    datePurchased: `March ${11 + i}, 2024`,
    provider: i % 2 ? "Dr. Smith" : "Dr. Best",
    amount: `$${(10 + i * 2.5).toFixed(2)}`
  }));

  d.otcDrugs = Array.from({length: 10}, (_, i) => ({
    drugName: ["Advil", "Tylenol", "Band-Aid", "Reactine", "Antacid"][i % 5],
    datePurchased: `March ${1 + i}, 2024`,
    amount: `$${(5 + i * 1.5).toFixed(2)}`,
    seller: i % 2 ? "Shoppers Drug Mart" : "London Drugs",
    reason: ["Pain", "Headache", "First aid", "Allergy", "Stomach discomfort"][i % 5]
  }));

  d.medicalSupplies = Array.from({length: 10}, (_, i) => ({
    item: ["Tensor", "Brace", "Bandage", "Cold Pack", "Support Wrap"][i % 5],
    datePurchased: `February ${18 + i}, 2024`,
    prescribed: i % 3 === 0 ? "No" : "Yes",
    provider: i % 2 ? "Dr. Smith" : "Dr. Best",
    amount: `$${(8 + i).toFixed(2)}`,
    seller: "Shoppers DrugMart"
  }));

  d.parking = Array.from({length: 10}, (_, i) => ({
    facility: `${300 + i} St Mary Ave, Winnipeg MB R3C4A5, Canada`,
    date: `March ${10 + i}, 2024`,
    amount: `$${(7 + i).toFixed(2)}`,
    meterUsed: "yes",
    meterNumber: `${12000 + i}`
  }));

  d.mileage = Array.from({length: 10}, (_, i) => ({
    appointmentDate: `March ${10 + i}, 2024`,
    facility: "HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada",
    workplace: "WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada",
    km: `${20 + i} km`
  }));

  d.busTaxi = Array.from({length: 10}, (_, i) => ({
    appointmentDate: `March ${10 + i}, 2024`,
    startingPoint: `${20 + i} Furby St, Winnipeg MB R3C2A2, Canada`,
    facility: "HSC Winnipeg Women’s Hospital, 665 William Ave, Winnipeg MB R3E 0Z2, Canada",
    type: i % 2 ? "Taxi" : "Bus",
    fare: `$${(3 + i * 2).toFixed(2)}`
  }));

  return d;
}

document.getElementById("defaultBtn").addEventListener("click", () => render(defaultData));
document.getElementById("largeBtn").addEventListener("click", () => render(makeLargeData()));
document.getElementById("printBtn").addEventListener("click", () => window.print());

render(defaultData);
