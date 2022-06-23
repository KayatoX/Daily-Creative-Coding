// Reference code
// https://www.youtube.com/watch?v=S1TQCi9axzg
// https://github.com/emilyxxie/green_rain

var symbolSize = 15;
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
