// ACCORDION
// -----------------------------------------------------------------------------

const SELECTOR_ACCORDION = ".accordion";
const SELECTOR_HANDLE = ".accordion-handle";
const CLASS_ACTIVATED = "is-activated";
const CLASS_SHOWN = "is-shown";
const DATA_TARGET = "data-target";

function Accordion(accordion) {
  const handles = Array.from(accordion.querySelectorAll(SELECTOR_HANDLE));

  function togglePanel(handle) {
    const panelId = handle.getAttribute(DATA_TARGET);
    const panel = document.querySelector(`#${panelId}`);
    const isShown = panel.classList.contains(CLASS_SHOWN);

    handle.classList.toggle(CLASS_ACTIVATED);
    handle.setAttribute("aria-expanded", !isShown);
    panel.classList.toggle(CLASS_SHOWN);
  }

  function managePanelToggle(event) {
    if (event.target.closest(SELECTOR_HANDLE)) {
      togglePanel(event.target.closest(SELECTOR_HANDLE));
    }
  }

  function moveFocus(handle, key) {
    const currentIndex = handles.indexOf(handle);
    const lastIndex = handles.length - 1;
    let upcomingIndex;

    switch (key) {
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

    handles[upcomingIndex].focus();
  }

  function manageFocusMove(event) {
    if (event.target.closest(SELECTOR_HANDLE) && ["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
      event.preventDefault();
      moveFocus(event.target.closest(SELECTOR_HANDLE), event.key);
    }
  }

  accordion.addEventListener("click", managePanelToggle);
  accordion.addEventListener("keydown", manageFocusMove);
}

const accordions = Array.from(document.querySelectorAll(SELECTOR_ACCORDION));

accordions.forEach((accordion) => Accordion(accordion));
