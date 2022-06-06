let grid;
let wx;
let hx;
let size1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = 10;
}

function draw() {
  clear();
  background(240, 230, 140);
  wx = mouseX;
  hx = mouseY;
  
  frameRate(60);
  for (let y = 0; y < height; y = y + grid) {
    for (let x = 0; x < width; x = x + grid) {
      push();
      translate(x, y);
      size1 = dist(hx, wx, y, x);
      //console.log(size);
      rectMode(CENTER);
      fill(size1 / 100, size1 / 100, size1 / 100);
      noStroke();
      circle(0, 0, size1 / 10);
      pop();
    }
  }
  

  rectMode(CENTER);
  noStroke();
  fill(0);
  rect(width / 2, max(height)-50, 50, 100);
  circle(width / 2, max(height)-100, 80);
  
}

