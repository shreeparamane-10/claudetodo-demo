// Projects: all content comes from the resume. Add `image: "assets/your-file.png"` to any entry to show a real screenshot.
const projects = [
  {t:"Student Micro-Venture",k:"Entrepreneurship",c:"t1",s:"m",
   d:"A self-funded venture I ran end to end: sourcing, pricing, sales and customer interaction.",
   more:"I tracked margins and costs to guide pricing and spending decisions, generating ₹68 profit on a ₹52 investment (about 131% ROI).",
   sk:["Pricing","Sourcing","Sales","Margin tracking"]},
  {t:"Career Awareness Initiative",k:"Leadership",c:"t2",s:"m",
   d:"Career sessions for 450+ Pre-University students across multiple colleges.",
   more:"I planned and led the sessions, delivered 10+ structured presentations on higher education and career pathways, and handled content, scheduling, logistics and communication for every college.",
   sk:["Public speaking","Research","Event logistics","Planning"]},
  {t:"Excel Analytics Project",k:"Academic",c:"t4",s:"s",
   d:"Pivot tables, dashboards and KPI reports built from raw business data.",
   more:"The goal was to turn raw data into structured insights that support decision-making.",
   sk:["MS Excel","Pivot tables","Dashboards","KPI reporting"],ph:true},
  {t:"Consumer Behaviour Research",k:"Academic",c:"t3",s:"m",
   d:"Surveys and interviews on how customers decide what to buy.",
   more:"I analysed buying behaviour and wrote structured reports that surfaced patterns relevant to business strategy.",
   sk:["Surveys","Interviews","Market research","Reporting"],ph:true},
  {t:"Reliance Retail Interaction",k:"Industry",c:"t5",s:"s",
   d:"An interview with the Sales Head on how a large retailer runs.",
   more:"I explored retail operations, sales strategy and customer engagement, and saw how business decisions get made.",
   sk:["Interviewing","Retail","Sales strategy"]},
  {t:"NGO Internship",k:"Community, 30 hours",c:"t2",s:"s",
   d:"Direct teaching and administrative support for educational programs.",
   more:"I worked with fellow volunteers to run community programs, which built my cross-functional teamwork.",
   sk:["Teaching","Coordination","Teamwork"]},
  {t:"Mobile Shopee",k:"Academic",c:"t1",s:"m",
   d:"A mock venture website built with HTML and CSS.",
   more:"A coursework project to design and build a small site for a fictional mobile-phone business.",
   sk:["HTML","CSS","Web design"],ph:true},
  {t:"Marketing & Database Design",k:"Academic",c:"t4",s:"s",
   d:"Marketing strategy analysis, digital marketing planning and ER modelling.",
   more:"Academic work covering marketing strategy, digital marketing plans and database design with entity-relationship diagrams.",
   sk:["Marketing strategy","Digital marketing","ER modelling","Databases"],ph:true}
];

const $ = id => document.getElementById(id);
const gallery = $("gallery"), modal = $("modal");
let lastFocus;

projects.forEach((p, i) => {
  const b = document.createElement("button");
  b.className = `tile ${p.c} ${p.s}`;
  b.setAttribute("aria-label", `Open details: ${p.t}`);
  b.innerHTML = `<span class="kind"></span><h3></h3><p></p>${p.image ? `<img src="${p.image}" alt="" style="width:100%;border-radius:12px">` : ""}${p.ph ? "<small>Preview to be added</small>" : ""}`;
  b.querySelector(".kind").textContent = p.k;
  b.querySelector("h3").textContent = p.t;
  b.querySelector("p").textContent = p.d;
  b.onclick = () => open(p);
  gallery.appendChild(b);
});

function open(p) {
  lastFocus = document.activeElement;
  $("mt").textContent = p.t; $("mk").textContent = p.k; $("md").textContent = p.d + " " + p.more;
  $("ms").innerHTML = ""; p.sk.forEach(s => { const li = document.createElement("li"); li.textContent = s; $("ms").appendChild(li); });
  $("mn").textContent = p.ph ? "Screenshots or files for this project haven't been added yet." : "";
  modal.hidden = false; $("close").focus(); document.body.style.overflow = "hidden";
}
function shut() { modal.hidden = true; document.body.style.overflow = ""; lastFocus && lastFocus.focus(); }
$("close").onclick = shut;
modal.addEventListener("click", e => { if (e.target === modal) shut(); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && !modal.hidden) shut(); });

const burger = $("burger"), menu = $("menu");
burger.onclick = () => {
  const o = menu.classList.toggle("open");
  burger.setAttribute("aria-expanded", o);
  burger.setAttribute("aria-label", o ? "Close menu" : "Open menu");
};
menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  menu.classList.remove("open"); burger.setAttribute("aria-expanded", "false");
}));
