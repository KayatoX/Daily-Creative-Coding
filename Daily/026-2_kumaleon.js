// Kumaleon Sample
// https://openprocessing.org/sketch/1599946
// https://docs.kumaleon.com/coding-challenge

// p5 sample code

// angleMode(DEGREES)/push()/pop()_rotate
// CC Attribution ShareAlike
// https://openprocessing.org/sketch/824293
// by bunbunra


let grid;

function setup() {
	// pass a canvas element to app by kumaleon.setCanvas
  kumaleon.setCanvas(createCanvas(windowWidth, windowHeight).canvas)
  background(255)
  noFill()
	angleMode(DEGREES);
  grid = 40;
}

function drawPolygon(x, y, radius) {
  const r = (Math.random() * 0.4 + 0.6) * radius
  const offsetX = x + (Math.random() * 2 - 1) * r
  const offsetY = y + (Math.random() * 2 - 1) * r
  const angle = Math.random() * PI * 2
  const n = 3 + Math.floor(Math.random() * 4)
  const v = createVector(r, 0)
  v.rotate(angle)
  const angleUnit = (PI * 2) / n
  for (let i = 0; i < n; i++) {
    const fromX = v.x
    const fromY = v.y
    v.rotate(angleUnit)
    line(offsetX + fromX, offsetY + fromY, offsetX + v.x, offsetY + v.y)
  }
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

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
  background(255)
}
