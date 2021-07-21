// declare any variables you need here.
// var x, y, etc..
// you will see setup and draw is not definied or used warnings and other warnings in your console at the bottom right. This is a glitch in how codesandbox loads the libraries and methods from p5. All is well.
/* 
This program animates the car moving on the road and goes reverse 
after reaching the end of canvas. There is a loop for creating 
the buildings and add different fill color for each loop.
*/
var car = 0;
var speed = 2;
var leftX = 130;
var rightX = 400;

function setup() {
  // create your canvas and define size here it's set to 500 x 500px you can also set any static shapes that won't need to be drawn here.
  createCanvas(500, 500);
}

function draw() {
  //call your functions and do your drawing here.
  // please erase code below once you are working.
  background(200, 255, 255);

  drawBldgs();
  moveCar();
  twoCircles();
}

// write functions here that are called in your setup or draw function. please remove this one.
//buildings
function drawBldgs() {
  for (var bldgNum = 0; bldgNum < 3; bldgNum++) {
    fill(bldgNum * 100, 60, 45);
    rect(90 + bldgNum * 100, 380, 50, 100);
  }
}

function moveCar() {
  //road
  fill(0, 0, 0);
  rect(0, 480, 500, 20);
  //car
  fill(0, 20, 255);
  noStroke();
  rect(car, 450, 100, 30); // car body bottom
  rect(car + 15, 435, 70, 20); // car body top
  fill(255, 255, 255);
  ellipse(car + 20, 480, 20, 20); // left tire
  ellipse(car + 85, 480, 20, 20); // right tire

  car = car + speed;

  if (car > 400) {
    speed = -2;
  }
  if (car < 0) {
    speed = 2;
  }
}

const twoCircles = () => {
  //sun
  fill(255, 140, 0);
  ellipse(335, 66, 70, 70);
  fill(255, 255, 255);

  //left cloud
  ellipse(leftX, 150, 126, 97);
  ellipse(leftX + 62, 150, 70, 60);
  ellipse(leftX - 62, 150, 70, 60);

  // right cloud
  ellipse(rightX, 100, 126, 97);
  ellipse(rightX + 62, 100, 70, 60);
  ellipse(rightX - 62, 100, 70, 60);
};
