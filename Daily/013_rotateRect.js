// angleMode(DEGREES)/push()/pop()_rotate
// CC Attribution ShareAlike
// https://openprocessing.org/sketch/824293
// by bunbunra

let grid;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  grid = 30;
}

function draw() {
  background(255);
  for (let y = 0; y < height; y = y + grid) {
    for (let x = 0; x < width; x = x + grid) {
      let angle = (x + y * width + frameCount) * 1.5;
      push();
      translate(x, y);
      rotate(angle);
      rectMode(CENTER);
      fill(25);
      noStroke();
      rect(0, 0, grid, grid);
      pop();
    }
  }
}
