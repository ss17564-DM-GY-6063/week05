// let xPos = [0];
// let yPos = [10, 40];
// let xVel = [2,3];
// let cDiam = [40,40];

let numCircles = 10;

let myCircle = [];

function setup() {
  createCanvas(800, 600);
  for (let i=0; i < numCircles; i++){
  //   xPos.push(0);
  //   yPos.push(random(30,height - 30));
  //   xVel.push(random(2, 5));
  //   cDiam.push(random(20, 70));
  // }

  myCircle = {
    x: 0,
    y: random(30, height - 30),
    v: random(2, 5),
    d: random(30, 80)
  };
  myCircle().push(myCircle);
};
}

function draw() {
  background("lightblue");
  fill(220, 10, 100);

  ellipse(myCircle.x, myCircle.y, myCircle.d, myCircle.d);
  myCircle

  for(let i = 0; i < numCircles; i += 1){
    let myCircle = myCircle[i];

    //draw circles
    ellipse(myCircle.x, myCircle.y, myCircle.d, myCircle.d);
    myCircle.x = myCircle.x + myCircle.x;

  // if reset is needed: pick random diameter and reset x
  if (myCircle.x > width + myCircle.d) {
    myCircle.d = random(20, 75);
    myCircle.x = 0 - myCircle.d;
  }
}

}