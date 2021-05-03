// DIALOG
// -----------------------------------------------------------------------------

const SELECTOR_DIALOG = ".dialog";
const SELECTOR_BACKDROP = ".dialog-backdrop";
const CLASS_NO_SCROLL = "no-scroll";
const CLASS_SHOWN = "is-shown";
const DATA_HIDE = "data-hide";
const DATA_TARGET = "data-target";

function Dialog(dialog) {
  const dialogId = dialog.id;
  const trigger = document.querySelector(`[${DATA_TARGET}="${dialogId}"]`);
  const backdrop = dialog.closest(SELECTOR_BACKDROP);

  function show() {
    dialog.addEventListener("click", hideOnButtonClick);
    backdrop.addEventListener("click", hideOnOutsideClick);
    document.addEventListener("keydown", hideOnEscape);

    backdrop.classList.add(CLASS_SHOWN);
    toggleScroll();
    trapFocus(dialog);
  }

  function hide() {
    dialog.removeEventListener("click", hideOnButtonClick);
    backdrop.removeEventListener("click", hideOnOutsideClick);
    document.removeEventListener("keydown", hideOnEscape);

    backdrop.classList.remove(CLASS_SHOWN);
    toggleScroll();
  }

  function hideOnButtonClick(event) {
    if (!event.target.hasAttribute(DATA_HIDE)) return;
    hide();
  }

  function hideOnOutsideClick(event) {
    if (dialog.contains(event.target)) return;
    hide();
  }

  function hideOnEscape(event) {
    if (!(event.key === "Escape")) return;
    hide();
  }

  function toggleScroll() {
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
  }

  function trapFocus(dialog) {
    const focusableElements = Array.from(dialog.querySelectorAll("a[href], audio[controls], button:not([disabled]), details, input:not([disabled]), select:not([disabled]), textarea:not([disabled]), video[controls], [contenteditable]"));
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];

    function cycleFocus(event) {
      if (event.key === "Tab") {
        const tabBackward = event.shiftKey;

        if (tabBackward) {
          if (document.activeElement === firstFocusableElement) {
            event.preventDefault();
            lastFocusableElement.focus();
          } else if (document.activeElement === dialog) {
            event.preventDefault();
          }
        } else if (!tabBackward) {
          if (document.activeElement === lastFocusableElement) {
            event.preventDefault();
            firstFocusableElement.focus();
          }
        }
      }
    }

    dialog.addEventListener("keydown", cycleFocus);

    dialog.setAttribute("tabindex", -1);
    dialog.focus();
  }

  trigger.addEventListener("click", show);
}

const dialogs = Array.from(document.querySelectorAll(SELECTOR_DIALOG));

dialogs.forEach((dialog) => Dialog(dialog));
