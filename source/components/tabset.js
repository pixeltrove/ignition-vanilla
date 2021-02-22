// TABSET
// -----------------------------------------------------------------------------

const SELECTOR_TABSET = ".tabset";
const SELECTOR_TAB = ".tabset-tab";
const SELECTOR_PANEL = ".tabset-panel";
const CLASS_ACTIVATED = "is-activated";
const CLASS_SHOWN = "is-shown";
const DATA_TARGET = "data-target";

const Tabset = (tabset) => {
  const tabs = tabset.querySelectorAll(SELECTOR_TAB);
  const panels = tabset.querySelectorAll(SELECTOR_PANEL);

  const activateTab = (event) => {
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
  };

  tabs.forEach((tab) => tab.addEventListener("click", activateTab));
};

const tabsets = document.querySelectorAll(SELECTOR_TABSET);

tabsets.forEach((tabset) => Tabset(tabset));
