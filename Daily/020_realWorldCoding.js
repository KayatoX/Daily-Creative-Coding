let grid;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  background("#F2D691");
  for (let y = 0; y < height; y = y + grid){
    grid = random(5,10);
    strokeWeight(2);
    stroke("#CC9E62");
    line(0, random(y, y-grid), width, random(y, y+grid));
  }
}

function draw() {
  translate(width /2, height /2);
  noStroke();
  rotate(-45);
  fill(180);
  rect(-125,-145,210,300);
  fill(255);
  rect(-120,-150,210,300);
  
  fill(0);
  textSize(12);
  const someText = "function setup() \{ \n createCanvas(500, 500);\n \}\n\n function draw() \{ \n  background(115, 78, 48); \n  translate(width /2, height /2);\n\n  rotate(45);\n  noStroke();\n  fill(255);\n  rect(0,0,200,250);\n\n  fill(0);\n  textSize(12);\n  const someText = hogehoge; \n  textAlign(LEFT); \n text(sometext, 180, 330); \n\}"
  textAlign(LEFT);
  text(someText, -110, -130);
}
