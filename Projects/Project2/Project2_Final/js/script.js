/**
 * Project 2 - Final Project
 * Foti Aivaliklis
 * 
 * The following visual novel titled Ataraxia's Longing is a mental health simulator where the player progresses 
 * through their school day, but are presented with two choices during certain scenes that will change the course of the story. 
 * These choices will affect the mental health meter at the top right of the screen that presents the character's increasing or 
 * decreasing mental health based on the choices made by you the player. So have fun, enjoy the game, and choose wisely!
 * 
 * Code Citation: Foti Aivaliklis, Pippin Barr, Mathilde Davan, Scarlett Perez
 * Character Assets Citation: @sutemo on itch.io (Cleo, Sebastian, Teacher, Mom)
 * Background Assets Citation: Adobe Stock Images (classroom), @arsenixc on Artstation (cleoHouse), 
 *                             EpisodeInteractiveForums (bedroom, bedroomNight, sebRoom, sebHouse), 
 *                             AnimeLandscape (mall), @days_e on Instagram (title), Foti Aivaliklis (badChoice1, badChoice2, badChoice3, badChoice4)
 * Sound Assets Citation: @Rest! or Ricardo Cuello on itch.io
 */

"use strict";

// variables for the state, scenes, charcter names, dialogue/narration text, and the start button
let state = "title" // can be title, simulation, ending1, ending2
let scene = 0 // variable for which scene you are at within the visual novel
let charName = " " // variable for the speaking character's name
let txt = " " // variable for the text (dialogue, narration)
let startButton; // variable for the start button

// variable and sets up the text being displayed on the screen for each scene
let sceneDialogue = [
  {
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
}
];

// strings for the choice options
// choice 1
let choice1A = "Sleep in, you deserve it";
let choice1B = "Wake up and take on the day";

// choice 2
let choice2A = "I was thinking, maybe we can hang out together now that class is done?"; 
let choice2B = "I was thinking of going home early to get some assignments done";

// choice 3
let choice3A = "Go home, it’s late and you’re getting tired.";
let choice3B = "Go to Sebastian’s house for a sleepover, embrace the fun.";

// choice 4
let choice4A = "Lie";
let choice4B = "Tell the truth";

// choice 5
let choice5A = "Go to sleep early";
let choice5B = "Stay up continuing to read your book";

// character sprites
let cleoNormal;
let cleoHappy;
let cleoAngry;
let sebastianNormal;
let sebastianSurprised;
let sebastianSmirk;
let teacherHappy;
let teacherMad;
let momHappy;
let momMad;

// button and title image
let nextButton;
let titleScreenImage;

// background images
let bedroom;
let school;
let mall; 
let sebHouse;
let sebRoom;
let bedroomNight;
let cleoHouse;

// overlay images
let badChoice;
let badChoice2;
let badChoice3;
let badChoice4;

// variable for the endings (mental health meter)
let mentalMeter = 0;

// music variables
let titleTrack;
let dayTrack;
let nightTrack;
let goodChoiceTrack;
let badChoiceTrack;

// Preload defines the assets' variables that will be used for the prototype (character images, backgrounds, UI assets)
function preload() {
  // button
  nextButton = loadImage("assets/images/next_button.jpg");
  // title screen image 
  titleScreenImage = loadImage("assets/images/title.jpg");
  // backgrounds
  bedroom = loadImage("assets/images/bedroom.jpg");
  school = loadImage("assets/images/school.jpg");
  mall = loadImage("assets/images/mall.jpg");
  sebHouse = loadImage("assets/images/seb_house.jpg");
  sebRoom = loadImage("assets/images/seb_room.jpg");
  bedroomNight = loadImage("assets/images/bedroom_night.jpg");
  cleoHouse = loadImage("assets/images/cleo_house.jpg");
  // character sprites
  cleoNormal = loadImage("assets/images/cleo_normal.png");
  cleoHappy = loadImage("assets/images/cleo_happy.png");
  cleoAngry = loadImage("assets/images/cleo_angry.png");
  sebastianNormal = loadImage("assets/images/seb_normal.png");
  sebastianSurprised = loadImage("assets/images/seb_surprised.png");
  sebastianSmirk = loadImage("assets/images/seb_smirk.png");
  teacherHappy = loadImage("assets/images/teacher_happy.png");
  teacherMad = loadImage("assets/images/teacher_mad.png");
  momHappy = loadImage("assets/images/mom_happy.png");
  momMad = loadImage("assets/images/mom_angry.png");
  // bad choice overlay
  badChoice = loadImage("assets/images/bad_choice1.png");
  badChoice2 = loadImage("assets/images/bad_choice2.png");
  badChoice3 = loadImage("assets/images/bad_choice3.png");
  badChoice4 = loadImage("assets/images/bad_choice4.png");
  // music
  titleTrack = loadSound("assets/sounds/menu.mp3");
  dayTrack = loadSound("assets/sounds/daytime.mp3");
  nightTrack = loadSound("assets/sounds/nighttime.mp3");
  goodChoiceTrack = loadSound("assets/sounds/goodchoice.mp3");
  badChoiceTrack = loadSound("assets/sounds/badchoice.mp3");
}

