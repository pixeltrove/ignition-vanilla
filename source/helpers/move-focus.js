// MOVE FOCUS
// -----------------------------------------------------------------------------

function moveFocus(element, elements, direction) {
  const lastIndex = elements.length - 1;
  let upcomingIndex = 0;
  let keys = [];

  if (direction === "vertical") {
    keys = ["ArrowUp", "ArrowDown", "Home", "End"];
  } else if (direction === "horizontal") {
    keys = ["ArrowLeft", "ArrowRight", "Home", "End"];
  }

  function keyboardFocus(event) {
    const currentIndex = elements.indexOf(event.target);

    if (keys.includes(event.key) && elements.includes(event.target)) {
      event.preventDefault();

      switch (event.key) {
        case "ArrowUp":
        case "ArrowLeft":
          upcomingIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
          break;
        case "ArrowDown":
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

      elements[upcomingIndex].focus();
    }
  }

  element.addEventListener("keydown", keyboardFocus);
}

export default moveFocus;
