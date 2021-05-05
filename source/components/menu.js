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
      document.addEventListener("click", hideOnOutsideClick);
      document.addEventListener("keydown", hideOnEscape);
      trigger.addEventListener("keydown", hideOnTab);
      menu.addEventListener("keydown", hideOnTab);
      menu.addEventListener("keydown", moveFocus);
    } else {
      document.removeEventListener("click", hideOnOutsideClick);
      document.removeEventListener("keydown", hideOnEscape);
      trigger.removeEventListener("keydown", hideOnTab);
      menu.removeEventListener("keydown", hideOnTab);
      menu.removeEventListener("keydown", moveFocus);
    }
  }

  function moveFocus(event) {
    if (!event.target.closest(SELECTOR_LINK)) return;

    const keys = ["ArrowUp", "ArrowDown", "Home", "End"];
    const link = event.target.closest(SELECTOR_LINK);
    const currentIndex = links.indexOf(link);
    const lastIndex = links.length - 1;
    let upcomingIndex = 0;

    if (keys.includes(event.key)) {
      event.preventDefault();

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

      links[upcomingIndex].focus();
    }
  }

  function hideOnOutsideClick(event) {
    if (!trigger.contains(event.target) && !menu.contains(event.target)) {
      toggle();
    }
  }

  function hideOnEscape(event) {
    if (event.key === "Escape") {
      toggle();
    }
  }

  function hideOnTab(event) {
    if (event.key === "Tab") {
      const focusableElements = Array.from(menu.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled])"));
      const lastFocusableElement = focusableElements[focusableElements.length - 1];
      const tabBackward = event.shiftKey;

      if ((document.activeElement === lastFocusableElement && !tabBackward) || (document.activeElement === trigger && tabBackward)) {
        toggle();
      }
    }
  }

  trigger.addEventListener("click", toggle);
}

const menus = Array.from(document.querySelectorAll(SELECTOR_MENU));

menus.forEach((menu) => Menu(menu));
