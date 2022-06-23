// Reference code
// https://www.youtube.com/watch?v=S1TQCi9axzg
// https://github.com/emilyxxie/green_rain
// Kumaleon Sample
// https://openprocessing.org/sketch/1599946
// https://docs.kumaleon.com/coding-challenge


var symbolSize = 15;
var streams = [];

// options
kumaleon.options = {
  onInit: () => {
    // called when the app is initialized
  },

  onUpdate: () => {
    // called in requestAnimationFrame loop
  },

  onResize: () => {
    // called when window resized
  },
}

// p5 sample code
function setup() {
	// pass a canvas element to app by kumaleon.setCanvas
  kumaleon.setCanvas(createCanvas(windowWidth, windowHeight).canvas)
  background(255)
  noFill()
	var x =0;
  for (var i=0; i <= width / symbolSize; i++){
    var stream = new Stream();
    stream.generateSymbols(x,random(-700,0));
    streams.push(stream);
    x += symbolSize;
  }
  //textFont('Consolas');
  textSize(symbolSize);
}

function drawPolygon(x, y, radius) {
  const r = (Math.random() * 0.4 + 0.6) * radius
  const offsetX = x + (Math.random() * 2 - 1) * r
  const offsetY = y + (Math.random() * 2 - 1) * r
  const angle = Math.random() * PI * 2
  const n = 3 + Math.floor(Math.random() * 4)
  const v = createVector(r, 0)
  v.rotate(angle)
  const angleUnit = (PI * 2) / n
  for (let i = 0; i < n; i++) {
    const fromX = v.x
    const fromY = v.y
    v.rotate(angleUnit)
    line(offsetX + fromX, offsetY + fromY, offsetX + v.x, offsetY + v.y)
  }
}

function draw() {
	background(random(0,50));
	stroke(random(50, 255));
  strokeWeight(1);
  line(0, random(windowHeight), windowWidth, random(windowHeight));
	line(0, random(windowHeight), windowWidth, random(windowHeight));
	line(0, random(windowHeight), windowWidth, random(windowHeight));
	
  streams.forEach(function(stream){
    stream.render();
  });
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
  background(255)
}

function SymbolText(x,y,speed,first){
  this.x = x;
  this.y = y;
  this.value;

  this.speed = speed;
  this.first = first;

  this.switchInterval = floor(random(3,7));

  this.setToRandomSymbol = function(){
    if(frameCount % this.switchInterval == 0){
      this.value = String.fromCharCode(
        0x30A1 + round(random(0, 16*5+6))
      );
    }
  }

  this.rain = function(){
    this.y = (this.y >= height) ? 0 : this.y += this.speed;
  }
}

function Stream(){
  this.symbols = [];
  this.totalSymbols = round(random(5,50));
  this.speed = random(5, 15);

  this.generateSymbols = function(x,y){
    var first = round(random(0,4)) == 1;
    for(var i = 0; i< this.totalSymbols -1; i++){
      symbol = new SymbolText(x,y,this.speed,first);
      symbol.setToRandomSymbol();
      this.symbols.push(symbol);
      y -= symbolSize;
      first = false;
    }
  }

  this.render = function(){
    this.symbols.forEach(function(symbol){
      if (symbol.first){
        fill(180,255,180);
      }else{
        fill(0,255,70);
      }
      text(symbol.value, symbol.x, symbol.y);
      symbol.rain();
      symbol.setToRandomSymbol();
    });
  }
}
