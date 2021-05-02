// ACCORDION
// -----------------------------------------------------------------------------

const SELECTOR_ACCORDION = ".accordion";
const SELECTOR_HANDLE = ".accordion-handle";
const CLASS_ACTIVATED = "is-activated";
const CLASS_SHOWN = "is-shown";
const DATA_TARGET = "data-target";

function Accordion(accordion) {
  const handles = Array.from(accordion.querySelectorAll(SELECTOR_HANDLE));

  function togglePanel(event) {
    if (!event.target.closest(SELECTOR_HANDLE)) return;

    const handle = event.target.closest(SELECTOR_HANDLE);
    const panelId = handle.getAttribute(DATA_TARGET);
    const panel = document.querySelector(`#${panelId}`);
    const isShown = panel.classList.contains(CLASS_SHOWN);

    handle.classList.toggle(CLASS_ACTIVATED);
    handle.setAttribute("aria-expanded", !isShown);
    panel.classList.toggle(CLASS_SHOWN);
  }

  function moveFocus(event) {
    if (!event.target.closest(SELECTOR_HANDLE) || !["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) return;

    const handle = event.target.closest(SELECTOR_HANDLE);
    const currentIndex = handles.indexOf(handle);
    const lastIndex = handles.length - 1;
    let upcomingIndex;

    switch (event.key) {
      case "ArrowUp":
        upcomingIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
        break;
      case "ArrowDown":
        upcomingIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
        break;
      case "Home":
        upcomingIndex = 0;
        break;
      case "End":
        upcomingIndex = lastIndex;
        break;
    }

    event.preventDefault();
    handles[upcomingIndex].focus();
  }

  accordion.addEventListener("click", togglePanel);
  accordion.addEventListener("keydown", moveFocus);
}

const accordions = Array.from(document.querySelectorAll(SELECTOR_ACCORDION));

accordions.forEach((accordion) => Accordion(accordion));
