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
  txt: "Test test test"
}, {
  charName: "Character 2",
  txt: "Are you sure this is a test...?"
}, {
  charName: "Protagonist",
  txt: "SEE, I told you this was a test!" // choice1A
}, {
  charName: "Protagonist",
  txt: "WHAT?? How is this not a test? Blasphemous I tell you, BLASPHEMOUS!" // choice1B
}];

// strings for the choice options
let choice1A = "Yes this is a test";
let choice1B = "No this is not a test";

// image variables
let bedroom;

/**
 * Description of preload
*/
function preload() {
  bedroom = loadImage("assets/images/bedroom.png");
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
  }
}

function title() {
  background(173, 216, 230)
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
  // scene = 1;
  background(132, 100, 98);
  mentalHealthMeter();
  storyText();
}

function mentalHealthMeter() {
  // initial mental health meter itself
  push();
  background(bedroom);
  rectMode(CORNER);
  strokeWeight(2)
  rect(20, 10, 500, 40);
  pop();
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
  
  // displays the text and the speaking character's name
  push();
  fill(0);
  textSize(30);
  noStroke();
  textWrap(WORD);
  text(sceneDialogue[scene].txt, 40, 460, 1125, 242);
  text(sceneDialogue[scene].charName, 40, 397, 300);
  pop();
}

function mousePressed() {
  if ((mouseX > 20) && (mouseY < 385) && (mouseX > 280) && (mouseY < 50))  {
    scene = 2;
  }
}