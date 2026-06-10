const header = document.querySelector("[data-header]");
const cursorGlow = document.querySelector(".cursor-glow");
const cards = document.querySelectorAll(".project-card");

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

window.addEventListener("pointermove", (event) => {
  cursorGlow.classList.add("is-active");
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});

window.addEventListener("pointerleave", () => {
  cursorGlow.classList.remove("is-active");
});

cards.forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    card.style.background = `
      radial-gradient(circle at ${x}% ${y}%, rgba(255, 122, 26, 0.24), rgba(255, 190, 75, 0.13) 28%, transparent 44%),
      linear-gradient(145deg, rgba(18, 12, 28, 0.94), rgba(5, 4, 10, 0.9))
    `;
  });

  card.addEventListener("pointerleave", () => {
    card.style.background = "";
  });
});
