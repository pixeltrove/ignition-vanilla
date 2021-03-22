// source/components/accordion.js
const SELECTOR_ACCORDION = ".accordion";
const SELECTOR_HANDLE = ".accordion-handle";
const CLASS_ACTIVATED = "is-activated";
const CLASS_SHOWN = "is-shown";
const DATA_TARGET = "data-target";
const Accordion = (accordion2) => {
  const handles = accordion2.querySelectorAll(SELECTOR_HANDLE);
  const firstHandle = handles[0];
  const lastHandle = handles[handles.length - 1];
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
    handle.addEventListener("click", toggle);
    handle.addEventListener("keydown", handleArrowKeys);
  });
};
const accordions = document.querySelectorAll(SELECTOR_ACCORDION);
accordions.forEach((accordion2) => Accordion(accordion2));

// source/components/dialog.js
const SELECTOR_DIALOG = ".dialog";
const SELECTOR_BACKDROP = ".dialog-backdrop";
const CLASS_NO_SCROLL = "no-scroll";
const CLASS_SHOWN2 = "is-shown";
const DATA_HIDE = "data-hide";
const DATA_TARGET2 = "data-target";
const Dialog = (dialog2) => {
  const dialogId = dialog2.id;
  const trigger = document.querySelector(`[${DATA_TARGET2}="${dialogId}"]`);
  const backdrop = dialog2.closest(SELECTOR_BACKDROP);
  const show = () => {
    dialog2.addEventListener("click", hide);
    backdrop.addEventListener("click", hide);
    document.addEventListener("keyup", hide);
    backdrop.classList.add(CLASS_SHOWN2);
    toggleScroll();
    trapFocus(dialog2);
  };
  const hide = (event) => {
    if (event.target.hasAttribute(DATA_HIDE) && event.type === "click" || event.target.matches(SELECTOR_BACKDROP) || event.key === "Escape") {
      dialog2.removeEventListener("click", hide);
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
  const trapFocus = (dialog3) => {
    const focusableElements = dialog3.querySelectorAll("a[href], button:not([disabled]), details, input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [contenteditable]");
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
    dialog3.addEventListener("keydown", cycleFocus);
    dialog3.setAttribute("tabindex", -1);
    dialog3.focus();
  };
  trigger.addEventListener("click", show);
};
const dialogs = document.querySelectorAll(SELECTOR_DIALOG);
dialogs.forEach((dialog2) => Dialog(dialog2));

// source/components/dropdown.js
const SELECTOR_DROPDOWN = ".dropdown";
const CLASS_ACTIVATED2 = "is-activated";
const CLASS_SHOWN3 = "is-shown";
const DATA_TARGET3 = "data-target";
const Dropdown = (dropdown2) => {
  const dropdownId = dropdown2.id;
  const trigger = document.querySelector(`[${DATA_TARGET3}="${dropdownId}"]`);
  const show = () => {
    trigger.classList.add(CLASS_ACTIVATED2);
    trigger.setAttribute("aria-expanded", true);
    dropdown2.classList.add(CLASS_SHOWN3);
    document.addEventListener("click", hideOnOutsideClick);
  };
  const hide = () => {
    trigger.classList.remove(CLASS_ACTIVATED2);
    trigger.setAttribute("aria-expanded", false);
    dropdown2.classList.remove(CLASS_SHOWN3);
  };
  const hideOnOutsideClick = (event) => {
    if (!trigger.contains(event.target) && !dropdown2.contains(event.target)) {
      hide();
      document.removeEventListener("click", hideOnOutsideClick);
    }
  };
  const hideOnTab = (event) => {
    if (event.key === "Tab") {
      const focusableElements = dropdown2.querySelectorAll("a[href], button:not([disabled]), details, input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [contenteditable]");
      const lastFocusableElement = focusableElements[focusableElements.length - 1];
      const tabBackward = event.shiftKey;
      if (document.activeElement === lastFocusableElement && !tabBackward || document.activeElement === trigger && tabBackward) {
        hide();
      }
    }
  };
  const toggle = () => {
    const isExpanded = dropdown2.classList.contains(CLASS_SHOWN3);
    return isExpanded ? hide() : show();
  };
  trigger.addEventListener("click", toggle);
  trigger.addEventListener("keydown", hideOnTab);
  dropdown2.addEventListener("keydown", hideOnTab);
};
const dropdowns = document.querySelectorAll(SELECTOR_DROPDOWN);
dropdowns.forEach((dropdown2) => Dropdown(dropdown2));

// source/components/notification.js
const SELECTOR_NOTIFICATION = ".notification";
const SELECTOR_BUTTON_DISMISS = ".notification-button-dismiss";
const Notification = (notification2) => {
  const dismiss = (event) => {
    if (event.target.closest(SELECTOR_BUTTON_DISMISS)) {
      notification2.remove();
    }
  };
  notification2.addEventListener("click", dismiss);
};
const notifications = document.querySelectorAll(SELECTOR_NOTIFICATION);
notifications.forEach((notification2) => Notification(notification2));

// source/components/tabset.js
const SELECTOR_TABSET = ".tabset";
const SELECTOR_TAB = ".tabset-tab";
const SELECTOR_PANEL = ".tabset-panel";
const CLASS_ACTIVATED3 = "is-activated";
const CLASS_SHOWN4 = "is-shown";
const DATA_TARGET4 = "data-target";
const Tabset = (tabset2) => {
  const tabs = tabset2.querySelectorAll(SELECTOR_TAB);
  const panels = tabset2.querySelectorAll(SELECTOR_PANEL);
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
const tabsets = document.querySelectorAll(SELECTOR_TABSET);
tabsets.forEach((tabset2) => Tabset(tabset2));

// source/main.js
