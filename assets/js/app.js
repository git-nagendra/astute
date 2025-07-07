  document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  });

// Highlight Active Navigation on Page Load
window.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop(); // e.g., "branch.html"
  let activeFound = false;

  // Handle submenu links
  document.querySelectorAll(".child-menu a").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active-link");

      const navItem = link.closest(".nav-item");
      if (navItem) {
        navItem.classList.add("active");
        activeFound = true;
      }
    }
  });

  // Handle top-level nav links
  document.querySelectorAll(".nav-link[href]").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active-link");

      const navItem = link.closest(".nav-item");
      if (navItem) {
        navItem.classList.add("active");
        activeFound = true;
      }
    }
  });

  // Fallback to "Home" on index.html
  if (!activeFound && currentPage === "index.html") {
    const homeItem = document.querySelector('a[href="index.html"]')?.closest(".nav-item");
    if (homeItem) homeItem.classList.add("active");
  }
});

// Profile Dropdown Toggle
document.querySelectorAll(".profile-toggle-wrapper").forEach((wrapper) => {
  const dropdown = wrapper.querySelector(".profile-dropdown");
  if (!dropdown) return;

  wrapper.addEventListener("click", (e) => {
    e.stopPropagation();
    closeAllSubmenus();
    closeAllCustomDropdowns();

    document.querySelectorAll(".profile-dropdown.show").forEach((dd) => {
      if (dd !== dropdown) dd.classList.remove("show");
    });

    dropdown.classList.toggle("show");
  });
});

// Custom 3-dot Dropdown Menu
document.addEventListener("click", (e) => {
  const clickedButton = e.target.closest(".dropdown-toggle-btn");

  // Always hide all dropdowns first
  closeAllCustomDropdowns();

  if (!clickedButton) return;

  // Close other menus
  closeAllSubmenus();
  closeAllDropdowns();

  const dropdown = clickedButton.nextElementSibling;
  const rect = clickedButton.getBoundingClientRect();
  const menuHeight = dropdown.offsetHeight || 160;
  const spaceBelow = window.innerHeight - rect.bottom;

  dropdown.style.display = "block";
  dropdown.style.position = "fixed";
  dropdown.style.left = `${rect.right - 140}px`;
  dropdown.style.top = `${rect.bottom}px`;

  if (spaceBelow < menuHeight) {
    dropdown.style.top = `${rect.top}px`;
    dropdown.classList.add("drop-up");
  }

  e.stopPropagation();
});

// Close Menus on Outside Click
document.addEventListener("click", (e) => {
  if (!e.target.closest(".nav")) closeAllSubmenus();
  if (!e.target.closest(".profile-toggle-wrapper")) closeAllDropdowns();
  if (!e.target.closest(".dropdown-toggle-btn")) closeAllCustomDropdowns();
});

// ---------- Utility Functions ----------
function closeAllSubmenus() {
  document.querySelectorAll(".nav-item.open").forEach((item) => {
    item.classList.remove("open");
  });
}

function closeAllDropdowns() {
  document.querySelectorAll(".profile-dropdown.show").forEach((dd) => {
    dd.classList.remove("show");
  });
}

function closeAllCustomDropdowns() {
  document.querySelectorAll(".dropdown-menu-custom").forEach((menu) => {
    menu.style.display = "none";
    menu.classList.remove("drop-up");
  });
}


// ---------- Demo Login Redirect ----------
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    window.location.href = "index.html";
  });
}


// popup logick
   const openButtons = document.querySelectorAll(".open-popup-btn");
    const closeButtons = document.querySelectorAll(".close-btn");

    openButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-target");
        const popup = document.getElementById(targetId);
        popup.classList.add("show");
        document.body.classList.add("no-scroll");
      });
    });

    closeButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const popup = btn.closest(".popup-overlay");
        popup.classList.remove("show");
        document.body.classList.remove("no-scroll");
      });
    });

    document.querySelectorAll(".popup-overlay").forEach(popup => {
      popup.addEventListener("click", (e) => {
        if (e.target === popup) {
          popup.classList.remove("show");
          document.body.classList.remove("no-scroll");
        }
      });
    });

