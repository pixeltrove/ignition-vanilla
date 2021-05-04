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
    backdrop.classList.add(CLASS_SHOWN);
    dialog.setAttribute("tabindex", -1);
    dialog.focus();
    toggleScroll();
    trapFocus(dialog);

    dialog.addEventListener("keydown", trapFocus);
    dialog.addEventListener("click", hideOnButtonClick);
    backdrop.addEventListener("click", hideOnOutsideClick);
    document.addEventListener("keydown", hideOnEscape);
  }

  function hide() {
    backdrop.classList.remove(CLASS_SHOWN);
    toggleScroll();

    dialog.removeEventListener("keydown", trapFocus);
    dialog.removeEventListener("click", hideOnButtonClick);
    backdrop.removeEventListener("click", hideOnOutsideClick);
    document.removeEventListener("keydown", hideOnEscape);
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
    if (window.innerHeight >= document.body.scrollHeight) return;

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

  function trapFocus(event) {
    if (event.key !== "Tab") return;

    const focusableElements = Array.from(dialog.querySelectorAll("a[href], audio[controls], button:not([disabled]), details, input:not([disabled]), select:not([disabled]), textarea:not([disabled]), video[controls], [contenteditable]"));
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];
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

  trigger.addEventListener("click", show);
}

const dialogs = Array.from(document.querySelectorAll(SELECTOR_DIALOG));

dialogs.forEach((dialog) => Dialog(dialog));
