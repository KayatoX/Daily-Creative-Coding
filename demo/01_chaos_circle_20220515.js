let r, x;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(random(255),random(255),random(255));
  r = min(width, height) / 6;
  x = r;
}

function drawCircle() {

  fill(random(255),random(255),random(255));
  stroke(random(255),random(255),random(255));
  strokeWeight(0);
  circle(random(windowWidth), random(windowHeight), random(10,200));
}

function draw() {
  for (let x = 0; x <200; x++){
    drawCircle();
  }
}
