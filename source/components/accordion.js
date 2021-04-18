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
    const currentHandle = event.currentTarget;
    const panelId = currentHandle.getAttribute(DATA_TARGET);
    const panel = accordion.querySelector(`#${panelId}`);
    const isShown = panel.classList.contains(CLASS_SHOWN);

    currentHandle.classList.toggle(CLASS_ACTIVATED);
    currentHandle.setAttribute("aria-expanded", !isShown);
    panel.classList.toggle(CLASS_SHOWN);
  }

  function navigateUsingKeyboard(event) {
    const navigationKeys = ["ArrowUp", "ArrowDown", "Home", "End"];
    const currentIndex = handles.indexOf(event.currentTarget);
    const lastIndex = handles.length - 1;
    let upcomingIndex = 0;

    if (navigationKeys.includes(event.key)) {
      event.preventDefault();

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

      handles[upcomingIndex].focus();
    }
  }

  handles.forEach((handle) => {
    handle.addEventListener("click", togglePanel);
    handle.addEventListener("keydown", navigateUsingKeyboard);
  });
}

const accordions = Array.from(document.querySelectorAll(SELECTOR_ACCORDION));

accordions.forEach((accordion) => Accordion(accordion));
