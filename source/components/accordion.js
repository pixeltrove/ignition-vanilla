// ACCORDION
// -----------------------------------------------------------------------------

const SELECTOR_ACCORDION = ".accordion";
const SELECTOR_HANDLE = ".accordion-handle";
const CLASS_ACTIVATED = "is-activated";
const CLASS_SHOWN = "is-shown";
const DATA_TARGET = "data-target";

const Accordion = (accordion) => {
  const handles = accordion.querySelectorAll(SELECTOR_HANDLE);
  const firstHandle = handles[0];
  const lastHandle = handles[handles.length - 1];

  const toggle = (event) => {
    const trigger = event.currentTarget;
    const collapsibleId = trigger.getAttribute(DATA_TARGET);
    const collapsible = document.querySelector(`#${collapsibleId}`);
    const isExpanded = collapsible.classList.contains(CLASS_SHOWN);

    trigger.classList.toggle(CLASS_ACTIVATED);
    trigger.setAttribute("aria-expanded", !isExpanded);
    collapsible.classList.toggle(CLASS_SHOWN);
  };

  const handleArrowKeys = (event) => {
    let currentHandle = null;
    let previousHandle = null;

    switch (event.key) {
      case "ArrowUp":
        event.preventDefault();

        currentHandle = document.activeElement;
        currentHandleIndex = Array.from(handles).indexOf(currentHandle);
        previousHandle = Array.from(handles)[currentHandleIndex - 1];

        if (currentHandle === firstHandle) {
          lastHandle.focus();
        } else {
          previousHandle.focus();
        }
        break;
      case "ArrowDown":
        event.preventDefault();

        currentHandle = document.activeElement;
        currentHandleIndex = Array.from(handles).indexOf(currentHandle);
        nextHandle = Array.from(handles)[currentHandleIndex + 1];

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

  accordion.addEventListener("keydown", handleArrowKeys);
  handles.forEach((handle) => {
    handle.addEventListener("click", toggle);
  });
};

const accordions = document.querySelectorAll(SELECTOR_ACCORDION);

accordions.forEach((accordion) => Accordion(accordion));
