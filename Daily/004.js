let r0 = 50;
let angle = 0;
let c = 15;
let rArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < c; i++){
    rArray[i] = random(100);
  }
}

function draw() {
  background(25);
  push();
  translate(width / 2, height / 2);
  ellipse(0, 0, r0 * 2, r0 * 2);
  pop();
  movingCircle(50, width / 2, height / 2);
  
  for(let i = 0; i < c; i++){
    movingCircle(rArray[i], x, y);
  }
}

function movingCircle(r, centerX, centerY){
  translate(centerX, centerY);
  x = sin(radians(angle)) * r;
  y = cos(radians(angle)) * r;
  fill(255,255,255);
  ellipse(x, y, r * 2, r * 2);
  angle += 0.1;
  return x, y;
}
