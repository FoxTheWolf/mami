// Stores the images for the character
var oil1, oil2, oil3, oil4;

// Constants for the different states of the character
const LEFT = 0;
const MIDDLE_LEFT = 1;
const MIDDLE_RIGHT = 2;
const RIGHT = 3;
const MIDDLE_RIGHT_BACK = 4;
const MIDDLE_LEFT_BACK = 5;

// Stores the current time in milliseconds, the animation time in milliseconds, and the state time in milliseconds
let ms, animTime, stateTime;

// Stores the current state of the character
let charState = LEFT;

/**
 * Loads the images for the character.
 */
function preload() {
  oil1 = loadImage("oil1.png");
  oil2 = loadImage("oil2.png");
  oil3 = loadImage("oil3.png");
  oil4 = loadImage("oil4.png");
}

/**
 * Sets up the canvas and initializes the variables.
 */
function setup() {
  // Create a canvas with a size of 32x24
  createCanvas(32, 24);
  // Set the animation time to 2 seconds
  animTime = 2000;
  // Set the state time to 0
  stateTime = 0;
}

/**
 * Main draw loop of the program. This is where the canvas is redrawn
 * and the character animation is updated.
 */
function draw() {
  // Clear the canvas by setting the background color to white
  background(255);
  // Update the character animation state
  MEF();
  // Draw the character image based on the current state
  drawChar();
}

/**
 * Switches the character state every 2 seconds.
 */
function MEF() {
  // Get the current time in milliseconds
  ms = millis();
  // If the current time is greater than the animation time
  // plus the state time, switch the character state
  if (ms > animTime + stateTime) {
    // Switch the character state
    switch (charState) {
      case LEFT:
        // Move to the left
        charState = MIDDLE_LEFT;
        break;
      case MIDDLE_LEFT:
        // Move to the middle left
        charState = MIDDLE_RIGHT;
        break;
      case MIDDLE_RIGHT:
        // Move to the middle right
        charState = RIGHT;
        break;
      case RIGHT:
        // Move to the right
        charState = MIDDLE_RIGHT_BACK;
        break;
      case MIDDLE_RIGHT_BACK:
        // Move to the middle right back
        charState = MIDDLE_LEFT_BACK;
        break;
      case MIDDLE_LEFT_BACK:
        // Move to the middle left back
        charState = LEFT;
        break;
    }
    // Set the state time to the current time
    stateTime = ms;
  }
}

/**
 * Draws the character depending on the current state.
 */
function drawChar() {
  // Switch the character state
  switch (charState) {
    case LEFT:
      // Draw the left character
      image(oil1, 2, 2);
      break;
    case MIDDLE_LEFT:
    case MIDDLE_LEFT_BACK:
      // Draw the middle left character
      image(oil2, 2, 2);
      break;
    case MIDDLE_RIGHT:
    case MIDDLE_RIGHT_BACK:
      // Draw the middle right character
      image(oil3, 2, 2);
      break;
    case RIGHT:
      // Draw the right character
      image(oil4, 2, 2);
      break;
  }
}
