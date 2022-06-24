// Kumaleon Sample
// https://openprocessing.org/sketch/1599946
// https://docs.kumaleon.com/coding-challenge

// p5 sample code
let space = 30;
let n = 10000;
let r = 10;

function setup() {
	// pass a canvas element to app by kumaleon.setCanvas
  kumaleon.setCanvas(createCanvas(windowWidth, windowHeight).canvas)
  background(255);
  noFill()
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
  frameRate(10);
  for (let y = 0; y < n; y++) {
    const ty = y * space;

    if (ty - r >= height) {
      break;
    }

    for (let x = 0; x < n; x++) {
      const tx = x * space;

      if (tx - r >= width) {
        break;
      }
      noStroke();
      fill(random(50,250),200,150);
      circle(tx, ty, random(5,25));
			ellipse(tx, ty, random(5,25),random(5,25));
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
  background(255)
}
