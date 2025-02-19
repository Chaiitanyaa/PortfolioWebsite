AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Retail Sales Associate",
    cardImage: "assets/images/experience-page/Bbuy.png",
    place: "Best Buy",
    time: "(Sept, 2021 - Present)",
    desp: "<li>Welcomed customers and discussing their needs about mobile phones and data plans</li> <li>sold a broad range of mobile products and services using a proven structured approach while at the same time developing in-depth knowledge of the latest mobile technology.</li> <li>Handled all aspects of the sale including: customer contracts and warranties, customer payments, cash and credit card/check transactions.</li>",
  },
  {
    title: "Freelance Developer",
    cardImage: "assets/images/experience-page/freelance.png",
    place: "Own",
    time: "(Mar, 2020 - Aug, 2021)",
    desp: "<li>Crafted mobile-friendly websites and transitioned legacy site to mobile-friendly platform.</li>  <li>Contributed back-end development experience and collaborated on multiple APIs crucial to functionality. </li> <li> Maintained strong education in latest technologies, software and hardware products for use in various projects.</li>", 
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);
