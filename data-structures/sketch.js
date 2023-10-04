let xPos = 0;
let yPos = 150;

let xVel = 2;

let cDiam = 40;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background("lightblue");
  fill(220, 10, 100);

  // draw circle
  ellipse(xPos, yPos, cDiam, cDiam);

  // update pos
  xPos = xPos + xVel;

  // if reset is needed: pick random diameter and reset x
  if (xPos > width + cDiam) {
    cDiam = random(20, 75);
    xPos = 0 - cDiam;
  }
}