// Creates the canvas and calls to the button function where the initial start button is created
function setup() {
  // creates the canvas
  createCanvas(1000, 600);
  // calls to the function that creates the start button
  button();
  userStartAudio();
  titleTrack.loop();
  titleTrack.setVolume(0.05);
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
  state = "simulation";
  startButton.hide();
  titleTrack.stop();

  dayTrack.loop();
  dayTrack.setVolume(0.05);
}

// Checks for which state is active and calls to that state's respective function to display all of its elements
function draw() {
  if (state === `title`) {
      title();
    } 
    else if (state === `simulation`) {
      simulation();
    } 
    else if (state === `menu`) {
      menu();
    } 
    else if (state === "goodEnding") {
      goodEnding();
    } 
    else if (state === "badEnding") {
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
  fill(255, 255, 255, 200);
  stroke(0, 0, 139);
  strokeWeight(5);
  rect(230, 80, 540, 100, 20);
  pop();
  push();
  noStroke();
  textSize(45);
  fill(139,0,139);
  textAlign(CENTER, CENTER);
  text("Ataraxia's Longing", width/2, height/4.5);
  pop();

  // instructions
  push();
  fill(255, 255, 255, 200);
  stroke(0, 0, 139);
  strokeWeight(5);
  rect(215, 380, 580, 130, 20);
  pop();
  push();
  noStroke();
  textSize(20);
  fill(139,0,139);
  textAlign(CENTER, CENTER);
  textSize(14);
  text("The following visual novel is a mental health simulator where the player progresses \n through their school day, but are presented with two choices during certain scenes that \n will change the course of the story. These choices will affect the mental health meter at the \n top right of the screen that presents the character's increasing or decreasing mental health \n based on the choices made by you the player. \n So have fun, enjoy the game, and choose wisely!", width/1.99, height/1.35);
  pop();
}

// the function that calls to all of the elements for the main game itself
function simulation() {
  images();
  mentalHealthMeter();
  mentalMeterCounter();
  storyText();
  choiceOptions();
  menuButton();
  endings();
}

// the function that creates the menu button and its pop up page (code done by Scarlett Perez but modified to fit my specific game)
function menu() {
  // menu button
  push();
  fill(255);
  rectMode(CORNER);
  rect(835, 10, 150, 60);
  noStroke();
  fill(0);
  textSize(30);
  text("MENU", 865, 50);
  pop();

  // menu text box
  push();
  rectMode(CENTER);
  rect(width/2, height/ 2, 500, 500, 60);
  pop();

  // yes button box
  push();
  fill(250);
  rect(360, 430, 80, 40, 60);
  pop();

  // no button box
  push();
  fill(250);
  rect(560, 430, 80, 40, 60);
  pop();

  push();
  fill(0);
  textSize(30);
  textAlign(CENTER);
  noStroke();
  text("Would you like to go back\nto the title screen?\nIf you do, you will lose all\n game progress up until this point.", width / 2, 200);
  noStroke();
  text("YES", 400, 460);
  noStroke();
  text("NO", 600, 460);
  pop();
}

function menuButton() {
  push();
  fill(255);
  rectMode(CORNER);
  rect(835, 10, 150, 60);
  noStroke();
  fill(0);
  textSize(30);
  text("MENU", 865, 50);
  pop();
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
    background(sebRoom);  
  }
  
  // character spites + expressions
  if (scene == 1 || scene == 2 || scene == 3) {
    image(cleoNormal, 320, 100, 340, 360);
  }
  if (scene == 11 || scene == 12) {
    image(cleoHappy, 320, 100, 340, 360);
  }
  if (scene == 5 || scene == 7) {
    image(cleoAngry, 320, 100, 340, 360);
  }
  if (scene == 8) {
    image(teacherMad, 320, 100, 340, 360);
  }
  if (scene == 9 || scene == 10 || scene == 15 || scene == 16 || scene == 17 || scene == 18 || scene == 19) {
    image(cleoNormal, 150, 100, 340, 360);
    image(sebastianNormal, 500, 100, 340, 360);
  }
  if (scene == 20 || scene == 21 || scene == 22) {
    image(cleoNormal, 80, 100, 340, 360);
    image(teacherHappy, 320, 100, 340, 360);
    image(sebastianNormal, 570, 100, 340, 360);
  }
  if (scene == 24) {
    image(cleoNormal, 150, 100, 340, 360);
  }
  if (scene == 25 || scene == 26 || scene == 27 || scene == 28 || scene == 29 || scene == 30 || scene == 31 || scene == 32 || scene == 33 || scene == 34 || scene == 35 || scene == 36 || scene == 37 || scene == 38) {
    image(cleoNormal, 150, 100, 340, 360);
    image(sebastianNormal, 500, 100, 340, 360);
  }
  if (scene == 39 || scene == 40 || scene == 41 || scene == 43 || scene == 67 || scene == 69 || scene == 70) {
    image(sebastianSmirk, 150, 100, 340, 360);
  }
  if (scene == 42 || scene == 73 || scene == 74 || scene == 75 || scene == 76 || scene == 77 || scene == 78 || scene == 79 || scene == 80) {
    image(sebastianNormal, 150, 100, 340, 360);
  }
  if (scene == 40 || scene == 41 || scene == 42 || scene == 43 || scene == 67 || scene == 71) {
    image (cleoHappy, 500, 100, 340, 360);
  }
  if (scene == 45 || scene == 46 || scene == 47 || scene == 49 || scene == 50 || scene == 53 || scene == 54 || scene == 55 || scene == 57) {
    image(cleoNormal, 150, 100, 340, 360);
  }
  if (scene == 47 || scene == 48 || scene == 49 || scene == 50 || scene == 51) {
    image(momMad, 500, 100, 340, 360);
  }
  if (scene == 46 || scene == 53 || scene == 54 || scene == 55 || scene == 56 || scene == 57) {
    image(momHappy, 500, 100, 340, 360);
  }
  if (scene == 48 || scene == 51) {
    image(cleoAngry, 150, 100, 340, 360);
  }
  if (scene == 56) {
    image(cleoHappy, 150, 100, 340, 360);
  }
  if (scene == 59 || scene == 60 || scene == 61 || scene == 62 || scene == 63 || scene == 65) {
    image(cleoHappy, 320, 100, 340, 360);
  }
  if (scene == 66) {
    image(cleoNormal, 320, 100, 340, 360);
  }
  if (scene == 74 || scene == 76 || scene == 77 || scene == 78 || scene == 79 || scene == 80) {
    image(cleoAngry, 500, 100, 340, 360);
  }
}

