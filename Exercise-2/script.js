const pdfData={
  workerAppId:"712041", submitted:"March 19, 2024 19:21", claimNo:"20042047", suffix:"WP",
  reportDate:"March 15, 2024", workerName:"Madeleine Willson", contact:{address:"333 Broadway",city:"Winnipeg, MB R3C 4W3",phone:"(204) 954-4321",tollFree:"1-855-954-4321",website:"wcb.mb.ca"},
  returnToWork:{status:"returned",returnDate:"March 15, 2024",workStatus:"modifiedReduced",otherWorking:"",outlook:"Terrible. Testing Testing",expectedDate:"",concerns:"",contactName:"",contactDate:""},
  recovery:{status:"fully",comments:""},
  pain:null,
  treatment:{status:"none",providerType:"",lastDate:"",lastProvider:"",nextDate:"",nextProvider:"",therapyFrequency:""},
  medication:{status:"none",name:""},
  exercises:{status:"none",list:""},
  otherInfo:"No info Testing Testing",
  certify:true,privacy:true
};

const alternateData=structuredClone(pdfData);
Object.assign(alternateData,{workerAppId:"845126",submitted:"August 31, 2026 18:30",claimNo:"30578126",reportDate:"August 28, 2026",workerName:"Jordan Carter"});
alternateData.returnToWork={status:"returned",returnDate:"August 28, 2026",workStatus:"fullRegular",otherWorking:"",outlook:"My return to work is progressing well.",expectedDate:"September 5, 2026",concerns:"No concerns at this time.",contactName:"Alex Morgan",contactDate:"August 29, 2026"};
alternateData.recovery={status:"notFully",comments:"I am continuing to recover and following the recommended treatment plan."};
alternateData.pain=7;
alternateData.treatment={status:"continuing",providerType:"Physiotherapist",lastDate:"August 25, 2026",lastProvider:"Dr. Patel",nextDate:"September 3, 2026",nextProvider:"Dr. Patel",therapyFrequency:"Twice a week"};
alternateData.medication={status:"taking",name:"Naproxen"};
alternateData.exercises={status:"doing",list:"Stretching, walking exercises, and prescribed strengthening exercises."};
alternateData.otherInfo="I have been following my treatment plan and have been able to gradually increase my work activities.";

const longData=structuredClone(alternateData);
longData.otherInfo="I would like to provide the following additional information about my claim/injury: I have continued to follow my treatment plan, communicate with my healthcare provider, complete the recommended home exercises, and gradually increase my workplace activities. My employer has also been supporting a gradual transition back to regular duties.";
longData.returnToWork.concerns="I have some concerns about increasing my workload too quickly because prolonged standing and repetitive movement can still be difficult. I am working with my healthcare provider and employer to make the transition gradual and sustainable.";
longData.recovery.comments="My recovery is progressing, although I still experience occasional discomfort. I am continuing with treatment, home exercises, and workplace modifications as recommended by my healthcare provider.";
longData.exercises.list="Daily stretching, controlled strengthening exercises, short walks, mobility exercises, and the home exercise program recommended by my physiotherapist.";

