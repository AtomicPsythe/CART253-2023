/**
 * Project 1
 * Student Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let shape = {
    x: undefined,
    y: 100,
    size: 100,
    isBeingDragged: false,
    offSetX: 0,
    offSetY: 0,
    feedbackSizeChangeAmount: 5,
    active: true
};

// image variables
let knife;
let kitchen;
let cheese;
let butter;
let bread;
let toast;

// various states
let state = "title"; // can be title, simulation, food
let instructions = "Click and drag the knife to different ingredients to prep them and combine them with others to create a beautiful dish!";

/**
 * Description of preload
*/
function preload() {
    knife = loadImage("assets/images/knife_edited.png");
    kitchen = loadImage("assets/images/kitchen.jpg");
    cheese = loadImage("assets/images/cheese.png");
    butter = loadImage("assets/images/butter.png");
    bread = loadImage("assets/images/bread_uncut.png");
    toast = loadImage("assets/images/toast.png");
}


/**
 * Description of setup
*/
function setup() {
    createCanvas(1000, 800);
    shape.x = width/2;
    shape.y = height/2;
    displayImages();
}


/**
 * Description of draw()
*/
function draw() {
    background(kitchen);

    if (state === `title`) {
        title();
    }
    else if (state === "simulation") {
        simulation();
    }
    else if (state === "food") {
        food();
    }

    if (shape.active) {
        handleDragging();
    }
}

// the title page of the simulation before it begins
function title() {
    gameTitle();
    rulesAndInstructions();
}

function gameTitle() {
    push();
    fill(255);
    strokeWeight(3);
    rect(320, 170, 400, 60, 20);
    textSize(40);
    fill(159, 51, 51);
    textAlign(CENTER, CENTER);
    text("Cooking Simulator", 515, 200);
    pop();
}

function rulesAndInstructions() {
    push();
    fill(255);
    rect(320, 300, 400, 120, 20);
    textSize(20);
    fill(159, 51, 51);
    textAlign(CENTER);
    textStyle(BOLD);
    text("Rules", 328, 305, 400, 200);
    pop();
    push();
    textSize(20);
    fill(159, 51, 51);
    textAlign(CENTER);
    text(instructions, 320, 335, 400, 200);
    pop();
}

// simulation itself
function simulation() {
    displayImages();
    handleDragging();
    mouseIsInsideShape();
}

function displayImages() {
    image(knife, shape.x, shape.y, shape.size);
    // image(cheese, shape.x + 10, shape.y, shape.size);
}

// Interacting with the objects functions
function handleDragging() {
    if (shape.isBeingDragged) {
        shape.x = mouseX + shape.offSetX;
        shape.y = mouseY + shape.offSetY;

        shape.x = constrain(shape.x, 0, width);
        shape.y = constrain(shape.y, 0, height);
    }
}

// Mouse related functions
function mousePressed() {
    if (shape.active && mouseIsInsideShape()) {
        shape.isBeingDragged = true;
        shape.offSetX = shape.x - mouseX;
        shape.offSetY = shape.y - mouseY;
        shape.size -= shape.feedbackSizeChangeAmount;
    }
    if (state === "title") {
        state = "simulation";
    }
}

function mouseReleased() {
    if (shape.isBeingDragged && shape.x > width/2) {
        shape.isBeingDragged = false;
        shape.size += shape.feedbackSizeChangeAmount;
        shape.offSetX = 0;
        shape.offSetY = 0;
    }
}

function mouseIsInsideShape() {
    let d = dist(mouseX, mouseY, shape.x, shape.y);
    if (d < shape.size) {
        return true;
    }
    else {
        return false;
    }
}