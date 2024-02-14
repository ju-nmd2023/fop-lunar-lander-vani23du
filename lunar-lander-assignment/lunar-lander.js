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
  carrots();
}

//Functions for each object
function planet() {
  fill(161, 194, 151);
  noStroke();
  rect(0, 500, 800, 200);
}

function carrots() {
  fill(224, 158, 117);
  triangle(50, 560, 80, 550, 85, 600);
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
