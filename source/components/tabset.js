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

  function activateTab(event) {
    const currentTab = event.target;
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

  function moveFocus(event) {
    const keys = ["ArrowLeft", "ArrowRight", "Home", "End"];
    const currentIndex = tabs.indexOf(event.target);
    const lastIndex = tabs.length - 1;
    let upcomingIndex = 0;

    if (keys.includes(event.key)) {
      event.preventDefault();

      switch (event.key) {
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
  }

  function manageClick(event) {
    if (event.target.closest(SELECTOR_TAB)) {
      activateTab(event);
    }
  }

  function manageKeydown(event) {
    if (event.target.closest(SELECTOR_TAB)) {
      moveFocus(event);
    }
  }

  tabset.addEventListener("click", manageClick);
  tabset.addEventListener("keydown", manageKeydown);
}

const tabsets = Array.from(document.querySelectorAll(SELECTOR_TABSET));

tabsets.forEach((tabset) => Tabset(tabset));
