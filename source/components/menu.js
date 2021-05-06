// MENU
// -----------------------------------------------------------------------------

const SELECTOR_MENU = ".menu";
const SELECTOR_LINK = ".menu-link";
const CLASS_ACTIVATED = "is-activated";
const CLASS_SHOWN = "is-shown";
const DATA_TARGET = "data-target";

function Menu(menu) {
  const menuId = menu.id;
  const trigger = document.querySelector(`[${DATA_TARGET}="${menuId}"]`);
  const links = Array.from(menu.querySelectorAll(SELECTOR_LINK));

  function toggle() {
    const isShown = menu.classList.contains(CLASS_SHOWN);

    trigger.classList.toggle(CLASS_ACTIVATED);
    trigger.setAttribute("aria-expanded", !isShown);
    menu.classList.toggle(CLASS_SHOWN);

    if (!isShown) {
      document.addEventListener("click", hide);
      document.addEventListener("keydown", hide);
      trigger.addEventListener("keydown", hide);
      menu.addEventListener("keydown", hide);
      menu.addEventListener("keydown", moveFocus);
    } else {
      document.removeEventListener("click", hide);
      document.removeEventListener("keydown", hide);
      trigger.removeEventListener("keydown", hide);
      menu.removeEventListener("keydown", hide);
      menu.removeEventListener("keydown", moveFocus);
    }
  }

  function hide(event) {
    const focusableElements = Array.from(menu.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled])"));
    const lastFocusableElement = focusableElements[focusableElements.length - 1];

    if ((!trigger.contains(event.target) && !menu.contains(event.target)) || event.key === "Escape" || (event.key === "Tab" && document.activeElement === lastFocusableElement && !event.shiftKey) || (event.key === "Tab" && document.activeElement === trigger && event.shiftKey)) {
      toggle();
    }
  }

  function moveFocus(event) {
    if (!event.target.closest(SELECTOR_LINK) || !["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) return;

    const link = event.target.closest(SELECTOR_LINK);
    const currentIndex = links.indexOf(link);
    const lastIndex = links.length - 1;
    let upcomingIndex;

    switch (event.key) {
      case "ArrowUp":
        upcomingIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
        break;
      case "ArrowDown":
        upcomingIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
        break;
      case "Home":
        upcomingIndex = 0;
        break;
      case "End":
        upcomingIndex = lastIndex;
        break;
    }

    event.preventDefault();
    links[upcomingIndex].focus();
  }

  trigger.addEventListener("click", toggle);
}

const menus = Array.from(document.querySelectorAll(SELECTOR_MENU));

menus.forEach((menu) => Menu(menu));
