// ACCORDION
// -----------------------------------------------------------------------------

const SELECTOR_ACCORDION = ".accordion";
const SELECTOR_HANDLE = ".accordion-handle";
const CLASS_ACTIVATED = "is-activated";
const CLASS_SHOWN = "is-shown";
const DATA_TARGET = "data-target";

const Accordion = (accordion) => {
  const handles = accordion.querySelectorAll(SELECTOR_HANDLE);
  const handlesArray = Array.from(handles);
  const firstHandle = handlesArray[0];
  const lastHandle = handlesArray[handlesArray.length - 1];

  const togglePanel = (event) => {
    const currentHandle = event.currentTarget;
    const panelId = currentHandle.getAttribute(DATA_TARGET);
    const panel = document.querySelector(`#${panelId}`);
    const isExpanded = panel.classList.contains(CLASS_SHOWN);

    currentHandle.classList.toggle(CLASS_ACTIVATED);
    currentHandle.setAttribute("aria-expanded", !isExpanded);
    panel.classList.toggle(CLASS_SHOWN);
  };

  const navigateUsingKeyboard = (event) => {
    const currentHandle = event.currentTarget;
    const currentHandleIndex = handlesArray.indexOf(currentHandle);
    const previousHandle = handlesArray[currentHandleIndex - 1];
    const nextHandle = handlesArray[currentHandleIndex + 1];

    switch (event.key) {
      case "ArrowUp":
        event.preventDefault();
        if (currentHandle === firstHandle) {
          lastHandle.focus();
        } else {
          previousHandle.focus();
        }
        break;
      case "ArrowDown":
        event.preventDefault();
        if (currentHandle === lastHandle) {
          firstHandle.focus();
        } else {
          nextHandle.focus();
        }
        break;
      case "Home":
        event.preventDefault();
        firstHandle.focus();
        break;
      case "End":
        event.preventDefault();
        lastHandle.focus();
        break;
    }
  };

  handles.forEach((handle) => {
    handle.addEventListener("click", togglePanel);
    handle.addEventListener("keydown", navigateUsingKeyboard);
  });
};

const accordions = document.querySelectorAll(SELECTOR_ACCORDION);

accordions.forEach((accordion) => Accordion(accordion));
