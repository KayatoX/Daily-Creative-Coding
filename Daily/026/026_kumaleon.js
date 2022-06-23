// CC Attribution ShareAlike
// https://openprocessing.org/sketch/824293
// by bunbunra
// kumaleon 
// https://twitter.com/kumaleon_/status/1539475977859870720

let grid;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  background(255);
  img = loadImage('kumaleon_back.png');
  
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
      fill(random(100,170),random(150,220),random(180,250));
      stroke(255);
      circle(0, 0, random(10,grid));
      pop();
    }
  }
 image(img,0,0);
}
