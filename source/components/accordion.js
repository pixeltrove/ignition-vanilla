// ACCORDION
// -----------------------------------------------------------------------------

const SELECTOR_ACCORDION = ".accordion";
const SELECTOR_TAB = ".accordion-tab";
const CLASS_ACTIVATED = "is-activated";
const CLASS_SHOWN = "is-shown";
const DATA_TARGET = "data-target";

const Accordion = (accordion) => {
  const tabs = accordion.querySelectorAll(SELECTOR_TAB);
  const firstTab = tabs[0];
  const lastTab = tabs[tabs.length - 1];

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
    const currentTab = event.target;
    const currentTabIndex = Array.from(tabs).indexOf(currentTab);
    const previousTab = tabs[currentTabIndex - 1];
    const nextTab = tabs[currentTabIndex + 1];

    switch (event.key) {
      case "ArrowUp":
        event.preventDefault();
        if (currentTab === firstTab) {
          lastTab.focus();
        } else {
          previousTab.focus();
        }
        break;
      case "ArrowDown":
        event.preventDefault();
        if (currentTab === lastTab) {
          firstTab.focus();
        } else {
          nextTab.focus();
        }
        break;
      case "Home":
        event.preventDefault();
        firstTab.focus();
        break;
      case "End":
        event.preventDefault();
        lastTab.focus();
        break;
    }
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", toggle);
    tab.addEventListener("keydown", handleArrowKeys);
  });
};

const accordions = document.querySelectorAll(SELECTOR_ACCORDION);

accordions.forEach((accordion) => Accordion(accordion));
