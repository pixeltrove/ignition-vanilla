// source/components/accordion.js
var SELECTOR_ACCORDION = ".accordion";
var SELECTOR_HANDLE = ".accordion-handle";
var CLASS_ACTIVATED = "is-activated";
var CLASS_SHOWN = "is-shown";
var DATA_TARGET = "data-target";
var Accordion = (accordion) => {
  const handles = accordion.querySelectorAll(SELECTOR_HANDLE);
  const firstHandle = handles[0];
  const lastHandle = handles[handles.length - 1];
  const togglePanel = (event) => {
    const currentHandle = event.currentTarget;
    const panelId = currentHandle.getAttribute(DATA_TARGET);
    const panel = document.querySelector(`#${panelId}`);
    const isExpanded = panel.classList.contains(CLASS_SHOWN);
    currentHandle.classList.toggle(CLASS_ACTIVATED);
    currentHandle.setAttribute("aria-expanded", !isExpanded);
    panel.classList.toggle(CLASS_SHOWN);
  };
  const navigateUsingKeyboard = (event) => {
    const currentHandle = event.currentTarget;
    const currentHandleIndex = Array.from(handles).indexOf(currentHandle);
    const previousHandle = handles[currentHandleIndex - 1];
    const nextHandle = handles[currentHandleIndex + 1];
    switch (event.key) {
      case "ArrowUp":
        event.preventDefault();
        if (currentHandle === firstHandle) {
          lastHandle.focus();
        } else {
          previousHandle.focus();
        }
        break;
      case "ArrowDown":
        event.preventDefault();
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
  handles.forEach((handle) => {
    handle.addEventListener("click", togglePanel);
    handle.addEventListener("keydown", navigateUsingKeyboard);
  });
};
var accordions = document.querySelectorAll(SELECTOR_ACCORDION);
accordions.forEach((accordion) => Accordion(accordion));

// source/components/dialog.js
var SELECTOR_DIALOG = ".dialog";
var SELECTOR_BACKDROP = ".dialog-backdrop";
var CLASS_NO_SCROLL = "no-scroll";
var CLASS_SHOWN2 = "is-shown";
var DATA_HIDE = "data-hide";
var DATA_TARGET2 = "data-target";
var Dialog = (dialog) => {
  const dialogId = dialog.id;
  const trigger = document.querySelector(`[${DATA_TARGET2}="${dialogId}"]`);
  const backdrop = dialog.closest(SELECTOR_BACKDROP);
  const show = () => {
    dialog.addEventListener("click", hide);
    backdrop.addEventListener("click", hide);
    document.addEventListener("keyup", hide);
    backdrop.classList.add(CLASS_SHOWN2);
    toggleScroll();
    trapFocus(dialog);
  };
  const hide = (event) => {
    if (event.target.hasAttribute(DATA_HIDE) && event.type === "click" || event.target.matches(SELECTOR_BACKDROP) || event.key === "Escape") {
      dialog.removeEventListener("click", hide);
      backdrop.removeEventListener("click", hide);
      document.removeEventListener("keyup", hide);
      backdrop.classList.remove(CLASS_SHOWN2);
      toggleScroll();
    }
  };
  const toggleScroll = () => {
    if (window.innerHeight < document.body.scrollHeight) {
      const scrollPosition = Math.abs(parseInt(document.body.style.top)) || window.scrollY;
      if (document.body.classList.contains(CLASS_NO_SCROLL)) {
        document.body.classList.remove(CLASS_NO_SCROLL);
        document.body.style.top = "";
        window.scroll(0, scrollPosition);
      } else {
        document.body.classList.add(CLASS_NO_SCROLL);
        document.body.style.top = -scrollPosition + "px";
      }
    }
  };
  const trapFocus = (dialog2) => {
    const focusableElements = dialog2.querySelectorAll("a[href], button:not([disabled]), details, input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [contenteditable]");
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];
    const cycleFocus = (event) => {
      if (event.key === "Tab") {
        const tabBackward = event.shiftKey;
        if (tabBackward) {
          if (document.activeElement === firstFocusableElement) {
            event.preventDefault();
            lastFocusableElement.focus();
          } else if (document.activeElement === element) {
            event.preventDefault();
            element.focus();
          }
        } else if (!tabBackward) {
          if (document.activeElement === lastFocusableElement) {
            event.preventDefault();
            firstFocusableElement.focus();
          }
        }
      }
    };
    dialog2.addEventListener("keydown", cycleFocus);
    dialog2.setAttribute("tabindex", -1);
    dialog2.focus();
  };
  trigger.addEventListener("click", show);
};
var dialogs = document.querySelectorAll(SELECTOR_DIALOG);
dialogs.forEach((dialog) => Dialog(dialog));

// source/components/dropdown.js
var SELECTOR_DROPDOWN = ".dropdown";
var CLASS_ACTIVATED2 = "is-activated";
var CLASS_SHOWN3 = "is-shown";
var DATA_TARGET3 = "data-target";
var Dropdown = (dropdown) => {
  const dropdownId = dropdown.id;
  const trigger = document.querySelector(`[${DATA_TARGET3}="${dropdownId}"]`);
  const show = () => {
    trigger.classList.add(CLASS_ACTIVATED2);
    trigger.setAttribute("aria-expanded", true);
    dropdown.classList.add(CLASS_SHOWN3);
    document.addEventListener("click", hideOnOutsideClick);
  };
  const hide = () => {
    trigger.classList.remove(CLASS_ACTIVATED2);
    trigger.setAttribute("aria-expanded", false);
    dropdown.classList.remove(CLASS_SHOWN3);
  };
  const hideOnOutsideClick = (event) => {
    if (!trigger.contains(event.target) && !dropdown.contains(event.target)) {
      hide();
      document.removeEventListener("click", hideOnOutsideClick);
    }
  };
  const hideOnTab = (event) => {
    if (event.key === "Tab") {
      const focusableElements = dropdown.querySelectorAll("a[href], button:not([disabled]), details, input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [contenteditable]");
      const lastFocusableElement = focusableElements[focusableElements.length - 1];
      const tabBackward = event.shiftKey;
      if (document.activeElement === lastFocusableElement && !tabBackward || document.activeElement === trigger && tabBackward) {
        hide();
      }
    }
  };
  const toggle = () => {
    const isExpanded = dropdown.classList.contains(CLASS_SHOWN3);
    return isExpanded ? hide() : show();
  };
  trigger.addEventListener("click", toggle);
  trigger.addEventListener("keydown", hideOnTab);
  dropdown.addEventListener("keydown", hideOnTab);
};
var dropdowns = document.querySelectorAll(SELECTOR_DROPDOWN);
dropdowns.forEach((dropdown) => Dropdown(dropdown));

// source/components/notification.js
var SELECTOR_NOTIFICATION = ".notification";
var SELECTOR_BUTTON_DISMISS = ".notification-button-dismiss";
var Notification = (notification) => {
  const dismiss = (event) => {
    if (event.target.closest(SELECTOR_BUTTON_DISMISS)) {
      notification.remove();
    }
  };
  notification.addEventListener("click", dismiss);
};
var notifications = document.querySelectorAll(SELECTOR_NOTIFICATION);
notifications.forEach((notification) => Notification(notification));

// source/components/tabset.js
var SELECTOR_TABSET = ".tabset";
var SELECTOR_TAB = ".tabset-tab";
var SELECTOR_PANEL = ".tabset-panel";
var CLASS_ACTIVATED3 = "is-activated";
var CLASS_SHOWN4 = "is-shown";
var DATA_TARGET4 = "data-target";
var Tabset = (tabset) => {
  const tabs = tabset.querySelectorAll(SELECTOR_TAB);
  const panels = tabset.querySelectorAll(SELECTOR_PANEL);
  const activateTab = (event) => {
    const currentTab = event.currentTarget;
    const panelId = currentTab.getAttribute(DATA_TARGET4);
    tabs.forEach((tab) => {
      if (tab === currentTab) {
        currentTab.classList.add(CLASS_ACTIVATED3);
      } else if (tab.classList.contains(CLASS_ACTIVATED3)) {
        tab.classList.remove(CLASS_ACTIVATED3);
      }
    });
    panels.forEach((panel) => {
      if (panel.id === panelId) {
        panel.classList.add(CLASS_SHOWN4);
      } else {
        panel.classList.remove(CLASS_SHOWN4);
      }
    });
  };
  tabs.forEach((tab) => tab.addEventListener("click", activateTab));
};
var tabsets = document.querySelectorAll(SELECTOR_TABSET);
tabsets.forEach((tabset) => Tabset(tabset));
