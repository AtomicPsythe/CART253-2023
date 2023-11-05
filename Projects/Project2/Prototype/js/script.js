/**
 * Project 2 - Prototype
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let state = "title" // can be title, simulation, ending1, ending2
let scene = 0 // variable for which scene you are at within the visual novel
let charName = " " // variable for the speaking character's name
let txt = " " // variable for the text (dialogue, narration)
let startButton; // variable for the start button

let sceneDialogue = [{
  charName: "Protagonist",
  txt: "Test test test" // scene 0
}, {
  charName: "Character 2",
  txt: "Are you sure this is a test...?" // scene 1
}, {
  charName: "Protagonist",
  txt: "SEE, I told you this was a test!" // scene 2, choice1A
}, {
  charName: "Protagonist",
  txt: "WHAT?? How is this not a test? Blasphemous I tell you, BLASPHEMOUS!" // scene 3, choice1B
}];

// strings for the choice options
let choice1A = "Yes this is a test";
let choice1B = "No this is not a test";

// image variables
let bedroom;
let nextButton;
let protagNormal;
let protagHappy;
let protagAngry;
let titleScreenImage;

// variable for the endings (mental health meter)
let mentalMeter;

/**
 * Preload defines the assets' variables that will be used for the prototype (character images, backgrounds, UI assets)
*/
function preload() {
  bedroom = loadImage("assets/images/bedroom.png");
  nextButton = loadImage("assets/images/next_button.jpg");
  protagNormal = loadImage("assets/images/protag_normal.png");
  protagHappy = loadImage("assets/images/protag_happy.png");
  protagAngry = loadImage("assets/images/protag_angry.png");
  titleScreenImage = loadImage("assets/images/title.jpg");
}


/**
 * Description of setup
*/
function setup() {
  // creates the canvas
  createCanvas(1000, 600);
  // creates the button
  button();
}

function button() {
  startButton = { // the button the player presses to start the simulation
    x: 360,
    y: 350,
    size: 100,
    height: 200, 
    width: 200
  } 
  startButton = createButton("Start");
  startButton.position(700, 350);
  startButton.size(150);
  startButton.mousePressed(reset)
}

function reset() {
  simulation();
  state = "simulation";
  startButton.hide();
}

/**
 * Description of draw()
*/
function draw() {
  if (state === `title`) {
      title();
    } else if (state === `tutorial`) {
      tutorial();
    } else if (state === `simulation`) {
      simulation();
    } else if (state === "goodEnding") {
      goodEnding();
    } else if (state === "badEnding") {
      badEnding();
    }
}

function title() {
  // background(173, 216, 230)
  background(titleScreenImage);
  // title 
  push();
  fill(255);
  stroke(0, 0, 139);
  strokeWeight(5);
  rect(230, 80, 540, 100);
  pop();
  push();
  textSize(45);
  fill(179, 98, 0);
  textAlign(CENTER, CENTER);
  text("Visual Novel Prototype", width/2, height/4.5);
  pop();
  // instructions
  push();
  fill(255);
  stroke(0, 0, 139);
  strokeWeight(5);
  rect(215, 380, 580, 130);
  pop();
  push();
  textSize(20);
  fill(179, 98, 0);
  textAlign(CENTER, CENTER);
  textSize(14);
  text("The following visual novel is a mental health simulator where the player progresses \n through their school day, but are presented with two choices during certain scenes that \n will change the course of the story, which will affect the mental health meter at the \n top right of the screen that presents the character's increasing or decreasing mental health \n based on the choices made by you the player. \n So have fun, enjoy the game, and choose wisely!", width/1.99, height/1.35);
  pop();
}

function simulation() {
  background(132, 100, 98);
  images();
  mentalHealthMeter();
  storyText();
  choiceOptions();
}

function images() {
  image(protagHappy, 340, 100, 340, 360);
  // if (scene != 2 && scene != 3) {
  //   image(protagHappy, 340, 100, 340, 360);
  // }
}

function mentalHealthMeter() {
  // initial mental health meter itself
  push();
  background(bedroom);
  rectMode(CORNER);
  strokeWeight(2)
  rect(20, 10, 500, 40);
  pop();
  push();
  fill(173, 255, 47);
  rectMode(CORNER);
  strokeWeight(2)
  rect(20, 10, 250, 40);
  pop();

  // if one good choice is made
  if (mentalMeter == 1) {
    push();
    fill(173, 255, 47);
    rectMode(CORNER);
    strokeWeight(2)
    rect(20, 10, 270, 40);
    pop();
    goodEnding();
  }

  // if one bad choice is made
  if (mentalMeter == -1) {
    push();
    fill(173, 255, 47);
    rectMode(CORNER);
    strokeWeight(2)
    rect(20, 10, 230, 40);
    pop();
    badEnding();
  }
}

function storyText() {
  // displays both the text box for the character's dialogue and the box for the speaking character's name
  push();
  fill(255);
  stroke(0);
  strokeWeight(2);
  rect(20, 440, 960, 150);
  pop();
  push();
  fill(255);
  stroke(0);
  strokeWeight(2);
  rect(20, 385, 280, 50);

  // displays the arrow you click to continue in the story
  image(nextButton, 890, 470, 80, 110);
  
  // displays the text and the speaking character's name
  push();
  fill(0);
  textSize(20);
  noStroke();
  textWrap(WORD);
  text(sceneDialogue[scene].txt, 40, 460, 1125, 242);
  text(sceneDialogue[scene].charName, 40, 397, 300);
  pop();
}

function choiceOptions() {
  if (scene === 1) {
    // choice boxes
    push();
    fill(255);
    rectMode(CENTER);
    strokeWeight(2);
    rect(width/2, 170, 350, 55);
    rect(width/2, 300, 350, 55);
    pop();

    // choice options themselves
    push();
    fill(0);
    textAlign(CENTER);
    textSize(18);
    noStroke();
    text(choice1A, width/2, 175);
    text(choice1B, width/2, 305);
    pop();
  }
}

function goodEnding() {
  // background(255, 255, 0);
  image(protagHappy, 340, 100, 340, 360);
  noLoop();
}

function badEnding() {
  // background(128, 0, 0);
  noLoop();
}

function mousePressed() {
  if (mouseX >= 890 && mouseX <= 990 && mouseY >= 470 && mouseY <= 570 && scene !== 1) {
    scene += 1;
  }  

  if ((mouseX > 890) && (mouseY < 470) && (mouseX < 990) && (mouseY > 570) && scene == 0)  {
    scene += 1;
  }

  if (mouseX >= 340 && mouseX <= 740 && mouseY >= 170 && mouseY <= 200 && scene == 1) {
    scene = 2;
    mentalMeter = 1;
    image(protagHappy, 340, 100, 340, 360);
  }

  if (mouseX >= 390 && mouseX <= 790 && mouseY >= 273 && mouseY <= 327 && scene == 1) {
    scene = 3;
    mentalMeter = -1;
    image(protagAngry, 340, 100, 340, 360);
  } 
}