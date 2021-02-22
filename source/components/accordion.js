// ACCORDION
// -----------------------------------------------------------------------------

const SELECTOR_ACCORDION = ".accordion";
const SELECTOR_HANDLE = ".accordion-handle";
const CLASS_ACTIVATED = "is-activated";
const CLASS_SHOWN = "is-shown";
const DATA_TARGET = "data-target";

const Accordion = (accordion) => {
  const handles = accordion.querySelectorAll(SELECTOR_HANDLE);

  const toggle = (event) => {
    const trigger = event.currentTarget;
    const collapsibleId = trigger.getAttribute(DATA_TARGET);
    const collapsible = document.querySelector(`#${collapsibleId}`);
    const isExpanded = collapsible.classList.contains(CLASS_SHOWN);

    trigger.classList.toggle(CLASS_ACTIVATED);
    trigger.setAttribute("aria-expanded", !isExpanded);
    collapsible.classList.toggle(CLASS_SHOWN);
  };

  handles.forEach((handle) => handle.addEventListener("click", toggle));
};

const accordions = document.querySelectorAll(SELECTOR_ACCORDION);

accordions.forEach((accordion) => Accordion(accordion));
