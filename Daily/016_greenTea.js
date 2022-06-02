let angle;

function setup() {
  createCanvas(500, 500);
  angle = 0;
}

function draw() {
  clear();
  background(173, 216, 230);
  translate(width / 2, height / 2);
  noStroke();
  fill(210);
  rect(-125, 0, 250, 400);
  fill(220);
  circle(0, 0, 250);
  fill(200,200,100)
  circle(0, 0, 200); 
  


  
  for (let i = 0; i < 10; i++) {
    const w = map(sin(angle + 0.2 * i), -1, 1, 1, 20);
    noFill();
    stroke(210,210,110);
    strokeWeight(w);
    circle(0, 0, i * 20);
    fill(140,140,90);
    rect(-3, 0, 6, -30);
  }


  
  angle += 0.02;

}

