/**
 * Project 2 - Final Project
 * Foti Aivaliklis
 * 
 * The following simulation is a mental health visual novel game that tackles the early stages of setting up the base code for the game.
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
  txt: "*yawns* My goodness it’s way too early to be awake for school. It doesnt help that I didn't get \n much sleep last night… I got too caught up in a novel I was reading. I guess it’s my fault for \n that but still..." // scene 1
}, {
  charName: "Cleo",
  txt: "Now the question is, should I be a good student and succumb to waking up early or just treat myself and sleep in a little bit more?" // scene 2
}, {
  // choice 1A
  charName: "Cleo",
  txt: "Meh, I’ll treat myself to a little bit of extra sleep… it shouldn’t be too bad." // scene 3
}, {
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
}, {
  // normal story again
  charName: " ",
  txt: "*bell rings*" // scene 23
}, {
  charName: "Cleo",
  txt: "Finally, class is done. That felt much harder to get through than usual." // scene 24
}, {
  charName: "Sebastian",
  txt: "Yea it was alright, I enjoyed it, but then again I really like this class so..." // scene 25
}, {
  charName: "Cleo",
  txt: "Yea that is true." // scene 26
}, {
  charName: "Sebastian",
  txt: "Anyways, enough about that, what do you have planned for the rest of your day, Cleo?" // scene 27
}, {
  // choice2A
  charName: "Sebastian",
  txt: " Mhm, that sounds like the smart thing to do, I assume then that you have a good amount \n of work to complete right?" // scene 28
}, {
  charName: "Cleo",
  txt: "Yea, missing classes a lot earlier this week doesn’t help with that either let’s just say that…" // scene 29
}, {
  charName: "Sebastian",
  txt: "I can only imagine. But, I won’t keep you hanging any longer, good luck with those assignments \n and hey if you’re ever feeling down or not at your peak, don’t hesitate to reach out to me. \n I wanna make sure you’re doing well." // scene 30
}, {
  charName: "Cleo",
  txt: "Thanks and will do, Sebastian, thank you for caring so much about me." // scene 31
}, {
  charName: "Sebastian",
  txt: "Of course Cleo, now go on, your homework awaits haha." // scene 32
}, {
  charName: "Cleo",
  txt: "Yes yes, I will professor Seb haha." // scene 33
}, {
  charName: " ",
  txt: "*proceeds to go home*" // scene 34
}, {
  // choice2B
  charName: "Sebastian",
  txt: "Oh would you like to hang out together? I also don’t happen to have any more \n classes for the rest of the day, plus we haven’t hung out together in a fair bit." // scene 35
}, {
  charName: "Cleo",
  txt: " Sure yea that would be great, we can go to the mall for a couple of hours, hit some \n stores and get some food if thats cool?" // scene 36
}, {
  charName: "Sebastian",
  txt: "Yep, that works for me!" // scene 37
}, {
  charName: " ",
  txt: "*the two of you proceed to leave school and make your way to the mall where you do exactly \n as you said*" // scene 38
}, {
  charName: "Sebastian",
  txt: "Wow today was so much fun, I didn’t even know that half of these stores even existed here." // scene 39
}, {
  charName: "Cleo",
  txt: "Yea same I had a lot of fun as well, we should do this again sometime." // scene 40
}, {
  charName: "Sebastian",
  txt: "Agreed I’d love that, but since it is getting late I’m gonna head back home, if you’d \n like to you are more than welcome to come sleepover. My older sister is out of town right now, \n and my mom hasn’t seen you for a while, I’m sure she’d be happy to see you again." // scene 41
}, {
  // choice 3A
  charName: "Sebastian",
  txt: "That’s fair, I respect your decision, besides I’m sure you have some stuff to do \n before the end of the day. In that case, I’ll be heading out, thanks again for today Cleo!" // scene 42
}, {
  charName: "Cleo",
  txt: "Bye Seb, I had loads of fun as well!" // scene 43
}, {
  charName: " ",
  txt: "*the two of you part ways and you head home*" // scene 44
}, {
  charName: "Cleo",
  txt: "Hey mom, I’m home." // scene 45
}, {
  charName: "Mom",
  txt: "Welcome home Cleo, how was your day? Did you show up to class on time?" // scene 46
}, {
  // choice4A
  charName: "Mom",
  txt: "Oh well, your school called me and said that you were late actually. I don’t appreciate \n lies Cleo." // scene 47
}, {
  charName: "Cleo",
  txt: "Sorry mom..." // scene 48
}, {
  charName: "Mom",
  txt: "Sorry is not going to cut it, you need to do better and be better!" // scene 49
}, {
  charName: "Cleo",
  txt: "I’m trying my best ok, ugh." // scene 50
}, {
  charName: "Mom",
  txt: "Just go to your room." // scene 51
}, {
  charName: " ",
  txt: "*goes to your room*" // scene 52
}, {
  // choice4B
  charName: "Mom",
  txt: "Oh well, your school called and told me you were late. But, I do appreciate your honesty \n on that. So thank you for opening up to me. " // scene 53
}, {
  charName: "Cleo",
  txt: "Yea sorry about that, I’m trying to get better." // scene 54
}, {
  charName: "Mom",
  txt: "Well if you ever need help on anything, just know that I am here for you no matter what." // scene 55
}, {
  charName: "Cleo",
  txt: "Yes mom, thank you." // scene 56
}, {
  charName: "Mom",
  txt: "You’re welcome sweetie." // scene 57
}, {
  charName: " ",
  txt: "*goes to room and decide to do some homework before bed*" // scene 58
}, {
  charName: "Cleo",
  txt: "Phew, now that that’s done it’s finally time to unwind for the evening, but hmm what to \n do?" // scene 59
}, {
  // choice5A
  charName: "Cleo",
  txt: "After today’s long day, I think getting some good rest will do me some good." // scene 60
}, {
  charName: "Cleo",
  txt: "Today’s been a rollercoaster of emotions, but thank YOU, the player, for tagging along \n with me through today." // scene 61
}, {
  charName: "Cleo",
  txt: "Always remember if you are experiencing anything overwhelming or feeling down that \n there are always people that you can reach out to for help and or resources that can help you \n get better! Never give up!" // scene 62
  // STORY END
}, {
  // choice5B
  charName: "Cleo",
  txt: "Honestly, I’m kind of in the mood to continue my book, it’s been at the back of my mind \n all day. A couple pages won’t hurt" // scene 63
},{
  charName: " ",
  txt: "*proceeds to read and finish said book for 2 hours*" // scene 64
}, {
  charName: "Cleo",
  txt: "Wow that was a great book, did not expect it to end that way. What time is it now \n anyways… 3 AM???? Oh no, I’m going to be so dead tomorrow for school, ugh I should have \n went to sleep. It’s fine I’ll just deal with it… " // scene 65
}, {
  charName: "Cleo",
  txt: "Let’s hope tomorrow goes better." // scene 66
  // STORY END
}, {
  // choice 3B
  charName: "Sebastian",
  txt: "Sweet, let's head over to my place then to get set up." // scene 67
}, {
  charName: " ",
  txt: "*the two of you head over to Sebastian's house for the sleepover*" // scene 68
}, {
  charName: "Sebastian",
  txt: "Hey mom, I'm home, and Cleo's here as well to sleep over." // scene 69
}, {
  charName: "Sebastian's mom",
  txt: "Welcome home sweetie, and hello Cleo you're welcome to stay for as long as you like \n it's just me and Sebastian here tonight!" // scene 70
}, {
  charName: "Cleo",
  txt: "Thank you ma'am!" // scene 71
}, {
  charName: " ",
  txt: "*the two of you go upstairs to Sebastian's room and hang out for the evening*" // scene 72
}, {
  charName: "Sebastian",
  txt: "Hey Cleo, I forgot to ask did you complete the assignment that was due tonight?" // scene 73
}, {
  charName: "Cleo",
  txt: "Assignment? What assignment?" // scene 74
}, {
  charName: "Sebastian",
  txt: "Our math one? It just hit midnight. Did you not do it...?" // scene 75
}, {
  charName: "Cleo",
  txt: "Oh my god no??? Ugh I was supposed to do it today, but got sidetracked." // scene 76
}, {
  charName: "Sebastian",
  txt: "Oh no, I'm sorry to hear that... maybe you can talk to the professor about it." // scene 77
}, {
  charName: "Cleo",
  txt: "Yea maybe... but it's fine... I think I'll just head to sleep." // scene 78
}, {
  charName: "Sebastian",
  txt: "Sounds good to me, sorry again for that." // scene 79
}, {
  charName: "Cleo",
  txt: "It's ok, thanks for your sympathy." // scene 80
  // STORY END
}];

// strings for the choice options
// choice 1
let choice1A = "Sleep in, you deserve it";
let choice1B = "Wake up and take on the day";

// choice 2
let choice2A = "I was thinking of going home early to get some assignments done";
let choice2B = "I was thinking, maybe we can hang out together now that class is done?";

// choice 3
let choice3A = "Go home, it’s late and you’re getting tired.";
let choice3B = "Go to Sebastian’s house for a sleepover, embrace the fun.";

// choice 4
let choice4A = "Lie";
let choice4B = "Tell the truth";

// choice 5
let choice5A = "Go to sleep early";
let choice5B = "Stay up continuing to read your book";

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
let mall; 
let sebHouse;
let sebRoom;
let bedroomNight;
let cleoHouse;

// overlay images
let badChoice;

// variable for the endings (mental health meter)
let mentalMeter = 0;

// fade variable
let fade = 0;
let fadeAmount = 1;

// Preload defines the assets' variables that will be used for the prototype (character images, backgrounds, UI assets)
function preload() {
  bedroom = loadImage("assets/images/bedroom.jpg");
  nextButton = loadImage("assets/images/next_button.jpg");
  protagNormal = loadImage("assets/images/protag_normal.png");
  protagHappy = loadImage("assets/images/protag_happy.png");
  protagAngry = loadImage("assets/images/protag_angry.png");
  character2Normal = loadImage("assets/images/character2_normal.png");
  character2Surprised = loadImage("assets/images/character2_surprised.png");
  character2Smirk = loadImage("assets/images/character2_smirk.png");
  titleScreenImage = loadImage("assets/images/title.jpg");
  school = loadImage("assets/images/school.jpg");
  badChoice = loadImage("assets/images/bad_overlay_40.png");
  mall = loadImage("assets/images/mall.jpg");
  sebHouse = loadImage("assets/images/seb_house.jpg");
  sebRoom = loadImage("assets/images/seb_room.jpg");
  bedroomNight = loadImage("assets/images/bedroom_night.jpg");
  cleoHouse = loadImage("assets/images/cleo_house.jpg");
}

// Creates the canvas and calls to the button function where the initial start button is created
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

// Checks for which state is active and calls to that state's respective function to display all of its elements
function draw() {
  if (state === `title`) {
      title();
    } else if (state === `tutorial`) {
      tutorial();
    } else if (state === `simulation`) {
      simulation();
    } 
    else if (state === "goodEnding") {
      goodEnding();
    } else if (state === "badEnding") {
      badEnding();
    }
    else if (state === "trueEnding") {
      trueEnding();
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
  endings();
}

// displays all of the necessary images including the changing character sprites and backgrounds
function images() {
  // backgrounds
  if (scene == 0 || scene == 1 || scene == 2 || scene == 3 || scene == 4 || scene == 5 || scene ==  6 || scene ==  11 || scene ==  12 || scene ==  13) {
    background(bedroom);
  }
  if (scene == 7 || scene == 8 || scene == 9 || scene == 10 || scene == 14 || scene == 15 || scene == 16 || scene == 17 || scene == 18 || scene == 19 || scene == 20 || scene == 21 || scene == 22) {
    background(school);
  }
  if (scene == 23 || scene == 24 || scene == 25 || scene == 26 || scene == 27 || scene == 28 || scene == 29 || scene == 30 || scene == 31 || scene == 32 || scene == 33 || scene == 34 || scene == 35 || scene == 36 || scene == 37 || scene == 38) {
    background(school);
  }
  if (scene == 39 || scene == 40 || scene == 41 || scene == 42 || scene == 43 || scene == 44 || scene == 67 || scene == 68) {
    background(mall);
  }
  if (scene == 45 || scene == 46 || scene == 47 || scene == 48 || scene == 49 || scene == 50 || scene == 51 || scene == 52 || scene == 53 || scene == 54 || scene == 55 || scene == 56 || scene == 57 || scene == 58) {
    background(cleoHouse);
  }
  if (scene == 59 || scene == 60 || scene == 61 || scene == 62 || scene == 63 || scene == 64 || scene == 65 || scene == 66) {
    background(bedroomNight);
  }
  if (scene == 69 || scene == 70 || scene == 71 || scene == 72) {
    background(sebHouse);
  }
  if (scene == 73 || scene == 74 || scene == 75 || scene == 76 || scene == 77 || scene == 78 || scene == 79 || scene == 80) {
    background(sebRoom);    // scene >=73 && scene <= 80 
  }
  
  // character spites + expressions
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
  if (scene == 24) {
    image(protagNormal, 150, 100, 340, 360);
  }
  if (scene == 25 || scene == 26 || scene == 27 || scene == 28 || scene == 29 || scene == 30 || scene == 31 || scene == 32 || scene == 33 || scene == 34 || scene == 35 || scene == 36 || scene == 37 || scene == 38) {
    image(protagNormal, 150, 100, 340, 360);
    image(character2Normal, 500, 100, 340, 360);
  }
  if (scene == 39 || scene == 40 || scene == 41 || scene == 43 || scene == 67 || scene == 69 || scene == 70) {
    image(character2Smirk, 150, 100, 340, 360);
  }
  if (scene == 42 || scene == 73 || scene == 74 || scene == 75 || scene == 76 || scene == 77 || scene == 78 || scene == 79 || scene == 80) {
    image(character2Normal, 150, 100, 340, 360);
  }
  if (scene == 40 || scene == 41 || scene == 42 || scene == 43 || scene == 67 || scene == 71) {
    image (protagHappy, 500, 100, 340, 360);
  }
  if (scene == 45 || scene == 46 || scene == 47 || scene == 49 || scene == 50 || scene == 53 || scene == 54 || scene == 55 || scene == 57) {
    image(protagNormal, 150, 100, 340, 360);
  }
  if (scene == 48 || scene == 51) {
    image(protagAngry, 150, 100, 340, 360);
  }
  if (scene == 56) {
    image(protagHappy, 150, 100, 340, 360);
  }
  if (scene == 59 || scene == 60 || scene == 61 || scene == 62 || scene == 63 || scene == 65) {
    image(protagHappy, 320, 100, 340, 360);
  }
  if (scene == 66) {
    image(protagNormal, 320, 100, 340, 360);
  }
  if (scene == 74 || scene == 76 || scene == 77 || scene == 78 || scene == 79 || scene == 80) {
    image(protagAngry, 500, 100, 340, 360);
  }

  // overlay effects
  if (scene == 4 || scene == 5 || scene == 6 || scene == 7 || scene == 8 || scene == 9 || scene == 10) {
    push();
    image(badChoice, 0, 0, 1000, 600);
    tint(badChoice, 0, 0, 0, 125);
    pop();
    // tint(0, 0, 0, 20); does a super cool fade to black thing
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
  }

  // if two good choices are made
  if (mentalMeter == 2) {
    push();
    fill(173, 255, 47);
    rectMode(CORNER);
    strokeWeight(2)
    rect(20, 10, 290, 40);
    pop();
  }

  // if two good choices are made
  if (mentalMeter == 3) {
    push();
    fill(173, 255, 47);
    rectMode(CORNER);
    strokeWeight(2)
    rect(20, 10, 310, 40);
    pop();
  }

  // if two good choices are made
  if (mentalMeter == 4) {
    push();
    fill(173, 255, 47);
    rectMode(CORNER);
    strokeWeight(2)
    rect(20, 10, 330, 40);
    pop();
  }

  // if two good choices are made
  if (mentalMeter == 5) {
    push();
    fill(173, 255, 47);
    rectMode(CORNER);
    strokeWeight(2)
    rect(20, 10, 350, 40);
    pop();
  }

  // if one bad choice is made
  if (mentalMeter == -1) {
    push();
    fill(173, 255, 47);
    rectMode(CORNER);
    strokeWeight(2)
    rect(20, 10, 230, 40);
    pop();
  }

    // if one bad choice is made
    if (mentalMeter == -2) {
      push();
      fill(173, 255, 47);
      rectMode(CORNER);
      strokeWeight(2)
      rect(20, 10, 210, 40);
      pop();
    }

    // if one bad choice is made
    if (mentalMeter == -3) {
      push();
      fill(173, 255, 47);
      rectMode(CORNER);
      strokeWeight(2)
      rect(20, 10, 190, 40);
      pop();
    }

    // if one bad choice is made
    if (mentalMeter == -4) {
      push();
      fill(173, 255, 47);
      rectMode(CORNER);
      strokeWeight(2)
      rect(20, 10, 170, 40);
      pop();
    }

    // if one bad choice is made
    if (mentalMeter == -5) {
      push();
      fill(173, 255, 47);
      rectMode(CORNER);
      strokeWeight(2)
      rect(20, 10, 150, 40);
      pop();
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
  text(sceneDialogue[scene].charName, 40, 400, 300);
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
  if (scene == 27) {
    push();
    fill(255, 255, 255, 180);
    rectMode(CENTER);
    strokeWeight(2);
    rect(width/2, 170, 540, 55);
    rect(width/2, 300, 600, 55);
    pop();

    // choice options themselves
    push();
    fill(0);
    textAlign(CENTER);
    textSize(18);
    noStroke();
    text(choice2A, width/2, 175);
    text(choice2B, width/2, 305);
    pop();
  }
  if (scene == 41) {
    push();
    fill(255, 255, 255, 180);
    rectMode(CENTER);
    strokeWeight(2);
    rect(width/2, 170, 540, 55);
    rect(width/2, 300, 600, 55);
    pop();

    // choice options themselves
    push();
    fill(0);
    textAlign(CENTER);
    textSize(18);
    noStroke();
    text(choice3A, width/2, 175);
    text(choice3B, width/2, 305);
    pop();
  }
  if (scene == 46) {
    push();
    fill(255, 255, 255, 180);
    rectMode(CENTER);
    strokeWeight(2);
    rect(width/2, 170, 540, 55);
    rect(width/2, 300, 600, 55);
    pop();

    // choice options themselves
    push();
    fill(0);
    textAlign(CENTER);
    textSize(18);
    noStroke();
    text(choice4A, width/2, 175);
    text(choice4B, width/2, 305);
    pop();
  }
  if (scene == 59) {
    push();
    fill(255, 255, 255, 180);
    rectMode(CENTER);
    strokeWeight(2);
    rect(width/2, 170, 540, 55);
    rect(width/2, 300, 600, 55);
    pop();

    // choice options themselves
    push();
    fill(0);
    textAlign(CENTER);
    textSize(18);
    noStroke();
    text(choice5A, width/2, 175);
    text(choice5B, width/2, 305);
    pop();
  }
}

function endings() {
  if (scene == 62 || scene == 66 || scene == 80 & mentalMeter >= 1) {
    goodEnding();
    noLoop();
  }
  else if (scene == 62 || scene == 66 || scene == 80 & mentalMeter <= -1) {
    badEnding();
    noLoop();
  }
  else if (scene == 62 || scene == 66 || scene == 80 & mentalMeter == 0) {
    trueEnding();
    noLoop();
  }
}
// function for the good ending (if the mental health meter is > 50%)
function goodEnding() {
  background(0, 163, 108);
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
  text("GOOD ENDING", width/2, height/4.5);
  pop();
}

// function for the bad ending (if the mental health meter is < 50%)
function badEnding() {
  background(255, 87, 51);
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
  text("BAD ENDING", width/2, height/4.5);
  pop();
}

// function for the true ending (if the mental health meter is = 50%)
function trueEnding() {
  background(255, 195, 0);
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
  text("BAD ENDING", width/2, height/4.5);
  pop();
}

function mousePressed() {
  // beginning
  if (mouseX >= 890 && mouseX <= 990 && mouseY >= 470 && mouseY <= 570 && scene !== 1 && scene !== 27 && scene !== 41 && scene !== 46 && scene !== 59) {
    scene += 1;
    console.log(scene);
  }  

  // choice 1
  if (mouseX >= 340 && mouseX <= 740 && mouseY >= 170 && mouseY <= 200 && scene == 1) {
    scene = 3;
    mentalMeter = -1;
  }

  // makes sure that upon clicking the bad choice option it does not play/display the good choice dialogue
  if (mouseX >= 890 && mouseX <= 990 && mouseY >= 470 && mouseY <= 570 && scene == 10) {
    scene = 23;
  }

  if (mouseX >= 390 && mouseX <= 790 && mouseY >= 273 && mouseY <= 327 && scene == 1) {
    scene = 11;
    mentalMeter = 1;
  }

  // choice 2
  if (mouseX >= 390 && mouseX <= 790 && mouseY >= 273 && mouseY <= 327 && scene == 27 && mentalMeter == 1) {
    scene = 28;
    mentalMeter = 2;
  }

  if (mouseX >= 390 && mouseX <= 790 && mouseY >= 273 && mouseY <= 327 && scene == 27 && mentalMeter == -1) {
    scene = 35;
    mentalMeter = 0;
  }

  if (mouseX >= 340 && mouseX <= 740 && mouseY >= 170 && mouseY <= 200 && scene == 27 && mentalMeter == 1) {
    scene = 28;
    mentalMeter = 0;
  } 

  if (mouseX >= 340 && mouseX <= 740 && mouseY >= 170 && mouseY <= 200 && scene == 27 && mentalMeter == -1) {
    scene = 35;
    mentalMeter = -2;
  } 

  // choice 3
  if (mouseX >= 390 && mouseX <= 790 && mouseY >= 273 && mouseY <= 327 && scene == 41 && mentalMeter == 1) {
    scene = 42;
    mentalMeter = 2;
  }

  if (mouseX >= 340 && mouseX <= 740 && mouseY >= 273 && mouseY <= 327 && scene == 41 && mentalMeter == -1) {
    scene = 67;
    mentalMeter = 0;
  }

  if (mouseX >= 340 && mouseX <= 740 && mouseY >= 170 && mouseY <= 200 && scene == 41 && mentalMeter == 1) {
    scene = 42;
    mentalMeter = 0;
  } 

  if (mouseX >= 340 && mouseX <= 740 && mouseY >= 170 && mouseY <= 200 && scene == 41 && mentalMeter == -1) {
    scene = 67;
    mentalMeter = -2;
  } 

  if (mouseX >= 390 && mouseX <= 790 && mouseY >= 273 && mouseY <= 327 && scene == 41 && mentalMeter == 2) {
    scene = 42;
    mentalMeter = 3;
  } 

  if (mouseX >= 340 && mouseX <= 740 && mouseY >= 170 && mouseY <= 200 && scene == 41 && mentalMeter == -2) {
    scene = 67;
    mentalMeter = -3;
  } 

  // choice 4
  if (mouseX >= 390 && mouseX <= 790 && mouseY >= 273 && mouseY <= 327 && scene == 46 && mentalMeter == 1) {
    scene = 47;
    mentalMeter = 2;
  }

  if (mouseX >= 340 && mouseX <= 740 && mouseY >= 170 && mouseY <= 200 && scene == 46 && mentalMeter == -1) {
    scene = 53;
    mentalMeter = 0;
  }

  if (mouseX >= 340 && mouseX <= 740 && mouseY >= 170 && mouseY <= 200 && scene == 46 && mentalMeter == 1) {
    scene = 47;
    mentalMeter = 0;
  } 

  if (mouseX >= 340 && mouseX <= 740 && mouseY >= 170 && mouseY <= 200 && scene == 46 && mentalMeter == -1) {
    scene = 53;
    mentalMeter = -2;
  } 

  if (mouseX >= 340 && mouseX <= 740 && mouseY >= 170 && mouseY <= 200 && scene == 46 && mentalMeter == 2) {
    scene = 47;
    mentalMeter = 1;
  } 

  if (mouseX >= 340 && mouseX <= 740 && mouseY >= 170 && mouseY <= 200 && scene == 46 && mentalMeter == -2) {
    scene = 53;
    mentalMeter = -1;
  } 

  if (mouseX >= 390 && mouseX <= 790 && mouseY >= 273 && mouseY <= 327 && scene == 46 && mentalMeter == 3) {
    scene = 47;
    mentalMeter = 4;
  } 

  if (mouseX >= 340 && mouseX <= 740 && mouseY >= 170 && mouseY <= 200 && scene == 46 && mentalMeter == -3) {
    scene = 53;
    mentalMeter = -4;
  } 

  // choice 5
  if (mouseX >= 340 && mouseX <= 740 && mouseY >= 170 && mouseY <= 200 && scene == 59 && mentalMeter == 1) {
    scene = 60;
    mentalMeter = 2;
  }

  if (mouseX >= 340 && mouseX <= 740 && mouseY >= 170 && mouseY <= 200 && scene == 59 && mentalMeter == -1) {
    scene = 63;
    mentalMeter = 0;
  }

  if (mouseX >= 340 && mouseX <= 740 && mouseY >= 170 && mouseY <= 200 && scene == 59 && mentalMeter == 1) {
    scene = 60;
    mentalMeter = 0;
  } 

  if (mouseX >= 340 && mouseX <= 740 && mouseY >= 170 && mouseY <= 200 && scene == 59 && mentalMeter == -1) {
    scene = 63;
    mentalMeter = -2;
  } 

  if (mouseX >= 390 && mouseX <= 790 && mouseY >= 273 && mouseY <= 327 && scene == 59 && mentalMeter == 2) {
    scene = 60;
    mentalMeter = 3;
  } 

  if (mouseX >= 340 && mouseX <= 740 && mouseY >= 170 && mouseY <= 200 && scene == 59 && mentalMeter == -2) {
    scene = 63;
    mentalMeter = -3;
  } 

  if (mouseX >= 390 && mouseX <= 790 && mouseY >= 273 && mouseY <= 327 && scene == 59 && mentalMeter == 3) {
    scene = 60;
    mentalMeter = 4;
  } 

  if (mouseX >= 340 && mouseX <= 740 && mouseY >= 170 && mouseY <= 200 && scene == 59 && mentalMeter == -3) {
    scene = 63;
    mentalMeter = -4;
  } 

  if (mouseX >= 390 && mouseX <= 790 && mouseY >= 273 && mouseY <= 327 && scene == 59 && mentalMeter == 4) {
    scene = 60;
    mentalMeter = 5;
  } 

  if (mouseX >= 340 && mouseX <= 740 && mouseY >= 170 && mouseY <= 200 && scene == 59 && mentalMeter == -4) {
    scene = 63;
    mentalMeter = -5;
  } 
}