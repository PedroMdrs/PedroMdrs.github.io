// Declarations
let button = document.getElementById("button");
let menu = document.getElementsByTagName("header")[0];
// Logic
document.addEventListener("DOMContentLoaded", () => {
  button.addEventListener("click", () => {
    showMenu();
  });
  window.addEventListener("click", (e) => {
    MenuIsOpen = menu.hasAttribute("show");
    target = e.target;
    targetFatherIsMenu = target == menu;
    targetClosestIsMenu = target.closest(".mobile-menu") != null;
    targetClosestIsNotButton = target.closest("#button") == null;

    if (
      MenuIsOpen &&
      targetClosestIsNotButton &&
      !targetClosestIsMenu &&
      !targetFatherIsMenu
    ) {
      showMenu();
    }
  });
});

function showMenu() {
  menu.toggleAttribute("show");
  if (menu.hasAttribute("show")) {
    menu.classList.add("open");
    menu.classList.remove("close");
  } else {
    menu.classList.add("close");
    menu.classList.remove("open");
  }
}
