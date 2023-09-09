let t = 0;
let gridSize = 120;
let colors;

function setup() {
  createCanvas(1080, 1080);
  colors = generateRandomColors(6);
  background(0);
  noStroke();
  frameRate(30);
}

function draw() {
  if (frameCount === 1) {
    const capture = P5Capture.getInstance();
    capture.start({
      format: "mp4",
      duration: 300,
    });
  }
  for (let x = 0; x < width; x += gridSize) {
    for (let y = 0; y < height; y += gridSize) {
      let xOffset = cos(t + x * 0.01) * 30;
      let yOffset = sin(t + y * 0.01) * 30;
      let index = int(random(colors.length));
      fill(getRandomTetradicColor());
      ellipse(x + xOffset, y + yOffset, gridSize, gridSize);
    }
  }
  t += 0.05;
}

function getRandomTetradicColor() {
  // Define a tetradic color palette
  let colors = [
    color(255, 0, 0),      // Red
    color(0, 255, 0),      // Green
    color(0, 0, 255),      // Blue
    color(255, 255, 0)    // Yellow
  ];

  // Get a random index from the color palette
  let randomIndex = floor(random(colors.length));

  // Return the random color
  return colors[randomIndex];
}

function generateRandomColors(numColors) {
  let randomColors = [];
  for (let i = 0; i < numColors; i++) {
    randomColors.push(color(random(40, 200), random(40, 200), random(40, 200)));
  }
  return randomColors;
}
