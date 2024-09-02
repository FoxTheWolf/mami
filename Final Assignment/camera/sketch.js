// Density of the ASCII art characters
const density = "Ñ@#W$9876543210?!abc;:+=-,._      ";
// Zoom level of the video
const ZOOM = 8;

// Video capture
let video;
// Div to display the ASCII art
let asciiDiv;

/**
 * Setup the video capture and ASCII art display
 */
function setup() {
  // Create a video capture with the default camera
  noCanvas();
  video = createCapture(VIDEO);
  // Set the size of the video capture
  video.size(64, 48);
  // Create a div to display the ASCII art
  asciiDiv = createDiv();
}

/**
 * Draw the ASCII art from the video capture
 */
function draw() {
  // Get the width and height of the video capture
  let w = width / video.width;
  let h = height / video.height;
  // Load the pixels of the video capture
  video.loadPixels();
  // Create an empty string to store the ASCII art
  let asciiImage = ``;

  // Loop through each pixel of the video capture
  for (let j = 0; j < video.height; j++) {
    for (let i = 0; i < video.width; i++) {
      // Calculate the index of the pixel
      const pixelIndex = (i + j * video.width) * 4;
      // Get the color of the pixel
      const r = video.pixels[pixelIndex + 0];
      const g = video.pixels[pixelIndex + 1];
      const b = video.pixels[pixelIndex + 2];
      // Calculate the average color of the pixel
      const avg = (r + g + b) / 3;
      // Get the length of the density string
      const len = density.length;
      // Calculate the index of the character in the density string
      const charIndex = floor(map(avg, 0, 255, len, 0));
      // Get the character at the calculated index
      const c = density.charAt(charIndex);
      // If the character is a space, add a non-breaking space to the string
      if (c == " ") asciiImage += "&nbsp;";
      // Otherwise, add the character to the string
      else asciiImage += c;
    }
    // Add a line break to the string
    asciiImage += "<br/>";
  }
  // Set the HTML of the div to the ASCII art string
  asciiDiv.html(asciiImage);
}
