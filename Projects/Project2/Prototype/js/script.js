/**
 * Project 2 - Prototype
 * Foti Aivaliklis
 * 
 * The following simulation is a mental health visual novel game prototype that tackles the early stages of setting up the base code for the game.
 * This includes creating the title screen with an interactable button, establishing how to advance from one scene to another with dialogue and character sprites present, 
 * displaying the increasing and decreasing mental health bar on the top left that will vary depending on the choices the player makes and having unique choice options 
 * displayed on the screen for the player to choose, which progresses into different story paths resulting into different endings. 
 */

"use strict";

// variables for the state, scenes, charcter names, dialogue/narration text, and the start button
let state = "title" // can be title, simulation, ending1, ending2
let scene = 0 // variable for which scene you are at within the visual novel
let charName = " " // variable for the speaking character's name
let txt = " " // variable for the text (dialogue, narration)
let startButton; // variable for the start button

// variable and sets up the text being displayed on the screen for each scene
let sceneDialogue = [{
  charName: "Protagonist",
  txt: "Test test test..." // scene 0
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
let choice1A = "Yes, this is a test";
let choice1B = "No, this is not a test";

// image variables
let bedroom;
let nextButton;
let protagNormal;
let protagHappy;
let protagAngry;
let character2Normal;
let character2Surprised;
let character2Smirk;
let titleScreenImage;

// variable for the endings (mental health meter)
let mentalMeter = 0;

/**
 * Preload defines the assets' variables that will be used for the prototype (character images, backgrounds, UI assets)
*/
function preload() {
  bedroom = loadImage("assets/images/bedroom.png");
  nextButton = loadImage("assets/images/next_button.jpg");
  protagNormal = loadImage("assets/images/protag_normal.png");
  protagHappy = loadImage("assets/images/protag_happy.png");
  protagAngry = loadImage("assets/images/protag_angry.png");
  character2Normal = loadImage("assets/images/character2_normal.png");
  character2Surprised = loadImage("assets/images/character2_surprised.png");
  character2Smirk = loadImage("assets/images/character2_smirk.png");
  titleScreenImage = loadImage("assets/images/title.jpg");
}


/**
 * Creates the canvas and calls to the button function where the initial start button is created
*/
function setup() {
  // creates the canvas
  createCanvas(1000, 600);
  // calls to the function that creates the start button
  button();
}

// creates the start button on the title screen that the player presses to start the simulation
function button() {
  startButton = createButton("Start");
  startButton.size(200, 40);
  startButton.position(windowWidth/2 - startButton.width/2, windowHeight/2 - startButton.height/2);
  console.log(startButton.width);
  startButton.mousePressed(reset)
}

// removes the button once it is clicked and transitions to the simulation state
function reset() {
  simulation();
  state = "simulation";
  startButton.hide();
}

/**
 * Checks for which state is active and calls to that state's respective function to display all of its elements
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

// function that displays all of the elements on the initial title screen
function title() {
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
  text("The following visual novel is a mental health simulator where the player progresses \n through their school day, but are presented with two choices during certain scenes that \n will change the course of the story. These choices will affect the mental health meter at the \n top right of the screen that presents the character's increasing or decreasing mental health \n based on the choices made by you the player. \n So have fun, enjoy the game, and choose wisely!", width/1.99, height/1.35);
  pop();
}

// the function that calls to all of the elements for the main game itself
function simulation() {
  images();
  mentalHealthMeter();
  storyText();
  choiceOptions();
}

// displays all of the necessary images including the changing character sprites and backgrounds
function images() {
  if (scene == 0 || scene == 1 || scene == 2 || scene == 3) {
    background(bedroom);
  }
  if (scene !== 2 && scene !== 3) {
    image(protagNormal, 150, 100, 340, 360);
  }
  if (scene == 1) {
    image(character2Normal, 500, 100, 340, 360);
  }
  if (scene !== 0 && scene !== 1 && scene !== 2) {
    image(protagAngry, 150, 100, 340, 360);
    image(character2Smirk, 500, 100, 340, 360);
  }
  if (scene !== 0 && scene !== 1 && scene !== 3) {
    image(protagHappy, 150, 100, 340, 360);
    image(character2Surprised, 500, 100, 340, 360);
  }
}

// creates and displays the mental health meter on the top left of the screen
function mentalHealthMeter() {
  // the mental health meter itself
  push();
  rectMode(CORNER);
  strokeWeight(2)
  rect(20, 10, 500, 40);
  pop();

  // the mental health meter at its initial 50%
  if (mentalMeter == 0) {
    push();
    fill(173, 255, 47);
    rectMode(CORNER);
    strokeWeight(2)
    rect(20, 10, 250, 40);
    pop();
  }

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

// displays the speaking character's name, the character dialogue or narration, and the next button to progress further into the game
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

// displays the choice options and the choice boxes during the appropriate scenes 
function choiceOptions() {
  if (scene === 1) {
    // choice boxes
    push();
    fill(255, 255, 255, 180);
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

// function for the good ending (if the mental health meter is > 50%)
function goodEnding() {
  noLoop();
}

// function for the bad ending (if the mental health meter is < 50%)
function badEnding() {
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
  }

  if (mouseX >= 390 && mouseX <= 790 && mouseY >= 273 && mouseY <= 327 && scene == 1) {
    scene = 3;
    mentalMeter = -1;
  } 
}