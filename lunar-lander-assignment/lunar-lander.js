//Setup
function setup() {
  createCanvas(800, 700);
  background(235, 181, 191);
}

//Global
textFont("ITC Avant Garde Gothic Pro");

//Game Variables
let spacecraftX = 400;
let spacecraftY = 100;
let velocity = 0.5;
const acceleration = 0.1;
let state = "start";
let gameIsRunning = true;

//Key Variables
let buttonClicked = false;

//Screens Setup
function screenStart() {
  push();
  state = "start";
  startButton();

  //Planet
  noStroke();
  fill(161, 194, 151);
  rect(0, 500, 800, 200);

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
  pop();
}

//Pressing Buttons Functions
//The following 11 codes i got help from chapGPT and Garrits button video: https://pixelkind.github.io/foundationsofprogramming/programming/11-03-exercise
function mousePressed() {
  if (
    state === "start" &&
    mouseX > 250 &&
    mouseX < 580 &&
    mouseY > 150 &&
    mouseY < 250
  ) {
    buttonClicked = true;
    state = "bunny lander";
    background(235, 181, 191);
  }
}

function screenGame() {
  state = "bunny lander";
  push();
  //Planet
  noStroke();
  fill(161, 194, 151);
  rect(0, 500, 800, 200);

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

  spacecraft();
  pop();
}

function screenResult() {}

//Other Draw Functions
function startButton() {
  stroke("white");
  strokeWeight(5);
  fill(161, 194, 151);
  rect(250, 150, 330, 100, 20);
  fill(255);
  noStroke();
  textSize(30);
  text("Lets Get Startet", 307, 210);
}

function spacecraft() {
  fill(255, 255, 255);

  //The following 25 lines i got help from chatGPT
  rect(spacecraftX, spacecraftY, 60, 80);
  triangle(
    spacecraftX,
    spacecraftY,
    spacecraftX + 30,
    spacecraftY - 30,
    spacecraftX + 60,
    spacecraftY
  );

  bezier(
    spacecraftX + 50,
    spacecraftY + 70,
    spacecraftX + 60,
    spacecraftY + 30,
    spacecraftX + 80,
    spacecraftY + 90,
    spacecraftX + 60,
    spacecraftY + 100
  );
  bezier(
    spacecraftX + 10,
    spacecraftY + 70,
    spacecraftX,
    spacecraftY + 30,
    spacecraftX - 20,
    spacecraftY + 90,
    spacecraftX,
    spacecraftY + 100
  );
  fill(161, 194, 151);
  rect(spacecraftX + 10, spacecraftY + 10, 40, 30, 10);
}

/////Draw/////

function draw() {
  background(235, 181, 191);

  //Keys
  //Help from chatGPT in the following 18 lines
  if (gameIsRunning) {
    spacecraftY += velocity;
    velocity += acceleration;

    if (keyIsDown(38)) {
      velocity -= 0.4;
    } else {
      velocity += 0.4;
    }
    velocity = constrain(velocity, -4, 4);
  }

  if (keyIsDown(37)) {
    spacecraftX = spacecraftX - 3;
  } else if (keyIsDown(39)) {
    spacecraftX = spacecraftX + 3;
  }
  if (keyIsDown(38)) {
    spacecraftY = spacecraftY - 3;
  }

  //Starter Screen
  if (state === "start") {
    screenStart();
    startButton();
  }

  //Game Screen
  else if (state === "bunny lander") {
    spacecraft();
    screenGame();
  }

  //Result Screen
  else if (state === "results") {
    screenResult();
  }
}
