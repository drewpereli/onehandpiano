import "./src/styles/app.css";
import Aos from "aos";
import emailjs from "emailjs-com";

function onEmailStart() {
  document
    .getElementById("email-form-submit-btn")
    .classList.add("btn-in-progress");

  document.getElementById("email-form-success-message").classList.add("hidden");
  document.getElementById("email-form-error-message").classList.add("hidden");
}

function onEmailSuccess() {
  document
    .getElementById("email-form-submit-btn")
    .classList.remove("btn-in-progress");

  document
    .getElementById("email-form-success-message")
    .classList.remove("hidden");

  document.getElementById("contact-form").reset();
}

function onEmailFailure() {
  document
    .getElementById("email-form-submit-btn")
    .classList.remove("btn-in-progress");

  document
    .getElementById("email-form-error-message")
    .classList.remove("hidden");
}

document.querySelectorAll(".main-nav-item").forEach(el => {
  let sectionName = el.dataset.section;

  el.addEventListener("click", () => {
    let section = document.getElementById(`section-${sectionName}`);
    section?.scrollIntoView({ behavior: "smooth" });
  });
});

document.getElementById("contact-form")?.addEventListener("submit", e => {
  e.preventDefault();

  onEmailStart();

  let formData = new FormData(e.target);

  let templateParams = {
    from_name: formData.get("name") || "an anonymous user",
    from_email: formData.get("email"),
    message: formData.get("message"),
  };

  emailjs
    .send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      templateParams
    )
    .then(response => {
      onEmailSuccess();
    })
    .catch(err => {
      console.log(err);
      onEmailFailure();
    });
});

Aos.init({ duration: 800 });

emailjs.init(process.env.EMAILJS_USER_ID);