// creates and displays the mental health meter on the top left of the screen (code done by Scarlett Perez but modified to fit my specific game)
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
    push();
    image(badChoice, 0, 0, 1000, 600);
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
      push();
      image(badChoice2, 0, 0, 1000, 600);
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
      push();
      image(badChoice3, 0, 0, 1000, 600);
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
      push();
      image(badChoice4, 0, 0, 1000, 600);
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
  
  // displays the text and the speaking character's name (code done by Scarlett Perez but modified to fit my specific game)
  push();
  fill(0);
  textSize(20);
  noStroke();
  textWrap(WORD);
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
    rect(width/2, 170, 600, 55);
    rect(width/2, 300, 600, 55);
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
    rect(width/2, 170, 600, 55);
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
    rect(width/2, 170, 600, 55);
    rect(width/2, 300, 600, 55);
    pop();

    // choice options themselves
    push();
    fill(0);
    textAlign(CENTER);
    textSize(18);
    noStroke();
    text(choice3B, width/2, 175);
    text(choice3A, width/2, 305);
    pop();
  }
  if (scene == 46) {
    push();
    fill(255, 255, 255, 180);
    rectMode(CENTER);
    strokeWeight(2);
    rect(width/2, 170, 600, 55);
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
    rect(width/2, 170, 600, 55);
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
  if ((scene == 62 || scene == 66 || scene == 80) && mentalMeter >= 1) {
    goodEnding();
    titleButton();
    noLoop();
  }
  else if ((scene == 62 || scene == 66 || scene == 80) && mentalMeter <= -1) {
    badEnding();
    titleButton();
    noLoop();
  }
  else if ((scene == 62 || scene == 66 || scene == 80) & mentalMeter == 0) {
    trueEnding();
    titleButton();
    noLoop();
  }
}
// function for the good ending (if the mental health meter is > 50%)
function goodEnding() {
  dayTrack.stop();
  nightTrack.play();
  nightTrack.setVolume(0.1);

  background(titleScreenImage);
  push();
  fill(255, 255, 255, 200);
  stroke(0, 0, 139);
  strokeWeight(5);
  rect(230, 80, 540, 100, 20);
  pop();
  push();
  textSize(45);
  fill(139,0,139);
  textAlign(CENTER, CENTER);
  text("GOOD ENDING", width/2, height/4.5);
  pop();

  push();
  fill(255, 255, 255, 200);
  stroke(0, 0, 139);
  strokeWeight(5);
  rect(215, 260, 580, 150, 20);
  pop();
  push();
  noStroke();
  textSize(20);
  fill(139,0,139);
  textAlign(CENTER, CENTER);
  textSize(14);
  text("Cleo continued her week by fixing her sleep schedule, being more open with how she has \nbeen feeling with her friends and family, and has begun to catch-up on her on school \nresponsibilities. Mental health is not something easy to overcome, so take the \nnecessary steps you need to tackle what is plaguing you. Whether it may be talking to a \nloved one, friend, or even teacher, distracting yourself with hobbies and activities, or by \nsimply crying it out, there is light at the end of the tunnel my friend, \nand we will all make it out together <3.", width/1.98, height/1.8);
  pop();
}

