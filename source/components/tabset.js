// TABSET
// -----------------------------------------------------------------------------

const SELECTOR_TABSET = ".tabset";
const SELECTOR_TAB = ".tabset-tab";
const SELECTOR_PANEL = ".tabset-panel";
const CLASS_ACTIVATED = "is-activated";
const CLASS_SHOWN = "is-shown";
const DATA_TARGET = "data-target";

const Tabset = (tabset) => {
  const tabs = Array.from(tabset.querySelectorAll(SELECTOR_TAB));
  const firstTab = tabs[0];
  const lastTab = tabs[tabs.length - 1];
  const panels = Array.from(tabset.querySelectorAll(SELECTOR_PANEL));

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

  const navigateUsingKeyboard = (event) => {
    const currentTab = event.currentTarget;
    const currentTabIndex = tabs.indexOf(currentTab);
    const previousTab = tabs[currentTabIndex - 1];
    const nextTab = tabs[currentTabIndex + 1];

    switch (event.key) {
      case "ArrowLeft":
        event.preventDefault();
        currentTab.setAttribute("tabIndex", "-1");
        if (currentTab === firstTab) {
          lastTab.focus();
          lastTab.removeAttribute("tabIndex");
        } else {
          previousTab.focus();
          previousTab.removeAttribute("tabIndex");
        }
        break;
      case "ArrowRight":
        currentTab.setAttribute("tabIndex", "-1");
        if (currentTab === lastTab) {
          firstTab.focus();
          firstTab.removeAttribute("tabIndex");
        } else {
          nextTab.focus();
          nextTab.removeAttribute("tabIndex");
        }
        break;
      case "Home":
        event.preventDefault();
        currentTab.setAttribute("tabIndex", "-1");
        firstTab.focus();
        firstTab.removeAttribute("tabIndex");
        break;
      case "End":
        event.preventDefault();
        currentTab.setAttribute("tabIndex", "-1");
        lastTab.focus();
        lastTab.removeAttribute("tabIndex");
        break;
    }
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", activateTab);
    tab.addEventListener("keydown", navigateUsingKeyboard);
  });
};

const tabsets = Array.from(document.querySelectorAll(SELECTOR_TABSET));

tabsets.forEach((tabset) => Tabset(tabset));
