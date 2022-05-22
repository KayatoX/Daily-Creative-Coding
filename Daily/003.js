let x1, y1, x2, y2, t, c;
let route = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  t = 0;
  c = windowWidth / 10;
  
  for(let i =0; i < c; i++){
    route[i] = { x1: random(windowWidth), y1: random(windowHeight), x2: random(windowWidth), y2: random(windowHeight)};
  };
}

function draw() {
  t += 0.005;
  t %= 1;

  clear();
  background(255);
  
  for(let i =0; i < c; i++){
    lineCircle(route[i]);  
  }
  
}

function lineCircle(route){
  
  stroke(25);
  noFill();
  line(route.x1, route.y1, route.x2, route.y2);

  stroke(240);
  fill(25);
  circle(lerp(route.x1, route.x2, t), lerp(route.y1, route.y2, t), 10);

  noStroke();
  fill(240);
  
}
