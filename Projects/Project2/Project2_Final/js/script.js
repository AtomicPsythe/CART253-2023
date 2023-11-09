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
  charName: "Alarm",
  txt: "Pzzzz... pzzzz... pzzzz... pzz..." // scene 0
}, {
  charName: "Cleo",
  txt: "*yawns* My goodness it’s way too early to be awake for school. It doesnt help that i didnt get \n much sleep last night… I got too caught up in a novel I was reading. I guess it’s my fault for \n that but still..." // scene 1
}, {
  charName: "Cleo",
  txt: "Now the question is, should I be a good student and succumb to waking up early or just treat myself and sleep in a little bit more?" // scene 2
}, {
  charName: "Cleo",
  txt: "Meh, I’ll treat myself to a little bit of extra sleep… it shouldn’t be too bad." // scene 3
}, {
  // choice 1A
  charName: " ",
  txt: "*falls asleep for an hour*" // scene 4 
}, {
  charName: "Cleo",
  txt: "WAAH! Oh my god, I slept in for too long, oh no this is terrible I'm going to be late for class. \n Let me get out of bed and rush getting ready… maybe I have a chance of getting there on time." // scene 5
}, {
  charName: " ",
  txt: "*goes to school*" // scene 6
}, {
  charName: "Cleo",
  txt: "Damnit, class already started. Let’s hope I'm not too much of \n an interruption to the class…" // scene 7
}, {
  charName: "Teacher",
  txt: "Cleo! You’re late again for class for the third time this week! This is completely unacceptable, \n stay after class so we can have a chat about this. For now, take your seat, pay attention and \n catch up on the material you missed." // scene 8
}, {
  charName: "Sebastian",
  txt: "Hey Cleo, sorry about the teacher, he's not in a good mood, I'll give you my notes again after \n class." // scene 9
}, {
  charName: "Cleo",
  txt: "Thanks Seb, I appreciate it and thanks I'll definetly take you up on \n that offer." // scene 10
}, {
  // choice 1B
  charName: "Cleo",
  txt: "You know what, it’s fine, I’ll just start my day normally. Who knows this may be the catalyst for \n fixing my sleep schedule and me becoming a morning person?" // scene 11
}, {
  charName: "Cleo",
  txt: "Anyways enough about that, let’s get ready for school now and start with getting out of bed." // scene 12
}, {
  charName: " ",
  txt: "*goes to school*" // scene 13
}, {
  charName: " ",
  txt: "Upon arriving to school earlier than normal, I am pleasantly greeted by \n my friend Sebastian." // scene 14
}, {
  charName: "Sebastian",
  txt: "Oh hey Cleo, you’re at school early today what's up with that?" // scene 15
}, {
  charName: "Cleo",
  txt: "Hey Sebastian, nothing in particular just managed to plan myself better today!" // scene 16
}, {
  charName: "Sebastian",
  txt: "That's great to hear, I'm sure the teacher will be happy to see you on time today." // scene 17
}, {
  charName: "Cleo",
  txt: "I hope there’s some ounce within him that still likes me, but I digress you’re right." // scene 18
}, {
  charName: "Sebastian",
  txt: "Come on don't be such a Debbie downer, now let's head to class." // scene 19
}, {
  charName: "Teacher", 
  txt: "Why what a pleasant surprise it is to see you here on time today Cleo!" // scene 20
}, {
  charName: "Cleo", 
  txt: "Yea, today I woke up feeling good and actually surprised myself by coming to school on time." // scene 21
}, {
  charName: "Teacher", 
  txt: "Well I'm glad you had a lovely morning, now everyone grab your seats so we can start \n the lecture for today." // scene 22
}];

// strings for the choice options
let choice1A = "Sleep in, you deserve it";
let choice1B = "Wake up and take on the day";

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
let school;

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
  school = loadImage("assets/images/school.jpg");
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
    } 
    // else if (state === "goodEnding") {
    //   goodEnding();
    // } else if (state === "badEnding") {
    //   badEnding();
    // }
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
  endings();
}

// displays all of the necessary images including the changing character sprites and backgrounds
function images() {
  if (scene == 0 || scene == 1 || scene == 2 || scene == 3 || scene == 4 || scene == 5 || scene ==  6 || scene ==  11 || scene ==  12 || scene ==  13) {
    background(bedroom);
  }
  if (scene == 7 || scene == 8 || scene == 9 || scene == 10 || scene == 14 || scene == 15 || scene == 16 || scene == 17 || scene == 18 || scene == 19 || scene == 20 || scene == 21 || scene == 22) {
    background(school);
  }
  if (scene == 1 || scene == 2 || scene == 3) {
    image(protagNormal, 320, 100, 340, 360);
  }
  if (scene == 11 || scene == 12) {
    image(protagHappy, 320, 100, 340, 360);
  }
  if (scene == 5 || scene == 7) {
    image(protagAngry, 320, 100, 340, 360);
  }
  if (scene == 9 || scene == 10 || scene == 15 || scene == 16 || scene == 17 || scene == 18 || scene == 19 || scene == 20 || scene == 21 || scene == 22) {
    image(protagNormal, 150, 100, 340, 360);
    image(character2Normal, 500, 100, 340, 360);
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
    // goodEnding();
  }

  // if one bad choice is made
  if (mentalMeter == -1) {
    push();
    fill(173, 255, 47);
    rectMode(CORNER);
    strokeWeight(2)
    rect(20, 10, 230, 40);
    pop();
    // badEnding();
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

function endings() {
  if (scene == 9) { // good end
    noLoop();
  }
  if (scene == 22) { // bad end
    noLoop();
  }
}
// // function for the good ending (if the mental health meter is > 50%)
// function goodEnding() {
//   if (scene == 6) {
//     noLoop();
//   }
// }

// // function for the bad ending (if the mental health meter is < 50%)
// function badEnding() {
//   if (scene == 5) {
//     noLoop();
//   }
// }

function mousePressed() {
  if (mouseX >= 890 && mouseX <= 990 && mouseY >= 470 && mouseY <= 570 && scene !== 1) {
    scene += 1;
  }  

  if ((mouseX > 890) && (mouseY < 470) && (mouseX < 990) && (mouseY > 570) && scene == 0)  {
    scene += 1;
  }

  if (mouseX >= 340 && mouseX <= 740 && mouseY >= 170 && mouseY <= 200 && scene == 1) {
    scene = 3;
    mentalMeter = 1;
  }

  if (mouseX >= 390 && mouseX <= 790 && mouseY >= 273 && mouseY <= 327 && scene == 1) {
    scene = 11;
    mentalMeter = -1;
  } 
}