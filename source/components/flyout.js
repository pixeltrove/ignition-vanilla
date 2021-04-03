// FLYOUT
// -----------------------------------------------------------------------------

const SELECTOR_FLYOUT = ".flyout";
const CLASS_ACTIVATED = "is-activated";
const CLASS_SHOWN = "is-shown";
const DATA_TARGET = "data-target";

const Flyout = (flyout) => {
  const flyoutId = flyout.id;
  const trigger = document.querySelector(`[${DATA_TARGET}="${flyoutId}"]`);

  const show = () => {
    trigger.classList.add(CLASS_ACTIVATED);
    trigger.setAttribute("aria-expanded", true);
    flyout.classList.add(CLASS_SHOWN);

    document.addEventListener("click", hideOnOutsideClick);
  };

  const hide = () => {
    trigger.classList.remove(CLASS_ACTIVATED);
    trigger.setAttribute("aria-expanded", false);
    flyout.classList.remove(CLASS_SHOWN);
  };

  const hideOnOutsideClick = (event) => {
    if (!trigger.contains(event.target) && !flyout.contains(event.target)) {
      hide();
      document.removeEventListener("click", hideOnOutsideClick);
    }
  };

  const hideOnTab = (event) => {
    if (event.key === "Tab") {
      const focusableElements = flyout.querySelectorAll("a[href], button:not([disabled]), details, input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [contenteditable]");
      const lastFocusableElement = focusableElements[focusableElements.length - 1];
      const tabBackward = event.shiftKey;

      if ((document.activeElement === lastFocusableElement && !tabBackward) || (document.activeElement === trigger && tabBackward)) {
        hide();
      }
    }
  };

  const toggle = () => {
    const isExpanded = flyout.classList.contains(CLASS_SHOWN);

    return isExpanded ? hide() : show();
  };

  trigger.addEventListener("click", toggle);
  trigger.addEventListener("keydown", hideOnTab);
  flyout.addEventListener("keydown", hideOnTab);
};

const flyouts = document.querySelectorAll(SELECTOR_FLYOUT);

flyouts.forEach((flyout) => Flyout(flyout));
