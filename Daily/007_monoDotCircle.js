let space = 30;
let n = 10000;
let r = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50);
}

function draw(){
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
      fill(random(50,200));
      circle(tx, ty, random(5,25));
    }
  }
}

