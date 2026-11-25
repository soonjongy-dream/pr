const COFFEE_CHAT_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSf3sd_J3BHyymuwxbhIqx2KHtfWCIhQhTL7x8tG5zY_3fumqQ/viewform?usp=publish-editor";

const chatLinks = document.querySelectorAll(".coffee-chat");

chatLinks.forEach((link) => {
  if (!COFFEE_CHAT_URL) {
    return;
  }

  link.href = COFFEE_CHAT_URL;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

const revealItems = document.querySelectorAll(".reveal");
const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

if (motionQuery.matches || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.2 }
  );

  revealItems.forEach((item) => observer.observe(item));
}
