let wheel = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  clear();
  background(144, 215, 236);
  translate(width / 2, height /2);
  
  push();
  fill(216, 221, 221);
  stroke(50);
  strokeWeight(30);
  circle(0,0,300);
  fill(50);
  noStroke();
  circle(0, 0, 30);
  pop();
  
  push();
  fill(50);
  noStroke();
  rotate(radians(wheel));
  ellipse(75,0,100,25);
  ellipse(-75,0,100,25);
  ellipse(0,75,25,100);
  ellipse(0,-75,25,100);
  wheel += 3;
  pop();
  
}
