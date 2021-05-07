// TABSET
// -----------------------------------------------------------------------------

const SELECTOR_TABSET = ".tabset";
const SELECTOR_TAB = ".tabset-tab";
const SELECTOR_PANEL = ".tabset-panel";
const CLASS_ACTIVATED = "is-activated";
const CLASS_SHOWN = "is-shown";
const DATA_TARGET = "data-target";

function Tabset(tabset) {
  const tabs = Array.from(tabset.querySelectorAll(SELECTOR_TAB));
  const panels = Array.from(tabset.querySelectorAll(SELECTOR_PANEL));

  function activateTab(currentTab) {
    const panelId = currentTab.getAttribute(DATA_TARGET);

    tabs.forEach((tab) => {
      if (tab === currentTab) {
        currentTab.classList.add(CLASS_ACTIVATED);
      } else if (tab.classList.contains(CLASS_ACTIVATED)) {
        tab.classList.remove(CLASS_ACTIVATED);
      }
    });

    panels.forEach((panel) => {
      if (panel.id === panelId) {
        panel.classList.add(CLASS_SHOWN);
      } else {
        panel.classList.remove(CLASS_SHOWN);
      }
    });
  }

  function manageTabActivation(event) {
    if (event.target.closest(SELECTOR_TAB)) {
      activateTab(event.target.closest(SELECTOR_TAB));
    }
  }

  function moveFocus(tab, key) {
    const currentIndex = tabs.indexOf(tab);
    const lastIndex = tabs.length - 1;
    let upcomingIndex = 0;

    switch (key) {
      case "ArrowLeft":
        upcomingIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
        break;
      case "ArrowRight":
        upcomingIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
        break;
      case "Home":
        upcomingIndex = 0;
        break;
      case "End":
        upcomingIndex = lastIndex;
        break;
    }

    tabs[currentIndex].removeAttribute("tabIndex");
    tabs[upcomingIndex].setAttribute("tabIndex", "-1");
    tabs[upcomingIndex].focus();
  }

  function manageFocusMove(event) {
    if (event.target.closest(SELECTOR_TAB) && ["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
      event.preventDefault();
      moveFocus(event.target.closest(SELECTOR_TAB), event.key);
    }
  }

  tabset.addEventListener("click", manageTabActivation);
  tabset.addEventListener("keydown", manageFocusMove);
}

const tabsets = Array.from(document.querySelectorAll(SELECTOR_TABSET));

tabsets.forEach((tabset) => Tabset(tabset));
