//Global

//Setup
function setup() {
  createCanvas(800, 700);
}

//Draw
function draw() {
  background(235, 181, 191);
  planet();
  spacecraft();
  carrot();
}

//Functions for each object
function planet() {
  fill(161, 194, 151);
  noStroke();
  rect(0, 500, 800, 200);
}

function carrot() {
  //Carrot 1
  //Green
  fill(73, 112, 61);
  triangle(54, 548, 71, 541, 71, 565);
  //Orange
  fill(224, 158, 117);
  triangle(50, 560, 80, 548, 85, 600);

  //Carrot 2
  //Green
  fill(73, 112, 61);
  triangle(135, 550, 172, 563, 137, 600);
  //Orange
  fill(224, 158, 117);
  triangle(120, 565, 176, 584, 110, 670);

  //Carrot 3
  //Green
  fill(73, 112, 61);
  triangle(640, 548, 671, 541, 665, 570);
  //Orange
  fill(224, 158, 117);
  triangle(632, 560, 684, 548, 685, 635);
}

function spacecraft() {
  fill(255, 255, 255);

  //Body
  rect(400, 100, 60, 80);
  triangle(400, 100, 430, 70, 460, 100);
  bezier(410, 170, 400, 130, 380, 190, 400, 200);
  bezier(450, 170, 460, 130, 480, 190, 460, 200);
  fill(161, 194, 151);
  rect(410, 110, 40, 30, 10);
}
