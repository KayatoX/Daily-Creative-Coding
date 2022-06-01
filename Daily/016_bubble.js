// angleMode(DEGREES)/push()/pop()_rotate
// CC Attribution ShareAlike
// https://openprocessing.org/sketch/824293
// by bunbunra

let grid;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background(255);
}

function draw() {
  frameRate(5);
  grid = random(20,50);
  for (let y = 0; y < height; y = y + grid) {
    grid = random(20,50);
    for (let x = 0; x < width; x = x + grid) {
      push();
      translate(x, y);
      rectMode(CENTER);
      fill(random(130,170),random(180,220),random(180,250));
      stroke(255);
      circle(0, 0, random(10,grid));
      pop();
    }
  }
}
