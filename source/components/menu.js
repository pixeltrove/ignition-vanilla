// MENU
// -----------------------------------------------------------------------------

const SELECTOR_MENU = ".menu";
const CLASS_ACTIVATED = "is-activated";
const CLASS_SHOWN = "is-shown";
const DATA_TARGET = "data-target";

const Menu = (menu) => {
  const menuId = menu.id;
  const trigger = document.querySelector(`[${DATA_TARGET}="${menuId}"]`);

  const toggle = () => {
    const isExpanded = menu.classList.contains(CLASS_SHOWN);

    trigger.classList.toggle(CLASS_ACTIVATED);
    trigger.setAttribute("aria-expanded", !isExpanded);
    menu.classList.toggle(CLASS_SHOWN);

    if (!isExpanded) {
      document.addEventListener("click", hideOnOutsideClick);
      trigger.addEventListener("keydown", hideOnTab);
      menu.addEventListener("keydown", hideOnTab);
    } else {
      document.removeEventListener("click", hideOnOutsideClick);
      trigger.removeEventListener("keydown", hideOnTab);
      menu.removeEventListener("keydown", hideOnTab);
    }
  };

  const hideOnOutsideClick = (event) => {
    if (!trigger.contains(event.target) && !menu.contains(event.target)) {
      toggle();
    }
  };

  const hideOnTab = (event) => {
    if (event.key === "Tab") {
      const focusableElements = menu.querySelectorAll("a[href], button:not([disabled]), details, input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [contenteditable]");
      const lastFocusableElement = focusableElements[focusableElements.length - 1];
      const tabBackward = event.shiftKey;

      if ((document.activeElement === lastFocusableElement && !tabBackward) || (document.activeElement === trigger && tabBackward)) {
        toggle();
      }
    }
  };

  trigger.addEventListener("click", toggle);
};

const menus = document.querySelectorAll(SELECTOR_MENU);

menus.forEach((menu) => Menu(menu));
