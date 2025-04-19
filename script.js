
(function () {
  emailjs.init("nkW-HmC-RAiynjPI6");
})();

const hamburger = document.getElementById("hamburger");
const navbar = document.querySelector(".navbar");
const homeSection = document.querySelector(".home");
hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
  hamburger.classList.toggle("bx-menu");
  hamburger.classList.toggle("bx-x");
  if (navbar.classList.contains("active")) {
    homeSection.style.marginTop = `${navbar.offsetHeight}px`;
  } else {
    homeSection.style.marginTop = "0";
  }
});

const themeToggle = document.getElementById("theme-toggle");
let isLightTheme = localStorage.getItem("theme") === "light";
if (isLightTheme) {
  document.body.classList.add("light-theme");
  themeToggle.innerHTML = "<i class='bx bx-sun'></i>";
} else {
  themeToggle.innerHTML = "<i class='bx bx-moon'></i>";
}
themeToggle.addEventListener("click", () => {
  if (isLightTheme) {
    document.body.classList.remove("light-theme");
    themeToggle.innerHTML = "<i class='bx bx-moon'></i>";
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.add("light-theme");
    themeToggle.innerHTML = "<i class='bx bx-sun'></i>";
    localStorage.setItem("theme", "light");
  }
  isLightTheme = !isLightTheme;
});

const langToggle = document.getElementById("lang-toggle");
let currentLang = "en";
langToggle.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "tr" : "en";
  document.querySelectorAll("[data-lang-en]").forEach((el) => {
    el.textContent = el.getAttribute(`data-lang-${currentLang}`);
  });
});

window.addEventListener("scroll", () => {
  const offset = window.scrollY * 0.2;
  document
    .querySelector(".home")
    .style.setProperty("--parallax-offset", `${offset}px`);
});

const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  { threshold: 0.2 }
);
sections.forEach((section) => observer.observe(section));

let lastScrollTop = 0;
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

window.onscroll = function () {
  const scrollTopBtn = document.getElementById("scroll-top");
  const footer = document.getElementById("footer");
  const scrollPosition = window.scrollY + window.innerHeight;
  const documentHeight = document.body.offsetHeight;

  if (scrollPosition >= documentHeight - 10) {
    footer.classList.add("visible");
  } else {
    footer.classList.remove("visible");
  }

  scrollTopBtn.style.display = window.scrollY > 300 ? "flex" : "none";
};

document.getElementById("scroll-top").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    emailjs.sendForm("Muhammet Gmail", "template_sj7ewts", this).then(
      () => {
        alert("Message sent successfully!");
        this.reset();
      },
      (error) => {
        alert("Failed to send message: " + error.text);
      }
    );
  });

const modal = document.getElementById("project-modal");
const closeModal = document.getElementById("close-modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

const skillBoxes = document.querySelectorAll(".skill-box");
skillBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    box.classList.toggle("active");
  });
});

function createParticles() {
  const particlesContainer = document.createElement("div");
  particlesContainer.className = "particles";
  document.body.appendChild(particlesContainer);

  for (let i = 0; i < 20; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 5}s`;
    particlesContainer.appendChild(particle);
  }
}
createParticles();

function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString("en-US", { hour12: false });
  document.getElementById("current-time").textContent = timeString;
}
setInterval(updateTime, 1000);
updateTime();

function animateCounter() {
  const counter = document.getElementById("years-counter");
  const target = +counter.getAttribute("data-target");
  let count = 0;
  const speed = 200;

  const updateCount = () => {
    const increment = target / speed;
    count += increment;
    if (count < target) {
      counter.textContent = Math.ceil(count);
      setTimeout(updateCount, 20);
    } else {
      counter.textContent = target;
    }
  };
  updateCount();
}
animateCounter();
