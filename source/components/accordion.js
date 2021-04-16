// ACCORDION
// -----------------------------------------------------------------------------

const SELECTOR_ACCORDION = ".accordion";
const SELECTOR_HANDLE = ".accordion-handle";
const CLASS_ACTIVATED = "is-activated";
const CLASS_SHOWN = "is-shown";
const DATA_TARGET = "data-target";

function Accordion(accordion) {
  const handles = Array.from(accordion.querySelectorAll(SELECTOR_HANDLE));
  let handleIndex = 0;

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

    handleIndex = handles.indexOf(event.currentTarget);

    if (navigationKeys.includes(event.key)) {
      event.preventDefault();

      switch (event.key) {
        case "ArrowUp":
          handleIndex = handleIndex === 0 ? handles.length - 1 : handleIndex - 1;
          break;
        case "ArrowDown":
          handleIndex = handleIndex === handles.length - 1 ? 0 : handleIndex + 1;
          break;
        case "Home":
          handleIndex = 0;
          break;
        case "End":
          handleIndex = handles.length - 1;
          break;
      }

      handles[handleIndex].focus();
    }
  }

  handles.forEach((handle) => {
    handle.addEventListener("click", togglePanel);
    handle.addEventListener("keydown", navigateUsingKeyboard);
  });
}

const accordions = Array.from(document.querySelectorAll(SELECTOR_ACCORDION));

accordions.forEach((accordion) => Accordion(accordion));
