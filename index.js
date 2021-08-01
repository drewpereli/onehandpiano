import "./src/styles/app.css";
import Aos from "aos";

document.querySelectorAll(".main-nav-item").forEach(el => {
  let sectionName = el.dataset.section;

  el.addEventListener("click", () => {
    let section = document.getElementById(`section-${sectionName}`);
    section?.scrollIntoView({ behavior: "smooth" });
  });
});

document.getElementById("contact-form")?.addEventListener("submit", e => {
  e.preventDefault();
  // let form = e.target;
  console.log("submitting the form");
});

Aos.init({ duration: 800 });
