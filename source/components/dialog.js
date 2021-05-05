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

    dialog.addEventListener("keydown", trapFocus);
    dialog.addEventListener("click", hide);
    backdrop.addEventListener("click", hide);
    document.addEventListener("keydown", hide);
  }

  function hide(event) {
    if (!((event.target.hasAttribute(DATA_HIDE) && event.type === "click") || event.target.matches(SELECTOR_BACKDROP) || event.key === "Escape")) return;

    backdrop.classList.remove(CLASS_SHOWN);
    toggleScroll();

    dialog.removeEventListener("keydown", trapFocus);
    dialog.removeEventListener("click", hide);
    backdrop.removeEventListener("click", hide);
    document.removeEventListener("keydown", hide);
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
    const lastIndex = focusableElements.length - 1;
    const focusIndex = focusableElements.indexOf(document.activeElement);

    if (event.shiftKey && (focusIndex === 0 || document.activeElement === dialog)) {
      event.preventDefault();
      focusableElements[focusableElements.length - 1].focus();
    } else if (!event.shiftKey && focusIndex === lastIndex) {
      event.preventDefault();
      focusableElements[0].focus();
    }
  }

  trigger.addEventListener("click", show);
}

const dialogs = Array.from(document.querySelectorAll(SELECTOR_DIALOG));

dialogs.forEach((dialog) => Dialog(dialog));
