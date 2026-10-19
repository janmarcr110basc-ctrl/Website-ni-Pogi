const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const destinationGrid = document.getElementById("destinationGrid");
const viewAll = document.getElementById("viewAll");
const favoritesMessage = document.getElementById("favoritesMessage");

// Display the current year
document.getElementById("year").textContent = new Date().getFullYear();

// Toggle between light mode and dark mode
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const darkMode = document.body.classList.contains("dark-mode");
  themeToggle.textContent = darkMode ? "☀" : "☾";
  themeToggle.setAttribute(
    "aria-label",
    darkMode ? "Switch to light mode" : "Switch to dark mode",
  );
});

// Open and close the mobile navigation menu
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the mobile menu after clicking a navigation link
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Show or hide additional destinations
viewAll.addEventListener("click", () => {
  const expanded = destinationGrid.classList.toggle("show-all");

  viewAll.textContent = expanded ? "Show Less ↑" : "View All →";
});

// Save and unsave favorite destinations
document.querySelectorAll(".save-button").forEach((button) => {
  button.addEventListener("click", () => {
    const saved = button.classList.toggle("saved");

    button.textContent = saved ? "♥" : "♡";
    button.setAttribute("aria-pressed", String(saved));

    const card = button.closest(".destination-card");
    const destinationName = card.querySelector("h3").textContent;

    const savedCount = document.querySelectorAll(".save-button.saved").length;

    favoritesMessage.textContent = saved
      ? `${destinationName} added to favorites. You have ${savedCount} saved destination(s).`
      : `${destinationName} removed from favorites. You have ${savedCount} saved destination(s).`;
  });
});
