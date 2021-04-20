// ACCORDION
// -----------------------------------------------------------------------------

import moveFocus from "../helpers/move-focus.js";
import toggleCollapsible from "../helpers/toggle-collapsible.js";

const SELECTOR_ACCORDION = ".accordion";
const SELECTOR_HANDLE = ".accordion-handle";

function Accordion(accordion) {
  const handles = Array.from(accordion.querySelectorAll(SELECTOR_HANDLE));

  handles.forEach((handle) => handle.addEventListener("click", toggleCollapsible));

  moveFocus(accordion, handles, "vertical");
}

const accordions = Array.from(document.querySelectorAll(SELECTOR_ACCORDION));

accordions.forEach((accordion) => Accordion(accordion));
