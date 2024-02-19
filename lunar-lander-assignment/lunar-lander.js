//Global
let fuel = 100;
let spacecraftX = 400;
let state = "start";
let timer = 0;
textFont("ITC Avant Garde Gothic Pro");

//Setup
function setup() {
  createCanvas(800, 700);
  background(235, 181, 191);
}

//All Draw Functions
function planet() {
  noStroke();
  fill(161, 194, 151);
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

  //The following six lines i got some help from ChatGPT. I did it mostly myself but got some help with the spacecraftX part.
  rect(spacecraftX, 100, 60, 80);
  triangle(spacecraftX, 100, spacecraftX + 30, 70, spacecraftX + 60, 100);
  bezier(
    spacecraftX + 10,
    170,
    spacecraftX,
    130,
    spacecraftX - 20,
    190,
    spacecraftX,
    200
  );
  bezier(
    spacecraftX + 50,
    170,
    spacecraftX + 60,
    130,
    spacecraftX + 80,
    190,
    spacecraftX + 60,
    200
  );
  fill(161, 194, 151);
  rect(spacecraftX + 10, 110, 40, 30, 10);
}

/*function keyPressed() {
  if (keyIsDown(LEFT_ARROW)) {
    moveSpacecraft(-moveSpeed); // Move spacecraft left
  } else if (keyIsDown(RIGHT_ARROW)) {
    moveSpacecraft(moveSpeed); // Move spacecraft right
  }
}*/

//Screens Setup
function screenStart() {
  stroke("white");
  strokeWeight(5);
  fill(161, 194, 151);
  rect(250, 150, 330, 100, 20);
  fill(255);
  strokeWeight(2);
  textSize(30);
  text("Letz Get Startet", 307, 210);
  planet();
  carrot();
}

function screenGame() {
  text("Bunny Lander", 400, 350);
}

function screenResult() {
  text("Results", 390, 400);
}

//Draw
function draw() {
  //Starter Screen
  if (state === "start") {
    screenStart();
  }
  //Game Screen
  else if (state === "Bunny Lander") {
    screenGame();
    planet();
    carrot();
    spacecraft();
    keyPressed();
  }
  //Result Screen
  else if (state === "Results") {
    screenResult();
  }
}