// function for the bad ending (if the mental health meter is < 50%)
function badEnding() {
  dayTrack.stop();
  nightTrack.play();
  nightTrack.setVolume(0.1);

  background(titleScreenImage);
  push();
  fill(255, 255, 255, 200);
  stroke(0, 0, 139);
  strokeWeight(5);
  rect(230, 80, 540, 100, 20);
  pop();
  push();
  textSize(45);
  fill(139,0,139);
  textAlign(CENTER, CENTER);
  text("BAD ENDING", width/2, height/4.5);
  pop();

  push();
  fill(255, 255, 255, 200);
  stroke(0, 0, 139);
  strokeWeight(5);
  rect(215, 260, 580, 150, 20);
  pop();
  push();
  noStroke();
  textSize(20);
  fill(139,0,139);
  textAlign(CENTER, CENTER);
  textSize(14);
  text("Unfortunately, as a result of her struggling mental health, Cleo’s sleep schedule worsened\n and she got in trouble by her mom for missing several classes and not being a more\n productive student. But she promises to improve… somehow. But do not forget, mental\n health is not something easy to overcome, so take the necessary steps you need to tackle\n what is plaguing you. Whether it may be talking to a loved one, friend, or even teacher,\n distracting yourself with hobbies and activities, or by simply crying it out, there is light\n at the end of the tunnel my friend, and we will all make it out together <3.", width/1.98, height/1.8);
  pop();
}

// for the true ending (if the mental health meter is = 50%)
function trueEnding() {
  background(titleScreenImage);
  push();
  fill(255, 255, 255, 200);
  stroke(0, 0, 139);
  strokeWeight(5);
  rect(230, 80, 540, 100, 20);
  pop();
  push();
  textSize(45);
  fill(139,0,139);
  textAlign(CENTER, CENTER);
  text("TRUE ENDING", width/2, height/4.5);
  pop();

  push();
  fill(255, 255, 255, 200);
  stroke(0, 0, 139);
  strokeWeight(5);
  rect(215, 260, 580, 180, 20);
  pop();
  push();
  noStroke();
  textSize(20);
  fill(139,0,139);
  textAlign(CENTER, CENTER);
  textSize(14);
  text("While Cleo may not be the perfect person ever, she has her high and low moments,\n which either benefit her drastically, like going to sleep\n and waking up earlier, or set her very behind, like not completing and forgetting to\n hand in assignments on time. But again, she is only human and that is ok. As a\n result, mental health can be that way and it is not something easy to overcome,\n so take the necessary steps you need to tackle what is plaguing you. Whether it may be\n talking to a loved one, friend, or even teacher, distracting\n yourself with hobbies and activities, or by simply crying it out,\n there is light at the end of the tunnel my friend, and we will all make it out together <3.", width/1.98, height/1.7);
  pop();
}

