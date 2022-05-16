const route = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  // 点の座標
  for(let i =0; i < windowWidth; i++){
    route[i] = { x: random(windowWidth), y: random(windowHeight) }
  }
  
  
  t = 0;
  i = 0;
  
}

function draw() {
  clear();
  background(25);
  strokeWeight(1);
  
  route.forEach((r) => {
    circle(r.x, r.y, 10);
  });

  // prev～nextまでを線形補間して、tの位置に円を移動させる
  const prev = route[i];
  const next = route[(i + 1) % route.length];

  const x = lerp(prev.x, next.x, t);
  const y = lerp(prev.y, next.y, t);
  

  circle(x, y, 10);

  t += 0.01;
  if (t > 1) {
    t = 0;
    i++;
    i %= route.length;
  }
}
