// NOTIFICATION
// -----------------------------------------------------------------------------

const SELECTOR_NOTIFICATION = ".notification";
const SELECTOR_BUTTON_DISMISS = ".notification-button-dismiss";

const Notification = (notification) => {
  const dismiss = (event) => {
    if (event.target.closest(SELECTOR_BUTTON_DISMISS)) {
      notification.remove();
    }
  };

  notification.addEventListener("click", dismiss);
};

const notifications = Array.from(document.querySelectorAll(SELECTOR_NOTIFICATION));

notifications.forEach((notification) => Notification(notification));
