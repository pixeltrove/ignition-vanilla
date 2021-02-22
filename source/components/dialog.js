// DIALOG
// -----------------------------------------------------------------------------

const SELECTOR_DIALOG = ".dialog";
const SELECTOR_BACKDROP = ".dialog-backdrop";
const CLASS_NO_SCROLL = "no-scroll";
const CLASS_SHOWN = "is-shown";
const DATA_HIDE = "data-hide";
const DATA_TARGET = "data-target";

const Dialog = (dialog) => {
  const dialogId = dialog.id;
  const trigger = document.querySelector(`[${DATA_TARGET}="${dialogId}"]`);
  const backdrop = dialog.closest(SELECTOR_BACKDROP);

  const show = () => {
    dialog.addEventListener("click", hide);
    backdrop.addEventListener("click", hide);
    document.addEventListener("keyup", hide);

    backdrop.classList.add(CLASS_SHOWN);
    toggleScroll();
    trapFocus(dialog);
  };

  const hide = (event) => {
    if ((event.target.hasAttribute(DATA_HIDE) && event.type === "click") || event.target.matches(SELECTOR_BACKDROP) || event.key === "Escape") {
      dialog.removeEventListener("click", hide);
      backdrop.removeEventListener("click", hide);
      document.removeEventListener("keyup", hide);

      backdrop.classList.remove(CLASS_SHOWN);
      toggleScroll();
    }
  };

  const toggleScroll = () => {
    if (window.innerHeight < document.body.scrollHeight) {
      const scrollPosition = Math.abs(parseInt(document.body.style.top)) || window.scrollY;

      if (document.body.classList.contains(CLASS_NO_SCROLL)) {
        document.body.classList.remove(CLASS_NO_SCROLL);
        document.body.style.top = "";
        window.scroll(0, scrollPosition);
      } else {
        document.body.classList.add(CLASS_NO_SCROLL);
        document.body.style.top = -scrollPosition + "px";
      }
    }
  };

  const trapFocus = (dialog) => {
    const focusableElements = dialog.querySelectorAll("a[href], button:not([disabled]), details, input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [contenteditable]");
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];

    const cycleFocus = (event) => {
      if (event.key === "Tab") {
        const tabBackward = event.shiftKey;

        if (tabBackward) {
          if (document.activeElement === firstFocusableElement) {
            event.preventDefault();
            lastFocusableElement.focus();
          } else if (document.activeElement === element) {
            event.preventDefault();
            element.focus();
          }
        } else if (!tabBackward) {
          if (document.activeElement === lastFocusableElement) {
            event.preventDefault();
            firstFocusableElement.focus();
          }
        }
      }
    };

    dialog.addEventListener("keydown", cycleFocus);

    dialog.setAttribute("tabindex", -1);
    dialog.focus();
  };

  trigger.addEventListener("click", show);
};

const dialogs = document.querySelectorAll(SELECTOR_DIALOG);

dialogs.forEach((dialog) => Dialog(dialog));
