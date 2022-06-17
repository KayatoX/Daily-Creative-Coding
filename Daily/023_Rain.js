// Reference code
// https://www.youtube.com/watch?v=S1TQCi9axzg
// https://github.com/emilyxxie/green_rain


var symbolSize = 20;
var streams = [];
function setup(){
  createCanvas(windowWidth,windowHeight);

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

function draw(){
  background(220);
  noStroke();
  for(let y = 0; y < height; y++){
    fill(30, 30, map(y, 0, height, 50, 150));
    rect(0, y, width,1);
  }
  
  streams.forEach(function(stream){
    stream.render();
  });
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
      this.value = String.fromCharCode(38632);
    }
  }

  this.rain = function(){
    this.y = (this.y >= height) ? 0 : this.y += this.speed;
  }
}

function Stream(){
  this.symbols = [];
  this.totalSymbols = round(random(5,25));
  this.speed = 3;

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
      fill(255);
      text(symbol.value, symbol.x, symbol.y);
      symbol.rain();
      symbol.setToRandomSymbol();
    });
  }
}