function mentalMeterCounter() {
  // choice1A
  if (mouseX >= 890 && mouseX <= 990 && mouseY >= 470 && mouseY <= 570 && scene == 10) {
    scene = 23;
  }
  // choice1B
  if (mouseX >= 890 && mouseX <= 990 && mouseY >= 470 && mouseY <= 570 && scene == 23) {
    scene = 23;
  }
  // choice2A
  if (mouseX >= 890 && mouseX <= 990 && mouseY >= 470 && mouseY <= 570 && scene == 34) {
    scene = 45;
  }
  // choice2B + choice3a
  if (mouseX >= 890 && mouseX <= 990 && mouseY >= 470 && mouseY <= 570 && scene == 44) {
    scene = 45;
  }
  // choice3b
  if (mouseX >= 890 && mouseX <= 990 && mouseY >= 470 && mouseY <= 570 && scene == 44) {
    scene = 67;
  }
  // choice4A
  if (mouseX >= 890 && mouseX <= 990 && mouseY >= 470 && mouseY <= 570 && scene == 52) {
    scene = 59;
  }
  // choice4b
  if (mouseX >= 890 && mouseX <= 990 && mouseY >= 470 && mouseY <= 570 && scene == 58) {
    scene = 59;
  }
}

function menuButtonPressed() {
  // menu button
  if (state === `simulation` && (mouseX >= 835) && (mouseY >= 10) && (mouseX <= 1000) && (mouseY <= 70)) {
    state = `menu`;
  }
  
  if (state === `menu` && (mouseX >= 360) && (mouseY >= 430) && (mouseX <= 440) && (mouseY <= 470)) {
    state = `title`;
    mentalMeter = 0;
    console.log(mentalMeter);
    dayTrack.stop();
    titleTrack.loop();
    titleTrack.setVolume(0.05);
    button();
    scene = 0;
  }
  
  if (state === `menu` && (mouseX >= 560) && (mouseY >= 430) && (mouseX <= 640) && (mouseY <= 620)) {
    state = `simulation`;
  }
}

