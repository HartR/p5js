let t = 0;
let gridSize = 20;
let colors;

function setup() {
  createCanvas(1080, 1080);
  colors = generateRandomColors(6);
  background(0);
  noStroke();
}

function draw() {
  for (let x = 0; x < width; x += gridSize) {
    for (let y = 0; y < height; y += gridSize) {
      let xOffset = cos(t + x * 0.01) * 30;
      let yOffset = sin(t + y * 0.01) * 30;
      let index = int(random(colors.length));
      fill(colors[index]);
      ellipse(x + xOffset, y + yOffset, gridSize, gridSize);
    }
  }
  t += 0.05;
}

function generateRandomColors(numColors) {
  let randomColors = [];
  for (let i = 0; i < numColors; i++) {
    randomColors.push(color(random(255), random(255), random(255), 150));
  }
  return randomColors;
}
