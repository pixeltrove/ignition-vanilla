// MENU
// -----------------------------------------------------------------------------

const SELECTOR_MENU = ".menu";
const CLASS_ACTIVATED = "is-activated";
const CLASS_SHOWN = "is-shown";
const DATA_TARGET = "data-target";

const Menu = (menu) => {
  const menuId = menu.id;
  const trigger = document.querySelector(`[${DATA_TARGET}="${menuId}"]`);

  const show = () => {
    trigger.classList.add(CLASS_ACTIVATED);
    trigger.setAttribute("aria-expanded", true);
    menu.classList.add(CLASS_SHOWN);

    document.addEventListener("click", hideOnOutsideClick);
  };

  const hide = () => {
    trigger.classList.remove(CLASS_ACTIVATED);
    trigger.setAttribute("aria-expanded", false);
    menu.classList.remove(CLASS_SHOWN);
  };

  const hideOnOutsideClick = (event) => {
    if (!trigger.contains(event.target) && !menu.contains(event.target)) {
      hide();
      document.removeEventListener("click", hideOnOutsideClick);
    }
  };

  const hideOnTab = (event) => {
    if (event.key === "Tab") {
      const focusableElements = menu.querySelectorAll("a[href], button:not([disabled]), details, input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [contenteditable]");
      const lastFocusableElement = focusableElements[focusableElements.length - 1];
      const tabBackward = event.shiftKey;

      if ((document.activeElement === lastFocusableElement && !tabBackward) || (document.activeElement === trigger && tabBackward)) {
        hide();
      }
    }
  };

  const toggle = () => {
    const isExpanded = menu.classList.contains(CLASS_SHOWN);

    return isExpanded ? hide() : show();
  };

  trigger.addEventListener("click", toggle);
  trigger.addEventListener("keydown", hideOnTab);
  menu.addEventListener("keydown", hideOnTab);
};

const menus = document.querySelectorAll(SELECTOR_MENU);

menus.forEach((menu) => Menu(menu));
