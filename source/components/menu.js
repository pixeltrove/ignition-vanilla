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
  const links = menu.querySelectorAll(SELECTOR_LINK);
  const firstLink = links[0];
  const lastLink = links[links.length - 1];

  const toggle = () => {
    const isExpanded = menu.classList.contains(CLASS_SHOWN);

    trigger.classList.toggle(CLASS_ACTIVATED);
    trigger.setAttribute("aria-expanded", !isExpanded);
    menu.classList.toggle(CLASS_SHOWN);

    if (!isExpanded) {
      document.addEventListener("click", hideOnOutsideClick);
      trigger.addEventListener("keydown", hideOnTab);
      menu.addEventListener("keydown", hideOnTab);
      links.forEach((link) => {
        link.addEventListener("keydown", navigateUsingKeyboard);
      });
    } else {
      document.removeEventListener("click", hideOnOutsideClick);
      trigger.removeEventListener("keydown", hideOnTab);
      menu.removeEventListener("keydown", hideOnTab);
    }
  };

  const navigateUsingKeyboard = (event) => {
    const currentLink = event.currentTarget;
    const currentLinkIndex = Array.from(links).indexOf(currentLink);
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

  const hideOnTab = (event) => {
    if (event.key === "Tab") {
      const focusableElements = menu.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled])");
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
