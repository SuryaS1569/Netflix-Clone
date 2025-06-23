// Navbar Scroll Effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Profile Section
const profileIcon = document.querySelector(".profile-icon");
profileIcon.addEventListener("click", () => {
  window.location.href = "profile-details.html";
});

// Movie Card Hover Effect
const movieCards = document.querySelectorAll(".content-card"); // Fixed selector syntax
movieCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
    card.style.transition = "transform 0.3s ease"; // Optional: smooth animation
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});
