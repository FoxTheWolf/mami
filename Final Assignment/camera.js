const density = "Ñ@#W$9876543210?!abc;:+=-,._        ";
const ZOOM = 8;

let video;
let asciiDiv;

// function preload() {
//   video = loadImage("videos/video48.jpg");
// }

function setup() {
  // createCanvas(video.width * ZOOM, video.height * ZOOM);
  noCanvas();
  video = createCapture(VIDEO);
  video.size(64, 48);
  asciiDiv = createDiv();
}

function draw() {
  background(0);
  //image(video, 0, 0, video.width, video.height);

  let w = width / video.width;
  let h = height / video.height;
  video.loadPixels();
  let asciiImage = ``;

  for (let j = 0; j < video.height; j++) {
    for (let i = 0; i < video.width; i++) {
      const pixelIndex = (i + j * video.width) * 4;
      const r = video.pixels[pixelIndex + 0];
      const g = video.pixels[pixelIndex + 1];
      const b = video.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 3;
      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, len, 0));

      const c = density.charAt(charIndex);
      if (c == " ") asciiImage += "&nbsp;";
      else asciiImage += c;
    }
    asciiImage += "<br/>";
    // console.log(asciiImage)
  }
  asciiDiv.html(asciiImage);
}
