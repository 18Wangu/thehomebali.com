// Get the element with the ID "image-track" and store it in the "track" variable
const track = document.getElementById("image-track");

// This function is called when the mouse is pressed down on the track
// It saves the current client X coordinate to the track's "data-mouse-down-at" attribute
const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

// This function is called when the mouse button is released
// It resets the track's "data-mouse-down-at" attribute to 0 and saves the current percentage to the "data-prev-percentage" attribute
const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
}

// This function is called when the mouse is moved while the button is held down
const handleOnMove = e => {
  // If the "data-mouse-down-at" attribute is 0 (meaning the mouse button is not down), exit the function
  if(track.dataset.mouseDownAt === "0") return;
  
  // Calculate how far the mouse has moved from where it was pressed down to its current position
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;
  
  // Calculate the percentage to move the track based on how far the mouse has moved
  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
  // Save the new percentage to the track's "data-percentage" attribute
  track.dataset.percentage = nextPercentage;
  
  // Animate the track's position to the new percentage using CSS transform
  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1200, fill: "forwards" });
  
  // Animate each image's object position based on the new percentage to create a parallax effect
  for(const image of track.getElementsByClassName("image")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }
}

/* -- These lines handle touch events for mobile devices -- */

// This function is called when a touch starts on the track
// It saves the X coordinate of the first touch to the track's "data-mouse-down-at" attribute
window.ontouchstart = e => handleOnDown(e.touches[0]);

// This function is called when a touch ends
// It resets the track's "data-mouse-down-at" attribute to 0 and saves the current percentage to the "data-prev-percentage" attribute
window.ontouchend = e => handleOnUp(e.touches[0]);

// This function is called when a touch moves
window.ontouchmove = e => handleOnMove(e.touches[0]);

/* -- These lines handle mouse events for desktop devices -- */

// This function is called when the mouse button is pressed down on the track
window.onmousedown = e => handleOnDown(e);

// This function is called when the mouse button is released
window.onmouseup = e => handleOnUp(e);

// This function is called when the mouse moves
window.onmousemove = e => handleOnMove(e);
