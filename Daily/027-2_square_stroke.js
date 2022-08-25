// angleMode(DEGREES)/push()/pop()_rotate
// CC Attribution ShareAlike
// https://openprocessing.org/sketch/824293
// by bunbunra

let grid;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  grid = 50;
  background(255);
}

function draw() {
  frameRate(10);
  for (let y = 0; y < height; y = y + grid) {
    for (let x = 0; x < width; x = x + grid) {
      push();
      translate(x, y);
      rectMode(CENTER);
      stroke(random(0,200));
      strokeWeight(random(0,1));
      noFill();
      square(0, 0, random(1,grid-1));
      pop();
    }
  }
}