function mousePressed() {
  mentalMeterCounter();
  menuButtonPressed();

  // beginning
  if (mouseX >= 890 && mouseX <= 990 && mouseY >= 470 && mouseY <= 570 && scene !== 1 && scene !== 27 && scene !== 41 && scene !== 46 && scene !== 59) {
    scene += 1;
    console.log(scene);
  }  

  // choice 1
  if ((mouseX >= 230) && (mouseX <= 770) && (mouseY >= 140) && (mouseY <= 200) && scene == 1) {
    scene = 3;
    mentalMeter = -1;
    badChoiceTrack.play();
    badChoiceTrack.setVolume(0.3);
  }

  if ((mouseX >= 200) && (mouseX <= 800) && (mouseY >= 270) && (mouseY <= 330) && scene == 1) {
    scene = 11;
    mentalMeter = 1;
    goodChoiceTrack.play();
    goodChoiceTrack.setVolume(0.1);
  }

  // choice 2
  if ((mouseX >= 200) && (mouseX <= 800) && (mouseY >= 270) && (mouseY <= 330) && scene == 27 && mentalMeter == 1) {
    scene = 28;
    mentalMeter = 2;
    goodChoiceTrack.play();
    goodChoiceTrack.setVolume(0.1);
  }

  if ((mouseX >= 230) && (mouseX <= 770) && (mouseY >= 140) && (mouseY <= 200) && scene == 27 && mentalMeter == -1) {
    scene = 35;
    mentalMeter = -2;
    badChoiceTrack.play();
    badChoiceTrack.setVolume(0.3);
  }

  if ((mouseX >= 230) && (mouseX <= 770) && (mouseY >= 140) && (mouseY <= 200) && scene == 27 && mentalMeter == 1) {
    scene = 35;
    mentalMeter = 0;
    badChoiceTrack.play();
    badChoiceTrack.setVolume(0.3);
  } 

  if ((mouseX >= 200) && (mouseX <= 800) && (mouseY >= 270) && (mouseY <= 330) && scene == 27 && mentalMeter == -1) {
    scene = 28;
    mentalMeter = 0;
    goodChoiceTrack.play();
    goodChoiceTrack.setVolume(0.1);
  } 

  // choice 3
  if ((mouseX >= 230) && (mouseX <= 770) && (mouseY >= 140) && (mouseY <= 200) && scene == 41 && mentalMeter == 0) {
    scene = 67;
    mentalMeter = -1;
    badChoiceTrack.play();
    badChoiceTrack.setVolume(0.3);
  }
  
  if ((mouseX >= 200) && (mouseX <= 800) && (mouseY >= 270) && (mouseY <= 330) && scene == 41 && mentalMeter == 0) {
    scene = 42;
    mentalMeter = 1;
    goodChoiceTrack.play();
    goodChoiceTrack.setVolume(0.1);
  }

  if ((mouseX >= 230) && (mouseX <= 770) && (mouseY >= 140) && (mouseY <= 200) && scene == 41 && mentalMeter == 1) {
    scene = 42;
    mentalMeter = 2;
    goodChoiceTrack.play();
    goodChoiceTrack.setVolume(0.1);
  }

  if ((mouseX >= 200) && (mouseX <= 800) && (mouseY >= 270) && (mouseY <= 330) && scene == 41 && mentalMeter == 1) {
    scene = 67;
    mentalMeter = 0;
    badChoiceTrack.play();
    badChoiceTrack.setVolume(0.3);
  }
  
  if ((mouseX >= 230) && (mouseX <= 770) && (mouseY >= 140) && (mouseY <= 200) && scene == 41 && mentalMeter == 2) {
    scene = 42;
    mentalMeter = 3;
    goodChoiceTrack.play();
    goodChoiceTrack.setVolume(0.1);
  }

  if ((mouseX >= 200) && (mouseX <= 800) && (mouseY >= 270) && (mouseY <= 330) && scene == 41 && mentalMeter == 2) {
    scene = 67;
    mentalMeter = 1;
    badChoiceTrack.play();
    badChoiceTrack.setVolume(0.3);
  }

  if ((mouseX >= 200) && (mouseX <= 800) && (mouseY >= 270) && (mouseY <= 330) && scene == 41 && mentalMeter == -1) {
    scene = 42;
    mentalMeter = 0;
    goodChoiceTrack.play();
    goodChoiceTrack.setVolume(0.1);
  }

  if ((mouseX >= 230) && (mouseX <= 770) && (mouseY >= 140) && (mouseY <= 200) && scene == 41 && mentalMeter == -1) {
    scene = 67;
    mentalMeter = -2;
    badChoiceTrack.play();
    badChoiceTrack.setVolume(0.3);
  }

  if ((mouseX >= 200) && (mouseX <= 800) && (mouseY >= 270) && (mouseY <= 330) && scene == 41 && mentalMeter == -2) {
    scene = 42;
    mentalMeter = -1;
    goodChoiceTrack.play();
    goodChoiceTrack.setVolume(0.1);
  }

  if ((mouseX >= 230) && (mouseX <= 770) && (mouseY >= 140) && (mouseY <= 200) && scene == 41 && mentalMeter == -2) {
    scene = 67;
    mentalMeter = -3;
    badChoiceTrack.play();
    badChoiceTrack.setVolume(0.3);
  }
  // choice 4
  if ((mouseX >= 230) && (mouseX <= 770) && (mouseY >= 140) && (mouseY <= 200) && scene == 46 && mentalMeter == 0) {
    scene = 47;
    mentalMeter = -1;
    badChoiceTrack.play();
    badChoiceTrack.setVolume(0.3);
  }

  if ((mouseX >= 200) && (mouseX <= 800) && (mouseY >= 270) && (mouseY <= 330) && scene == 46 && mentalMeter == 0) {
    scene = 53;
    mentalMeter = 1;
    goodChoiceTrack.play();
    goodChoiceTrack.setVolume(0.1);
  } 

  if ((mouseX >= 230) && (mouseX <= 770) && (mouseY >= 140) && (mouseY <= 200) && scene == 46 && mentalMeter == 1) {
    scene = 47;
    mentalMeter = 0;
    badChoiceTrack.play();
    badChoiceTrack.setVolume(0.3);
  }

  if ((mouseX >= 200) && (mouseX <= 800) && (mouseY >= 270) && (mouseY <= 330) && scene == 46 && mentalMeter == 1) {
    scene = 53;
    mentalMeter = 2;
    goodChoiceTrack.play();
    goodChoiceTrack.setVolume(0.1);
  } 

  if ((mouseX >= 230) && (mouseX <= 770) && (mouseY >= 140) && (mouseY <= 200) && scene == 46 && mentalMeter == 2) {
    scene = 47;
    mentalMeter = 1;
    badChoiceTrack.play();
    badChoiceTrack.setVolume(0.3);
  }

  if ((mouseX >= 200) && (mouseX <= 800) && (mouseY >= 270) && (mouseY <= 330) && scene == 46 && mentalMeter == 2) {
    scene = 53;
    mentalMeter = 3;
    goodChoiceTrack.play();
    goodChoiceTrack.setVolume(0.1);
  } 

  if ((mouseX >= 230) && (mouseX <= 770) && (mouseY >= 140) && (mouseY <= 200) && scene == 46 && mentalMeter == 3) {
    scene = 47;
    mentalMeter = 2;
    badChoiceTrack.play();
    badChoiceTrack.setVolume(0.3);
  }

  if ((mouseX >= 200) && (mouseX <= 800) && (mouseY >= 270) && (mouseY <= 330) && scene == 46 && mentalMeter == 3) {
    scene = 53;
    mentalMeter = 4;
    goodChoiceTrack.play();
    goodChoiceTrack.setVolume(0.1);
  } 

  if ((mouseX >= 230) && (mouseX <= 770) && (mouseY >= 140) && (mouseY <= 200) && scene == 46 && mentalMeter == -1) {
    scene = 47;
    mentalMeter = -2;
    badChoiceTrack.play();
    badChoiceTrack.setVolume(0.3);
  }

  if ((mouseX >= 200) && (mouseX <= 800) && (mouseY >= 270) && (mouseY <= 330) && scene == 46 && mentalMeter == -1) {
    scene = 53;
    mentalMeter = 0;
    goodChoiceTrack.play();
    goodChoiceTrack.setVolume(0.1);
  } 

  if ((mouseX >= 230) && (mouseX <= 770) && (mouseY >= 140) && (mouseY <= 200) && scene == 46 && mentalMeter == -2) {
    scene = 47;
    mentalMeter = -3;
    badChoiceTrack.play();
    badChoiceTrack.setVolume(0.3);
  }

  if ((mouseX >= 200) && (mouseX <= 800) && (mouseY >= 270) && (mouseY <= 330) && scene == 46 && mentalMeter == -2) {
    scene = 53;
    mentalMeter = -1;
    goodChoiceTrack.play();
    goodChoiceTrack.setVolume(0.1);
  } 

  if ((mouseX >= 230) && (mouseX <= 770) && (mouseY >= 140) && (mouseY <= 200) && scene == 46 && mentalMeter == -3) {
    scene = 47;
    mentalMeter = -4;
    badChoiceTrack.play();
    badChoiceTrack.setVolume(0.3);
  }

  if ((mouseX >= 200) && (mouseX <= 800) && (mouseY >= 270) && (mouseY <= 330) && scene == 46 && mentalMeter == -3) {
    scene = 53;
    mentalMeter = -2;
    goodChoiceTrack.play();
    goodChoiceTrack.setVolume(0.1);
  } 

  // choice 5
  if ((mouseX >= 230) && (mouseX <= 770) && (mouseY >= 140) && (mouseY <= 200) && scene == 59 && mentalMeter == 0) {
    scene = 60;
    mentalMeter = 1;
    goodChoiceTrack.play();
    goodChoiceTrack.setVolume(0.1);
  }

  if ((mouseX >= 200) && (mouseX <= 800) && (mouseY >= 270) && (mouseY <= 330) && scene == 59 && mentalMeter == 0) {
    scene = 63;
    mentalMeter = -1;
    badChoiceTrack.play();
    badChoiceTrack.setVolume(0.3);
  } 

  if ((mouseX >= 230) && (mouseX <= 770) && (mouseY >= 140) && (mouseY <= 200) && scene == 59 && mentalMeter == 1) {
    scene = 60;
    mentalMeter = 2;
    goodChoiceTrack.play();
    goodChoiceTrack.setVolume(0.1);
  }

  if ((mouseX >= 200) && (mouseX <= 800) && (mouseY >= 270) && (mouseY <= 330) && scene == 59 && mentalMeter == 1) {
    scene = 63;
    mentalMeter = 0;
    badChoiceTrack.play();
    badChoiceTrack.setVolume(0.3);
  } 

  if ((mouseX >= 230) && (mouseX <= 770) && (mouseY >= 140) && (mouseY <= 200) && scene == 59 && mentalMeter == 2) {
    scene = 60;
    mentalMeter = 3;
    goodChoiceTrack.play();
    goodChoiceTrack.setVolume(0.1);
  }

  if ((mouseX >= 200) && (mouseX <= 800) && (mouseY >= 270) && (mouseY <= 330) && scene == 59 && mentalMeter == 2) {
    scene = 63;
    mentalMeter = 1;
    badChoiceTrack.play();
    badChoiceTrack.setVolume(0.3);
  }

  if ((mouseX >= 230) && (mouseX <= 770) && (mouseY >= 140) && (mouseY <= 200) && scene == 59 && mentalMeter == 3) {
    scene = 60;
    mentalMeter = 4;
    goodChoiceTrack.play();
    goodChoiceTrack.setVolume(0.1);
  }

  if ((mouseX >= 200) && (mouseX <= 800) && (mouseY >= 270) && (mouseY <= 330) && scene == 59 && mentalMeter == 3) {
    scene = 63;
    mentalMeter = 2;
    badChoiceTrack.play();
    badChoiceTrack.setVolume(0.3);
  }

  if ((mouseX >= 230) && (mouseX <= 770) && (mouseY >= 140) && (mouseY <= 200) && scene == 59 && mentalMeter == 4) {
    scene = 60;
    mentalMeter = 5;
    goodChoiceTrack.play();
    goodChoiceTrack.setVolume(0.1);
  }

  if ((mouseX >= 200) && (mouseX <= 800) && (mouseY >= 270) && (mouseY <= 330) && scene == 59 && mentalMeter == 4) {
    scene = 63;
    mentalMeter = 3;
    badChoiceTrack.play();
    badChoiceTrack.setVolume(0.3);
  }

  if ((mouseX >= 230) && (mouseX <= 770) && (mouseY >= 140) && (mouseY <= 200) && scene == 59 && mentalMeter == -1) {
    scene = 60;
    mentalMeter = 0;
    goodChoiceTrack.play();
    goodChoiceTrack.setVolume(0.1);
  }

  if ((mouseX >= 200) && (mouseX <= 800) && (mouseY >= 270) && (mouseY <= 330) && scene == 59 && mentalMeter == -1) {
    scene = 63;
    mentalMeter = -2;
    badChoiceTrack.play();
    badChoiceTrack.setVolume(0.3);
  }

  if ((mouseX >= 230) && (mouseX <= 770) && (mouseY >= 140) && (mouseY <= 200) && scene == 59 && mentalMeter == -2) {
    scene = 60;
    mentalMeter = -1;
    goodChoiceTrack.play();
    goodChoiceTrack.setVolume(0.1);
  }

  if ((mouseX >= 200) && (mouseX <= 800) && (mouseY >= 270) && (mouseY <= 330) && scene == 59 && mentalMeter == -2) {
    scene = 63;
    mentalMeter = -3;
    badChoiceTrack.play();
    badChoiceTrack.setVolume(0.3);
  }

  if ((mouseX >= 230) && (mouseX <= 770) && (mouseY >= 140) && (mouseY <= 200) && scene == 59 && mentalMeter == -3) {
    scene = 60;
    mentalMeter = -4;
    goodChoiceTrack.play();
    goodChoiceTrack.setVolume(0.1);
  }

  if ((mouseX >= 200) && (mouseX <= 800) && (mouseY >= 270) && (mouseY <= 330) && scene == 59 && mentalMeter == -3) {
    scene = 63;
    mentalMeter = -2;
    badChoiceTrack.play();
    badChoiceTrack.setVolume(0.3);
  }

  if ((mouseX >= 230) && (mouseX <= 770) && (mouseY >= 140) && (mouseY <= 200) && scene == 59 && mentalMeter == -4) {
    scene = 60;
    mentalMeter = -5;
    goodChoiceTrack.play();
    goodChoiceTrack.setVolume(0.1);
  }

  if ((mouseX >= 200) && (mouseX <= 800) && (mouseY >= 270) && (mouseY <= 330) && scene == 59 && mentalMeter == -4) {
    scene = 63;
    mentalMeter = -3;
    badChoiceTrack.play();
    badChoiceTrack.setVolume(0.3);
  }
}