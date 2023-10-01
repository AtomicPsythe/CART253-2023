/**
 * Exercise 3: Love, Actually
 * Foti Aivaliklis
 * 
 * A love simulation featuring the characters Sasaki and Miyano from the manga of the same name, where the user controls Sasaki and Miyano is controlled by the program, which shows if the two will fall for each other or not.
 */

"use strict";

// Sasaki circle
let circle1 = {
    x: undefined, 
    y: 250,
    size: 120,
    vx: 0, 
    vy: 0,
    speed: 3
};

// Miyano circle
let circle2 = {
    x: undefined, 
    y: 250,
    size: 120,
    vx: 0, 
    vy: 0,
    speed: 2
};

let state = "title"; // Can be: title, simulation, love, sadness or topLeftQuadrant

let sasaki;
let miyano;
let sakura;
let button;

/**
 * Establishes the variables for the images used
*/
function preload() {
    sasaki = loadImage("assets/images/sasaki_cropped.png");
    miyano = loadImage("assets/images/miyano_cropped.png");
    sakura = loadImage("assets/images/sakura_cropped.png");
}


/**
 * Creates the canvas, the circles and the secret button
*/
function setup() {
    createCanvas(500, 500);
    setupCircles();
    secretButton();
}

// the secret button if checkTopLeftQuadrant is triggered
function secretButton() {
    button = createButton("Click here!");
    button.position(340, 370);
    button.mousePressed(reset);
    button.hide();
}

// hides the button upon being used
function reset() {
    setupCircles();
    state = "simulation";
    button.hide();
}

// creates the circles
function setupCircles() {
    // Position circles separated from one another
    circle1.x = width/3;
    circle1.y = height/3;
    circle2.x = 2*width/3;

    // Start circles moving in a random direction
    circle2.vx = random(-circle2.speed, circle2.speed);
    circle2.vy = random(-circle2.speed, circle2.speed);
}

/**
 * Plays the simulation
*/
function draw() {
    background(sakura);

    if (state === "title") {
        title();
    }
    else if (state === "simulation") {
        simulation();
    }
    else if (state === "love") {
        love();
    }
    else if (state === "sadness") {
        sadness();
    }
    else if (state === "topLeftQuadrant") {
        checkTopLeftQuadrant();
    }
    handleInput();
}

// the title page of the simulation before it begins
function title() {
    push();
    textSize(18);
    fill(159, 51, 51);
    textAlign(CENTER, CENTER);
    text("Will Sasaki and Miyano find love in each other?", width/2, height/2);
    pop();
    push();
    textSize(15);
    fill(159, 51, 51);
    textAlign(CENTER);
    text("Move Sasaki with the arrow keys to decide their fate!", 250, 300)
}

// the simulation itself
function simulation() {
    move();
    checkOffScreen();
    checkOverlap();
    display();
}

// if the two circles overlap the two fall in love
function love() {
    push();
    textSize(64);
    fill(255, 93, 163);
    textAlign(CENTER, CENTER);
    text("Love!", width/2, height/2);
    pop();
    push();
    textSize(15);
    fill(255, 93, 163);
    textAlign(CENTER);
    text("Congrats on your newfound love~ <3", 250, 300)
    pop();
}

// if the two circles do not overlap or one exits the canvas then the two do not fall in love
function sadness() {
    if (circle1.x < width/2 && circle1.y < height/2) {
        checkTopLeftQuadrant();
    }
    else {
        push();
        textSize(64);
        fill(62, 62, 165);
        textAlign(CENTER, CENTER);
        text(":(", width/2, height/2);
        pop();
        push();
        textSize(15);
        fill(62, 62, 165);
        textAlign(CENTER);
        text("Sorry, maybe love isn't your thing...", 250, 300)
        pop();
    }
}

// the controls for the user controlled circle (Sasaki)
function handleInput() {
    if (keyIsDown(LEFT_ARROW)) {
        circle1.vx = -circle1.speed;
    }
    else if (keyIsDown(RIGHT_ARROW)) {
        circle1.vx = circle1.speed;
    }
    else {
        circle1.vx = 0;
    }
    if (keyIsDown(UP_ARROW)) {
        circle1.vy = -circle1.speed;
    }
    else if (keyIsDown(DOWN_ARROW)) {
        circle1.vy = circle1.speed;
    }
    else {
        circle1.vy = 0;
    }
}

// what determines the circles' movement
function move() {
    // Move the circles
    circle1.x = circle1.x + circle1.vx;
    circle1.y = circle1.y + circle1.vy;

    let change = random();
    if (change < 0.1) {
        circle2.vx = random(-circle2.speed, circle2.speed);
        circle2.vy = random(-circle2.speed, circle2.speed);
    }
    circle2.x = circle2.x + circle2.vx;
    circle2.y = circle2.y + circle2.vy;
}

// checks if one of the circles or both of them have gone off of the canvas
function checkOffScreen() {
    // Check if circles have gone offscreen
    if (isOffScreen(circle1) || isOffScreen(circle2)) {
        state = "sadness";
    }
}

// what happens when one of or both circles are off the screen
function isOffScreen(circle) {
    if (circle.x < 0 || circle.x > width || circle.y < 0 || circle.y > height) {
        return true;
    }
    else {
        return false;
    }
}

// checks if the circles have overlapped
function checkOverlap() {
    // Check if the circles overlap
    let d = dist(circle1.x, circle1.y, circle2.x, circle2.y);
    if (d < circle1.size/2 + circle2.size/2) {
        state = "love";
    }
}

// displays the images as the circles
function display() {
    // Display the circles
    image(sasaki, circle1.x - circle1.size/2, circle1.y - circle1.size/2, circle1.size, circle1.size);
    image(miyano, circle2.x - circle2.size/2, circle2.y - circle2.size/2, circle2.size, circle2.size);
}

// checks if the user has passed through the top left quadrant
function checkTopLeftQuadrant() {
    if (circle1.x < width/2 && circle1.y < height/2) {
        push();
        textSize(15);
        fill(0);
        textAlign(CENTER, CENTER);
        text("Looks like you have been given a second chance at love, try again!", 250, 300)
        pop();
        button.show();
    }
}

// allows the user to click to start the program and to continue if checkTopLeftQuadrant was triggered
function mousePressed(){
    if (state === "title") {
        state = "simulation";
    }
    else if (state === "topLeftQuadrant") {
        state = "title";
    }
}