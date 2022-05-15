const palette = ["#ED5565", "#DA4453", "#FC6E51","#E9573E","#FFCE54", "#F6BB42", "#A0D468", " #BCC152", "#48CFAD", "#3BAFDA", "#5D9CEC", "#4A89DC", "#AC92EC", "#967ADC", "#ECB7C0", "#D770AD", "#F5F7FA", "#E6E9ED", "#CCD1D9"];


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(random(palette));
}

function drawCircle() {
  fill(random(palette));
  stroke(random(palette));
  strokeWeight(0);
  circle(random(windowWidth), random(windowHeight), random(20,200));
}

function drawEllipse() {
  fill(random(palette));
  stroke(random(palette));
  strokeWeight(20);
  ellipse(random(windowWidth), random(windowHeight), random(20,200), random(20,200));
}

function drawRectangle(){
  fill(random(palette));
  stroke(random(palette));
  strokeWeight(20);
  rect(random(windowWidth), random(windowHeight), random(20,200), random(20,200))
}

function drawTriangle(){
  fill(random(palette));
  stroke(random(palette));
  strokeWeight(0);
  triangle(random(windowWidth), random(windowHeight),random(windowWidth), random(windowHeight),random(windowWidth), random(windowHeight))
}

function drawQuad(){
  fill(random(palette));
  stroke(random(palette));
  strokeWeight(0);
  quad(random(windowWidth), random(windowHeight),random(windowWidth), random(windowHeight),random(windowWidth), random(windowHeight),random(windowWidth), random(windowHeight))
}

function draw() {
//  drawCircle();
  drawEllipse();
  drawRectangle();
//  drawQuad();
//  drawTriangle();
}
