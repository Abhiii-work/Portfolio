(function () {
  "use strict";

  var body = document.body;
  var toggleBtn = document.getElementById("themeToggle");
  var toggleLabel = document.getElementById("toggleLabel");
  var STORAGE_KEY = "ahs-portfolio-theme";

  function applyTheme(theme) {
    body.setAttribute("data-theme", theme);
    toggleBtn.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
    toggleLabel.textContent = theme === "light" ? "LIGHT" : "DARK";
    try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) {}
  }

  // Respect a saved preference from a return visit; otherwise the brand
  // default is dark (the "blueprint" theme this design was built for).
  var saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
  applyTheme(saved === "light" ? "light" : "dark");

  toggleBtn.addEventListener("click", function () {
    var current = body.getAttribute("data-theme");
    applyTheme(current === "dark" ? "light" : "dark");
  });

  // Mobile nav
  var burger = document.getElementById("navBurger");
  var mobileNav = document.getElementById("mobileNav");
  burger.addEventListener("click", function () {
    var open = mobileNav.classList.toggle("open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });
  mobileNav.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      mobileNav.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    });
  });

  // Scroll reveal
  var revealTargets = document.querySelectorAll(
    ".sheet, .legend-card, .contact-plate, .section-head, .about-body, .cred-col"
  );
  revealTargets.forEach(function (el) { el.classList.add("reveal"); });

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add("is-visible"); });
  }
})();
