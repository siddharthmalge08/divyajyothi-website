const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle?.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
});

document.querySelectorAll('#mainNav a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

// Replace this with the business WhatsApp number before publishing.
const WHATSAPP_NUMBER = "919342627000";

function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

document.getElementById("contactForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = new FormData(e.currentTarget);
  const message = [
    "Hello Divyajyoti Creations,",
    "",
    `Name: ${form.get("name") || ""}`,
    `Company: ${form.get("company") || ""}`,
    `Phone: ${form.get("phone") || ""}`,
    `Email: ${form.get("email") || ""}`,
    "",
    "Requirement:",
    form.get("message") || ""
  ].join("\n");

  openWhatsApp(message);
  e.currentTarget.reset();
});

document.getElementById("whatsappBtn")?.addEventListener("click", (e) => {
  e.preventDefault();
  openWhatsApp("Hello Divyajyoti Creations, I would like to enquire about your bitumen products.");
});

const header = document.getElementById("siteHeader");
window.addEventListener("scroll", () => {
  header?.classList.toggle("scrolled", window.scrollY > 10);
}, {passive:true});
