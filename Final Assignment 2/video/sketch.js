const density = "█@#W$9876543210?!abc;:+=-,.                  ";
let video;
let asciiDiv;
let showing = true;
let playing = true;
let charColor;

function preload() {
  video = createVideo("example/badapple360.mp4");
}

function setup() {
  noCanvas();
  video.size(256, 144);
  video.volume(0.1);
  video.loop();
  asciiDiv = createDiv();
}

function draw() {
  video.loadPixels();
  let asciiImage = ``;

  for (let j = 0; j < video.height; j++) {
    for (let i = 0; i < video.width; i++) {
      const pixelIndex = (i + j * video.width) * 4;
      const r = video.pixels[pixelIndex + 0];
      const g = video.pixels[pixelIndex + 1];
      const b = video.pixels[pixelIndex + 2];
      const a = video.pixels[pixelIndex + 3];

      const avg = (r + g + b + a) / 4;
      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, len, 0));
      const c = density.charAt(charIndex);
      charColor = color(r, g, b, a);

      // if (c == " ") asciiImage += "&nbsp;";
      // else
      asciiImage += c;
    }
    asciiImage += "<br/>";
  }
  asciiDiv.html(asciiImage);
}

function mousePressed() {
  if (showing) {
    video.show();
  } else {
    video.hide();
  }
  showing = !showing;
}

function keyPressed() {
  if (keyCode == 32) {
    if (playing) video.pause();
    else video.play();
  } playing = !playing;
}
