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
    const currentTab = event.currentTarget;
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

  function navigateUsingKeyboard(event) {
    const navigationKeys = ["ArrowLeft", "ArrowRight", "Home", "End"];
    const currentIndex = tabs.indexOf(event.currentTarget);
    const lastIndex = tabs.length - 1;
    let nextIndex = 0;

    if (navigationKeys.includes(event.key)) {
      event.preventDefault();

      switch (event.key) {
        case "ArrowLeft":
          nextIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
          break;
        case "ArrowRight":
          nextIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
          break;
        case "Home":
          nextIndex = 0;
          break;
        case "End":
          nextIndex = lastIndex;
          break;
      }

      tabs[currentIndex].removeAttribute("tabIndex");
      tabs[nextIndex].setAttribute("tabIndex", "-1");
      tabs[nextIndex].focus();
    }
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", activateTab);
    tab.addEventListener("keydown", navigateUsingKeyboard);
  });
}

const tabsets = Array.from(document.querySelectorAll(SELECTOR_TABSET));

tabsets.forEach((tabset) => Tabset(tabset));
