// Experience cards (improved)
AOS.init();

const experiencecards = document.querySelector(".experience-cards");

// Data: bullets as strings, not HTML
const exp = [
  {
    title: "Assistant Project Manager",
    cardImage: "assets/images/experience-page/Houle_Logo_Standard.jpg",
    imageAlt: "Houle Electric logo",
    place: "Houle Electric",
    time: "(Jan, 2024 - Aug, 2024)",
    bullets: [
    "Built mobile-first QA/QC forms in Procore with field validations and conditional logic—turning paper checklists into structured data for analysis.",
    "Automated Excel-based reporting with Python (ingest, schema validation, report generation), eliminating repetitive data entry and reducing errors.",
    "Delivered internal progress dashboards and debugged construction-management toolchains with PMs/engineers/electricians to keep hospital-redevelopment milestones unblocked."
    ],
  },
  {
    title: "Retail Sales Associate",
    cardImage: "assets/images/experience-page/Bbuy.png",
    imageAlt: "Best Buy logo",
    place: "Best Buy",
    time: "(Sept, 2021 - Aug, 2023)",
    bullets: [
      "Welcomed customers and discussed their needs about mobile phones and data plans.",
      "Sold a broad range of mobile products and services using a proven structured approach while developing in-depth knowledge of the latest mobile tech.",
      "Handled contracts, warranties, payments, and cash/credit transactions."
    ],
  },
  {
    title: "Freelance Developer",
    cardImage: "assets/images/experience-page/freelance.png",
    imageAlt: "Freelance developer icon",
    place: "Own",
    time: "(Mar, 2020 - Aug, 2021)",
    bullets: [
      "Crafted mobile-friendly websites and transitioned legacy site to mobile-friendly platform.",
      "Contributed back-end development experience and collaborated on multiple APIs crucial to functionality.",
      "Kept up with latest technologies, software, and hardware for project use."
    ],
  },
];

// tiny escape helper for text nodes
const esc = (s) => String(s)
  .replace(/&/g, "&amp;").replace(/</g, "&lt;")
  .replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

const showCards2 = () => {
  if (!experiencecards) return;

  const html = exp.map((item, i) => {
    const bulletLis = item.bullets.map(b => `<li>${esc(b)}</li>`).join("");
    const delay = 100 + i * 100; // 100ms, 200ms, 300ms...
    return `
      <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="${delay}" data-aos-duration="400">
        <div class="card card1">
          <img src="${esc(item.cardImage)}" alt="${esc(item.imageAlt || item.place)}" class="featured-image" loading="lazy"/>
          <article class="card-body">
            <header>
              <div class="title">
                <h3>${esc(item.title)}</h3>
              </div>
              <p class="meta">
                <span class="pre-heading">${esc(item.place)}</span><br>
                <span class="author">${esc(item.time)}</span>
              </p>
              <ol>
                ${bulletLis}
              </ol>
            </header>
          </article>
        </div>
      </div>
    `;
  }).join("");

  experiencecards.innerHTML = html;

  // re-scan for AOS attributes after injecting DOM
  if (window.AOS && typeof AOS.refreshHard === "function") {
    AOS.refreshHard();
  } else if (window.AOS && typeof AOS.refresh === "function") {
    AOS.refresh();
  }
};

document.addEventListener("DOMContentLoaded", showCards2);
