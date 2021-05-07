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
      document.addEventListener("click", manageHideOnOutsideClick);
      document.addEventListener("keydown", manageHideOnEscape);
      trigger.addEventListener("keydown", manageHideOnTab);
      menu.addEventListener("keydown", manageHideOnTab);
      menu.addEventListener("keydown", manageFocusMove);
    } else {
      document.removeEventListener("click", manageHideOnOutsideClick);
      document.removeEventListener("keydown", manageHideOnEscape);
      trigger.removeEventListener("keydown", manageHideOnTab);
      menu.removeEventListener("keydown", manageHideOnTab);
      menu.removeEventListener("keydown", manageFocusMove);
    }
  }

  function manageHideOnOutsideClick(event) {
    if (!trigger.contains(event.target) && !menu.contains(event.target)) {
      toggle();
    }
  }

  function manageHideOnEscape(event) {
    if (event.key === "Escape") {
      toggle();
    }
  }

  function manageHideOnTab(event) {
    const focusableElements = Array.from(menu.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled])"));
    const lastFocusableElement = focusableElements[focusableElements.length - 1];
    if ((event.key === "Tab" && document.activeElement === lastFocusableElement && !event.shiftKey) || (event.key === "Tab" && document.activeElement === trigger && event.shiftKey)) {
      toggle();
    }
  }

  function moveFocus(link, key) {
    const currentIndex = links.indexOf(link);
    const lastIndex = links.length - 1;
    let upcomingIndex;

    switch (key) {
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

    links[upcomingIndex].focus();
  }

  function manageFocusMove(event) {
    if (event.target.closest(SELECTOR_LINK) && ["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
      event.preventDefault();
      moveFocus(event.target.closest(SELECTOR_LINK), event.key);
    }
  }

  trigger.addEventListener("click", toggle);
}

const menus = Array.from(document.querySelectorAll(SELECTOR_MENU));

menus.forEach((menu) => Menu(menu));
