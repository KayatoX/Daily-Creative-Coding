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
  grid = random(10,50);
  for (let y = 0; y < height; y = y + grid) {
    for (let x = 0; x < width; x = x + grid) {
      let angle = (x + y * width + frameCount) * 1.5;
      push();
      translate(x, y);
      rotate(angle);
      rectMode(CENTER);
      fill(random(0,200),random(100,255),random(50,150));
      noStroke();
      rect(0, 0, random(5,grid-10), random(5,grid-10));
      pop();
    }
  }
}
