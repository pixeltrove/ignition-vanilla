// MENU
// -----------------------------------------------------------------------------

const SELECTOR_MENU = ".menu";
const SELECTOR_LINK = ".menu-link";
const CLASS_ACTIVATED = "is-activated";
const CLASS_SHOWN = "is-shown";
const DATA_TARGET = "data-target";

const Menu = (menu) => {
  const menuId = menu.id;
  const trigger = document.querySelector(`[${DATA_TARGET}="${menuId}"]`);
  const links = Array.from(menu.querySelectorAll(SELECTOR_LINK));
  const firstLink = links[0];
  const lastLink = links[links.length - 1];

  const toggle = () => {
    const isShown = menu.classList.contains(CLASS_SHOWN);

    trigger.classList.toggle(CLASS_ACTIVATED);
    trigger.setAttribute("aria-expanded", !isShown);
    menu.classList.toggle(CLASS_SHOWN);

    if (!isShown) {
      document.addEventListener("click", hideOnOutsideClick);
      document.addEventListener("keydown", hideOnEscape);
      trigger.addEventListener("keydown", hideOnTab);
      menu.addEventListener("keydown", hideOnTab);
      links.forEach((link) => {
        link.addEventListener("keydown", navigateUsingKeyboard);
      });
    } else {
      document.removeEventListener("click", hideOnOutsideClick);
      document.removeEventListener("keydown", hideOnEscape);
      trigger.removeEventListener("keydown", hideOnTab);
      menu.removeEventListener("keydown", hideOnTab);
    }
  };

  const navigateUsingKeyboard = (event) => {
    const currentLink = event.currentTarget;
    const currentLinkIndex = links.indexOf(currentLink);
    const previousLink = links[currentLinkIndex - 1];
    const nextLink = links[currentLinkIndex + 1];

    switch (event.key) {
      case "ArrowUp":
        event.preventDefault();
        if (currentLink === firstLink) {
          lastLink.focus();
        } else {
          previousLink.focus();
        }
        break;
      case "ArrowDown":
        event.preventDefault();
        if (currentLink === lastLink) {
          firstLink.focus();
        } else {
          nextLink.focus();
        }
        break;
      case "Home":
        event.preventDefault();
        firstLink.focus();
        break;
      case "End":
        event.preventDefault();
        lastLink.focus();
        break;
    }
  };

  const hideOnOutsideClick = (event) => {
    if (!trigger.contains(event.target) && !menu.contains(event.target)) {
      toggle();
    }
  };

  const hideOnEscape = (event) => {
    if (event.key === "Escape") {
      toggle();
    }
  };

  const hideOnTab = (event) => {
    if (event.key === "Tab") {
      const focusableElements = Array.from(menu.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled])"));
      const lastFocusableElement = focusableElements[focusableElements.length - 1];
      const tabBackward = event.shiftKey;

      if ((document.activeElement === lastFocusableElement && !tabBackward) || (document.activeElement === trigger && tabBackward)) {
        toggle();
      }
    }
  };

  trigger.addEventListener("click", toggle);
};

const menus = Array.from(document.querySelectorAll(SELECTOR_MENU));

menus.forEach((menu) => Menu(menu));
