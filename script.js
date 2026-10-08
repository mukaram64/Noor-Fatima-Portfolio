document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => nav.classList.remove("open"));
    });
  }

  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      const status = document.getElementById("formMessage");

      if (!name || !email || !message) {
        status.textContent = "Please fill in all fields.";
        status.style.color = "#fca5a5";
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        status.textContent = "Please enter a valid email address.";
        status.style.color = "#fca5a5";
        return;
      }

      status.textContent = `Thank you, ${name}! Your message has been received.`;
      status.style.color = "#86efac";
      form.reset();
    });
  }
});
