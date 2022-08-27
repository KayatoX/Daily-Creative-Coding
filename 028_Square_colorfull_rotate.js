// angleMode(DEGREES)/push()/pop()_rotate
// CC Attribution ShareAlike
// https://openprocessing.org/sketch/824293
// by bunbunra

const palette = [
                  ["#48639C",
                   "#4c4c9d",
                   "#712F79",
                   "#976391",
                   "#F7996E"
                  ],
                  ["#7fb069",
                   "#FFFBBD",
                   "#E6AA68",
                   "#CA3C25",
                   "#1D1A05"
                  ],
                  ["#C52233",
                   "#A51C30",
                   "#A7333F",
                   "#74121D",
                   "#580C1F"
                  ],
                  ["#D7FFF1",
                   "#AAFCB8",
                   "#8CD790",
                   "#77AF9C",
                   "#285943"
                  ],
                  ["#241E4E",
                   "#960200",
                   "#CE6C47",
                   "#FFD046",
                   "#EADAA2"
                  ],
                  ["#60463B",
                   "#856A5D",
                   "#CCC9E7",
                   "#6C6F7D",
                   "#2E3138"
                  ]
                ];

let grid;
let rand;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  grid = 50;
  background(255);
  rand = Math.floor(random(1,6));
}

function draw() {
  frameRate(10);
  for (let y = 0; y < height; y = y + grid) {
    for (let x = 0; x < width; x = x + grid) {
      push();
      translate(x, y);
      rotate(45);
      rectMode(CENTER);
      stroke(random(palette[rand]));
      strokeWeight(random(0,1));
      noFill();
      square(0, 0, random(1,grid-15));
      pop();
    }
  }
}
