let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50);
}

function draw() {
  rectangle();
}

function rectangle(){
      for(let x = 0 ; x < 30; x++){
      // 回転角度を1°ずつ増やす
      angle += 1;
      // 初期値の原点を中心にキャンバスを回転
      rotate(angle);
      noStroke();
      fill(random(50,250));
      rect(random(windowWidth), random(windowHeight), random(1,30), random(1,30)); 
      }
}
