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

let sceneDialogue = [{
  charName: "Protagonist",
  txt: "Test test test"
}, {
  charName: "Character 2",
  txt: "Are you sure this is a test...?"
}];

// strings for the choice options
let choice1A = " ";
let choice1B = " ";

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
  createCanvas(1000, 600);
  button();
}

function button() {
  let startButton = { // the button the player presses to start the simulation
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
  // startButton.hide();
}

function reset() {
  let startButton;
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
  background(132, 100, 98);
  text("test", width/2, height/2);
  mentalHealthMeter();
  // storyText();
}

function mentalHealthMeter() {
  // initial meter itself
  push();
  background(bedroom);
  rectMode(CORNER);
  strokeWeight(2)
  rect(20, 10, 500, 40);
  pop();
}

// function storyText() {
//   //Displaying the text by using the arrays strings from earlier and also wrapping it by word so it doesn't overflow in case the lines are too long.
//   fill(0);
//   textSize(30);
//   textWrap(WORD);
//   text(sceneDialogue[scene].txt, 100, 520, 1125, 242);
//   text(sceneDialogue[scene].name, 100, 450, 300);
// }