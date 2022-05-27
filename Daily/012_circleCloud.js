
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  background(255);
}


function draw() {
  push();
    let angle = frameCount / 10;
    let r = 180 - frameCount / 2;
    let currentScale = 1-frameCount/300
    
    fill(random(50,255))
    translate(windowWidth / 2, windowHeight / 2);
    scale(currentScale);
    rotate(angle);
    translate(r, 0);
	  circle(0,0,150)	  
  pop();

}
