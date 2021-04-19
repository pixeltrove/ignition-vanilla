// TOGGLE COLLAPSIBLE
// -----------------------------------------------------------------------------

const CLASS_ACTIVATED = "is-activated";
const CLASS_SHOWN = "is-shown";
const DATA_TARGET = "data-target";

function toggleCollapsible(event) {
  const trigger = event.currentTarget;
  const collapsibleId = trigger.getAttribute(DATA_TARGET);
  const collapsible = document.querySelector(`#${collapsibleId}`);
  const isShown = collapsible.classList.contains(CLASS_SHOWN);

  trigger.classList.toggle(CLASS_ACTIVATED);
  trigger.setAttribute("aria-expanded", !isShown);
  collapsible.classList.toggle(CLASS_SHOWN);
}

export default toggleCollapsible;
