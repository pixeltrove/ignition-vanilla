// ACCORDION
// -----------------------------------------------------------------------------

import toggleCollapsible from "../helpers/toggle-collapsible.js";

const SELECTOR_ACCORDION = ".accordion";
const SELECTOR_HANDLE = ".accordion-handle";

function Accordion(accordion) {
  const handles = Array.from(accordion.querySelectorAll(SELECTOR_HANDLE));

  function moveFocus(event) {
    const keys = ["ArrowUp", "ArrowDown", "Home", "End"];
    const currentIndex = handles.indexOf(event.currentTarget);
    const lastIndex = handles.length - 1;
    let upcomingIndex = 0;

    if (keys.includes(event.key)) {
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
    handle.addEventListener("click", toggleCollapsible);
    handle.addEventListener("keydown", moveFocus);
  });
}

const accordions = Array.from(document.querySelectorAll(SELECTOR_ACCORDION));

accordions.forEach((accordion) => Accordion(accordion));
