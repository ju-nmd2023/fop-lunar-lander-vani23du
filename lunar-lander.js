// I have tried to cite it as good as possible but it's a bit
// hard to keep track of things when you add, delete and more around
// things all the time.
// So I'll site chatGPT up here also: https://chat.openai.com/auth/login

//SETUP
function setup() {
  createCanvas(800, 700);
  background(235, 181, 191);
}

//VARIABLES, FUNCTIONS AND OTHER
textFont("Arial");

let spacecraftX = 400;
let spacecraftY = 50;
let velocity = 4;
const acceleration = 0.2;
let state = "start";
let gameIsRunning = false;
let buttonClicked = false;

//Help from chatGPT in the following 5 lines
function keyPressed() {
  if (state === "bunny lander" && !gameIsRunning) {
    gameIsRunning = true;
  }
}

//The following 11 codes i got help from chapGPT and Garrits button video: https://pixelkind.github.io/foundationsofprogramming/programming/11-03-exercise
function mousePressed() {
  if (
    state === "start" &&
    mouseX > 250 &&
    mouseX < 580 &&
    mouseY > 150 &&
    mouseY < 250
  ) {
    state = "bunny lander";
    background(235, 181, 191);
  } else if (state === "results") {
    state = "bunny lander";
    background(235, 181, 191);
    spacecraftX = 400;
    spacecraftY = 50;
    velocity = 5;
    screenGame();
    gameIsRunning = false;
  }
}

//Spacecraft Function
function spacecraft() {
  fill(255, 255, 255);

  //The following 25 lines i got help from chatGPT
  push();
  stroke("white");
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
  pop();
}

//Start Button Function
function startButton() {
  push();
  stroke("white");
  strokeWeight(5);
  fill(161, 194, 151);
  rect(250, 150, 330, 100, 20);
  fill(255);
  noStroke();
  textSize(30);
  text("Let's Get Started", 305, 210);
  pop();
}

//SCREEN SETUP - STARTER SCREEN
function screenStart() {
  background(235, 181, 191);
  state = "start";
  startButton();
  noStroke();

  //Planet
  push();
  noStroke();
  fill(161, 194, 151);
  rect(0, 500, 800, 200);
  pop();

  //Carrot 1
  //First two lines = green, Last two lines = orange.
  push();
  fill(73, 112, 61);
  triangle(54, 548, 71, 541, 71, 565);
  fill(224, 158, 117);
  triangle(50, 560, 80, 548, 85, 600);
  pop();

  //Carrot 2
  //First two lines = green, Last two lines = orange.
  push();
  fill(73, 112, 61);
  triangle(135, 550, 172, 563, 137, 600);
  fill(224, 158, 117);
  triangle(120, 565, 176, 584, 110, 670);
  pop();

  //Carrot 3
  //First two lines = green, Last two lines = orange.
  push();
  fill(73, 112, 61);
  triangle(640, 548, 671, 541, 665, 570);
  fill(224, 158, 117);
  triangle(632, 560, 684, 548, 685, 635);
  pop();
}

//SCREEN SETUP - GAME SCREEN
function screenGame() {
  state = "bunny lander";
  background(235, 181, 191);

  //Planet
  push();
  noStroke();
  fill(161, 194, 151);
  rect(0, 500, 800, 200);
  pop();

  //Carrot 1
  //First two lines = green, Last two lines = orange.
  push();
  fill(73, 112, 61);
  triangle(54, 548, 71, 541, 71, 565);
  fill(224, 158, 117);
  triangle(50, 560, 80, 548, 85, 600);
  pop();

  //Carrot 2
  //First two lines = green, Last two lines = orange.
  push();
  fill(73, 112, 61);
  triangle(135, 550, 172, 563, 137, 600);
  fill(224, 158, 117);
  triangle(120, 565, 176, 584, 110, 670);
  pop();

  //Carrot 3
  //First two lines = green, Last two lines = orange.
  push();
  fill(73, 112, 61);
  triangle(640, 548, 671, 541, 665, 570);
  fill(224, 158, 117);
  triangle(632, 560, 684, 548, 685, 635);
  pop();

  //Spacecraft
  spacecraft();
}

//SCREEN SETUP - WINNER SCREEN
function screenWin() {
  state = "results";
  background(73, 112, 61);

  //Win Text
  push();
  fill(255);
  textSize(30);
  text("Little Bunny, You did it!", 225, 200);
  pop();

  //Text
  push();
  fill(255);
  textSize(30);
  text("Click Anywhere to Play Again <3", 165, 250);
  pop();
}

//SCREEN SETUP - LOSE SCREEN
function screenLose() {
  state = "results";
  background(224, 158, 117);

  //Lose Text
  push();
  fill(255);
  textSize(30);
  text("To bad little Bunny, No carrots for you...", 125, 200);
  pop();

  //Text
  push();
  fill(255);
  textSize(30);
  text("Click Anywhere to Try Again...", 200, 250);
  pop();
}

//DRAW
function draw() {
  //Help from chatGPT in the following 20 lines
  if (gameIsRunning) {
    spacecraftY += velocity;
    velocity += acceleration;

    spacecraft();
    if (keyIsDown(40)) {
      velocity -= 0.6;
    } else {
      velocity += 0.5;
    }

    if (keyIsDown(37)) {
      spacecraftX = spacecraftX - 4;
    } else if (keyIsDown(39)) {
      spacecraftX = spacecraftX + 4;
    }
    if (keyIsDown(38)) {
      spacecraftY = spacecraftY - 4;
    }
  }

  //DRAW STARTER SCREEN
  if (state === "start") {
    screenStart();
    startButton();
  }

  //DRAW GAME SCREEN
  else if (state === "bunny lander") {
    screenGame();
    spacecraft();
  }

  //DRAW RESULT SCREEN
  if (spacecraftY >= 405) {
    gameIsRunning = false;
    if (velocity < 6) {
      screenWin();
    } else if (velocity > 6) {
      screenLose();
    }
  }
}
