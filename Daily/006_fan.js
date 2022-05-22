const c = 30;
let s = 1.07;
let a;

function setup() {
  createCanvas(500, 500);
  //ラジアン単位 → 度数
  angleMode(DEGREES);
  //rect(図形中心のx座標, 図形中心のy座標, 幅, 高さ)
  rectMode(CENTER);
  strokeWeight(2);
  a = 0;
}

function draw() {
  clear();
  background(255);
  translate(width / 2, height / 2);
  rotateRect();
  a += 0.1;
}

function rotateRect(){
  for (let i = 0; i < c; i++) {
    scale(s);
    rotate(a);
    fill(222, 80, 101);
    triangle(10, 10, 30, 30, 50, 50);
  }
}
