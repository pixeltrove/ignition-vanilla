// DROPDOWN
// -----------------------------------------------------------------------------

const SELECTOR_DROPDOWN = ".dropdown";
const CLASS_ACTIVATED = "is-activated";
const CLASS_SHOWN = "is-shown";
const DATA_TARGET = "data-target";

const Dropdown = (dropdown) => {
  const dropdownId = dropdown.id;
  const trigger = document.querySelector(`[${DATA_TARGET}="${dropdownId}"]`);

  const show = () => {
    trigger.classList.add(CLASS_ACTIVATED);
    trigger.setAttribute("aria-expanded", true);
    dropdown.classList.add(CLASS_SHOWN);

    document.addEventListener("click", hideOnOutsideClick);
  };

  const hide = () => {
    trigger.classList.remove(CLASS_ACTIVATED);
    trigger.setAttribute("aria-expanded", false);
    dropdown.classList.remove(CLASS_SHOWN);
  };

  const hideOnOutsideClick = (event) => {
    if (!trigger.contains(event.target) && !dropdown.contains(event.target)) {
      hide();
      document.removeEventListener("click", hideOnOutsideClick);
    }
  };

  const hideOnTab = (event) => {
    if (event.key === "Tab") {
      const focusableElements = dropdown.querySelectorAll("a[href], button:not([disabled]), details, input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [contenteditable]");
      const lastFocusableElement = focusableElements[focusableElements.length - 1];
      const tabBackward = event.shiftKey;

      if ((document.activeElement === lastFocusableElement && !tabBackward) || (document.activeElement === trigger && tabBackward)) {
        hide();
      }
    }
  };

  const toggle = () => {
    const isExpanded = dropdown.classList.contains(CLASS_SHOWN);

    return isExpanded ? hide() : show();
  };

  trigger.addEventListener("click", toggle);
  trigger.addEventListener("keydown", hideOnTab);
  dropdown.addEventListener("keydown", hideOnTab);
};

const dropdowns = document.querySelectorAll(SELECTOR_DROPDOWN);

dropdowns.forEach((dropdown) => Dropdown(dropdown));
