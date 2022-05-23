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

let space = 100
let n = 10000;
let r = 10;
let rand;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  rand = Math.floor(random(1,6));
  console.log(rand);
}

function draw(){
  frameRate(5);
  for (let y = 0; y < n; y++) {
    const ty = y * space;

    if (ty - r >= height) {
      break;
    }

    for (let x = 0; x < n; x++) {
      const tx = x * space;

      if (tx - r >= width) {
        break;
      }
      noStroke();
      fill(random(palette[rand]));
      rect(tx, ty, random(0,100),random(0,100));
    }
  }
}