function esc(v){return String(v??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}
function check(active){return `<span class="check ${active?'checked':'unchecked'}" aria-hidden="true"></span>`}
function line(value, label=""){return `<span><span class="line-field">${esc(value)}</span>${label?`<span class="date-label">${esc(label)}</span>`:""}</span>`}
function header(d){return `<header class="header"><img class="logo" src="assets/wcb-logo.png" alt="Workers Compensation Board of Manitoba"><div class="contact"><div>${esc(d.contact.address)}</div><div>${esc(d.contact.city)}</div><div>Phone: ${esc(d.contact.phone)}</div><div>Toll Free: ${esc(d.contact.tollFree)}</div><div>${esc(d.contact.website)}</div></div><div class="title-area"><h1 class="title">Worker Progress Report</h1><div class="claim-row"><div class="claim-box">Claim No. ${esc(d.claimNo)}</div><div class="wp-box">${esc(d.suffix)}</div></div></div></header>`}
function footer(d,page){return `<footer class="footer"><div>Worker App ID: ${esc(d.workerAppId)}</div><div class="footer-right"><div>Submitted: ${esc(d.submitted)}</div><div>Page ${page} of 3</div></div></footer>`}

function page1(d){const r=d.returnToWork,c=d.recovery;return `<section class="document">${header(d)}<p class="intro"><span class="data">${esc(d.workerName)}</span> provided the following updates in relation to their claim:</p><h2 class="section-title">Return to Work</h2>
<div class="box"><div class="box-label">Select one:</div><div class="option-grid return-grid"><div class="option">${check(r.status==='notMissed')}I have not missed<br>time from work</div><div class="option">${check(r.status==='notReturned')}I have not returned<br>to work</div><div class="option">${check(r.status==='returned')}I returned to work on: ${line(r.returnDate,'Date')}</div></div></div>
<div class="box"><div class="box-label">I am working:</div><div class="option-grid work-grid"><div class="option">${check(r.workStatus==='fullRegular')}Full duties, regular<br>hours</div><div class="option">${check(r.workStatus==='fullReduced')}Full duties, reduced<br>hours</div><div class="option">${check(r.workStatus==='modifiedRegular')}Modified duties,<br>regular hours</div><div class="option">${check(r.workStatus==='modifiedReduced')}Modified duties,<br>reduced hours</div></div><div class="inline-field">${check(!!r.otherWorking)}Other: <span class="line-field" style="min-width:470px">${esc(r.otherWorking)}</span></div></div>
<div class="box"><div class="box-label">My return to work is going:</div><div class="textarea small data">${esc(r.outlook)}</div></div>
<div class="centered-line">I expect to return to work on: ${line(r.expectedDate,'Date')}</div>
<div class="box"><div class="box-label">I have the following concerns about returning to work:</div><div class="textarea">${esc(r.concerns)}</div></div>
<div class="centered-line">I was most recently in contact with: ${line(r.contactName,'(Name of employer contact)')} &nbsp; on &nbsp; ${line(r.contactDate,'Date')}</div>
<h2 class="section-title">Recovery</h2><div class="box"><div class="box-label">Select one:</div><div class="option-grid recovery-grid"><div class="option">${check(c.status==='notFully')}I have not fully recovered from my workplace<br>injury.</div><div class="option">${check(c.status==='fully')}I have fully recovered from my workplace<br>injury.</div></div></div>
<div class="box"><div class="box-label">I have provided the following comments about my recovery:</div><div class="textarea">${esc(c.comments)}</div></div>${footer(d,1)}</section>`}

function page2(d){const t=d.treatment,m=d.medication,e=d.exercises;return `<section class="document"><div class="continuation-header">Worker Progress Report</div><div class="pain-row"><div class="pain-text">I rate my current pain/discomfort on a scale of 1-10,<br>where 1 is no pain and 10 is severe pain out of 10.</div><div class="pain-scale">${Array.from({length:10},(_,i)=>`<div class="pain-item">${check(d.pain===i+1)}${i+1}</div>`).join('')}</div></div>
<div class="box"><div class="box-label">Select one:</div><div class="option-grid treatment-grid"><div class="option">${check(t.status==='none')}I am not continuing to<br>receive medical treatment for<br>my workplace injury.</div><div class="option">${check(t.status==='continuing')}I am continuing to receive<br>medical treatment for my<br>workplace injury from:</div><div>${line(t.providerType,'(Medical Provider Type)')}</div></div></div>
<div class="centered-line">My last medical treatment was ${line(t.lastDate,'Date')} from ${line(t.lastProvider,'(Medical Provider Name)')}</div>
<div class="centered-line">My next medical treatment is ${line(t.nextDate,'Date')} from ${line(t.nextProvider,'(Medical Provider Name)')}</div>
<div class="centered-line">I am attending a Chiropractor or Physiotherapist ${line(t.therapyFrequency,'(Frequency)')}</div>
<div class="box"><div class="box-label">Select one:</div><div class="option-grid med-grid"><div class="option">${check(m.status==='none')}I am not taking medication<br>for my workplace injury.</div><div class="option">${check(m.status==='taking')}I am taking medication for my<br>workplace injury:</div><div>${line(m.name,'(Name of prescribed medication)')}</div></div></div>
<div class="box"><div class="box-label">Select one:</div><div class="option-grid exercise-grid"><div class="option">${check(e.status==='none')}I am not doing home exercises for my workplace<br>injury.</div><div class="option">${check(e.status==='doing')}I am doing home exercises for my workplace<br>injury.</div></div></div>
<div class="box"><div class="box-label">List the exercises you are doing:</div><div class="textarea long data">${esc(e.list)}</div></div>
<div class="other-title">Other Information</div><div class="box"><div class="box-label">I would like to provide the following additional information about my claim/injury:</div><div class="textarea small data">${esc(d.otherInfo)}</div></div>${footer(d,2)}</section>`}

function page3(d){return `<section class="document"><div class="certification"><div class="option">${check(d.certify)}<span>I certify that the information given on this form is true, correct and complete to the best of my knowledge. I agree to notify the Workers Compensation Board of Manitoba (WCB) immediately once I return to any form of work and/or employment. I understand that it is an offence to knowingly make a false statement to the WCB. I also understand that it is an offence to withhold information from WCB which affects my entitlement to compensation (e.g., full or partial recovery from injury, ability to return to work, sources of additional income, etc.). I understand that refusing to co-operate with, or follow my treatment, may result in the WCB reducing or suspending my benefits.</span></div></div><div class="privacy"><div class="option">${check(d.privacy)}<span>I understand that the <a href="#" onclick="return false">Privacy Notice</a> applies to the personal information collected in this document.</span></div></div>${footer(d,3)}</section>`}

function render(d){document.getElementById('document').innerHTML=page1(d)+page2(d)+page3(d)}
document.getElementById('pdfBtn').onclick=()=>render(pdfData);
document.getElementById('demoBtn').onclick=()=>render(alternateData);
document.getElementById('stressBtn').onclick=()=>render(longData);
document.getElementById('printBtn').onclick=()=>window.print();
render(pdfData);
