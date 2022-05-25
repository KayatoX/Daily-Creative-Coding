function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50);
}

function draw() {
  stroke(random(50, 255));
  strokeWeight(1);
  line(0, random(windowHeight), windowWidth, random(windowHeight));

}
