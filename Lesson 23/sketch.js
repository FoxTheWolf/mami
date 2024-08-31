var inpC, inpM, inpY, inpK;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  text("Cyan", 5, 10);
  inpC = createSlider(0, 255, 127);
  inpC.position(50, 10);
  inpC.style("width", "80px");

  text("Magenta", 5, 30);
  inpM = createSlider(0, 255, 127);
  inpM.position(50, 30);
  inpM.style("width", "80px");

  text("Yellow", 5, 50);
  inpY = createSlider(0, 255, 127);
  inpY.position(50, 50);
  inpY.style("width", "80px");

  text("Black", 5, 70);
  inpK = createSlider(0, 255, 127);
  inpK.position(50, 70);
  inpK.style("width", "80px");
}

function draw() {
  let [h, s, b] = rgbToHSB();
  fill(h, s, b);
  rect(width / 2, height / 2, 100, 100);
}

function cmykToRGB(c, m, y, k) {
  c = map(c, 0, 255, 0, 1);
  m = map(m, 0, 255, 0, 1);
  y = map(y, 0, 255, 0, 1);
  k = map(k, 0, 255, 0, 1);
  var r = 255 * (1 - c) * (1 - k);
  var g = 255 * (1 - m) * (1 - k);
  var b = 255 * (1 - y) * (1 - k);
  // r = 255 - r
  // g = 255 - g
  // b = 255 - b
  return [r, g, b];
}

function rgbToHSB() {
  let [r, g, b] = cmykToRGB(
    inpC.value(),
    inpM.value(),
    inpY.value(),
    inpK.value()
  );

  r = map(r, 0, 255, 0, 1);
  g = map(g, 0, 255, 0, 1);
  b = map(b, 0, 255, 0, 1);

  colorMax = max(r, g, b);
  colorMin = min(r, g, b);

  colorDelta = colorMax - colorMin;

  let largest;
  if (r >= g && r >= b) {
    largest = r;
  } else if (g >= r && g >= b) {
    largest = g;
  } else largest = b;

  let hue, sat, br;

  switch (largest) {
    case r:
      hue = (g - b) / colorDelta;
      break;
    case g:
      hue = (b - r) / colorDelta + 2;
      break;
    case b:
      hue = (r - g) / colorDelta + 4;
      break;
  }

  if (hue > 6) hue = hue % 6;
  else if (hue < 0) hue = (hue % 6) + 6;
  if (colorDelta == 0) hue = 0;

  console.log(hue, r, g, b, colorDelta);

  hue = map(hue, 0, 6, 0, 360);
  br = colorMax;

  if (br == 0) sat = 0;
  else {
    sat = colorDelta / br;
  }

  sat = map(sat, 0, 1, 0, 100);

  br = map(colorMax, 0, 1, 0, 100);

  return [hue, sat, br];
}
