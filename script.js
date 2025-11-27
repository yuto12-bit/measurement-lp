// ===== Mobile Menu =====
const toggle = document.querySelector(".header__toggle");
const nav = document.querySelector(".header__nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
}

// ===== FAQ Accordion =====
const faqItems = document.querySelectorAll(".faq__item");

faqItems.forEach((item) => {
  const q = item.querySelector(".faq__q");

  q.addEventListener("click", () => {
    const isOpen = item.classList.toggle("is-open");
    q.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
});

// ===== CTA click events（計測フック） =====
document.querySelectorAll("[data-event]").forEach((el) => {
  el.addEventListener("click", () => {
    console.log("EVENT:", el.dataset.event);
  });
});
