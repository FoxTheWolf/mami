// variables to store the images
var oil1, oil2, oil3, oil4, bg;

// constants to represent the character states
const CHAR_LEFT = 0; // state for the character to be facing left
const CHAR_MIDDLE_LEFT = 1; // state for the character to be in the middle, coming from the left
const CHAR_MIDDLE_RIGHT = 2; // state for the character to be in the middle, going to the right
const CHAR_RIGHT = 3; // state for the character to be facing right
const CHAR_MIDDLE_RIGHT_BACK = 4; // state for the character to be in the middle, coming from the right, but going backwards
const CHAR_MIDDLE_LEFT_BACK = 5; // state for the character to be in the middle, going to the left, but going backwards

// variables to control the animation time
let ms, animTime, stateTime;

// variable to control the current character state
let charState = CHAR_RIGHT;

// function to load the images
function preload() {
  oil1 = loadImage("oil1.png"); // image of the character facing left
  oil2 = loadImage("oil2.png"); // image of the character in the middle left
  oil3 = loadImage("oil3.png"); // image of the character in the middle right
  oil4 = loadImage("oil4.png"); // image of the character facing right
  bg = loadImage("bg.png"); // background image
}

// function to create the canvas and set the animation time
function setup() {
  createCanvas(160, 144);
  animTime = 700; // animation time in milliseconds
  stateTime = 0; // current state time in milliseconds
}

// function to draw the character and the background
function draw() {
  image(bg, 0, 0); // draw the background
  MEF(); // change the character state based on the time
  drawChar(); // draw the character based on the current state
}

// function to change the character state based on the time
function MEF() {
  ms = millis(); // current time in milliseconds

  // change the character state based on the time
  switch (charState) {
    case CHAR_LEFT:
      if (ms > 2 * animTime + stateTime) {
        charState = CHAR_MIDDLE_LEFT;
        stateTime = ms;
      }
      break;
    case CHAR_MIDDLE_LEFT:
      if (ms > animTime + stateTime) {
        charState = CHAR_MIDDLE_RIGHT;
        stateTime = ms;
      }
      break;
    case CHAR_MIDDLE_RIGHT:
      if (ms > animTime + stateTime) {
        charState = CHAR_RIGHT;
        stateTime = ms;
      }
      break;
    case CHAR_RIGHT:
      if (ms > 2 * animTime + stateTime) {
        charState = CHAR_MIDDLE_RIGHT_BACK;
        stateTime = ms;
      }
      break;
    case CHAR_MIDDLE_RIGHT_BACK:
      if (ms > animTime + stateTime) {
        charState = CHAR_MIDDLE_LEFT_BACK;
        stateTime = ms;
      }
      break;
    case CHAR_MIDDLE_LEFT_BACK:
      if (ms > animTime + stateTime) {
        charState = CHAR_LEFT;
        stateTime = ms;
      }
      break;
  }
}

// function to draw the character based on the current state
function drawChar() {
  switch (charState) {
    case CHAR_LEFT:
      image(oil1, 28, 90); // draw the character facing left
      break;
    case CHAR_MIDDLE_LEFT:
    case CHAR_MIDDLE_LEFT_BACK:
      image(oil2, 54, 90); // draw the character in the middle left
      break;
    case CHAR_MIDDLE_RIGHT:
    case CHAR_MIDDLE_RIGHT_BACK:
      image(oil3, 84, 90); // draw the character in the middle right
      break;
    case CHAR_RIGHT:
      image(oil4, 107, 90); // draw the character facing right
      break;
  }
}

