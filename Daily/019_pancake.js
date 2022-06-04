let grid;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
}

function draw() {
  background("#BCF5F6");
  
  frameRate(5);
  grid = random(5,30);
  for (let y = 0; y < height; y = y + grid) {
    grid = random(5,30);
    for (let x = 0; x < width; x = x + grid) {
      push();
      translate(x, y);
      rectMode(CENTER);
      fill(random(130,170),random(180,220),random(180,250));
      stroke(255);
      circle(0, 0, random(10,grid));
      pop();
    }
  }

  translate(width / 2, height / 2);
  noStroke();
  fill("#84D3E6");
  ellipse(0, 110, 300, 200)
  fill(255);
  ellipse(0, 100, 300, 200)
  fill("#F7D883");
  ellipse(0, 80, 250, 200)
  fill("#EF9734");
  ellipse(0, 60, 250, 160)
  fill("#F7D883");
  ellipse(0, 40, 250, 160)
  fill("#EF9734");
  ellipse(0, 20, 250, 120)
  fill("#F7D883");
  ellipse(0, 0, 250, 120)
  fill("#EF9734");
  ellipse(0, -20, 250, 80)
  fill("#E5B046");
  rect(-15, -40, 30, 30);
  fill("#F7ED10");
  rect(-10, -43, 25, 25);

}
