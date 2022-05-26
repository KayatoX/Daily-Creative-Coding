let ro;
let space = 30;
let n = 100;
let r = 0;

function setup() {
  createCanvas(500, 500);
  noStroke();
  ro = 0;
}


function draw() {
  clear();
  background(180, 210, 217);
  translate(-10, -10);
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
    push();
    rectMode(CENTER);
    translate(tx, ty);
    rotate(ro);
    fill(4,104,191);
    circle(tx, ty, 10);
    pop();
    fill(255);
    rect(tx, ty, 10, 10);
        }
  }
  
  ro += 0.04;

}



