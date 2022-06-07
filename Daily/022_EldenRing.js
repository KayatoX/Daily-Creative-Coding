function setup() {
  createCanvas(330, 330);
  angleMode(DEGREES);
  background("#103232");
}

function draw() {
  
  
  for (let i = 0; i < 5; i++) {
    noStroke();
    fill(150,10);
    rect(random(width), random(height), 10, 10)
  }
  
  translate(width /2, height /2);
  push();
  smooth(10);
  noFill();
  stroke("#FEEE76")
  strokeWeight(1);
  strokeCap(ROUND);
  drawingContext.shadowBlur = 2;
  drawingContext.shadowColor = color("#EDB968");
  circle(0, 0,100);
  circle(0, 25,100);
  circle(-25, 50,100);
  circle(25, 50,100);
  line(0, -100, 0, 125);
  arc(0,-250, 300, 300, 60, 120, OPEN);
  arc(0,-150, 300, 300, 65, 115, OPEN);
  arc(0,-100, 300, 300, 55, 125, OPEN);
  pop();
  
 
}

