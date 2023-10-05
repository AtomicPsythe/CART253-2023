/**
 * Project 1
 * Foti Aivaliklis
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let shape = {
    x: undefined,
    y: undefined,
    size: 200,
    isBeingDragged: false,
    offSetX: 0,
    offSetY: 0,
    feedbackSizeChangeAmount: 5,
    active: true
};

// image variables
let knife;
let kitchen;

// various states
let state = "title";
let instructions = "Click and drag the knife to different ingredients to prep them and combine them with others to create a beautiful dish!";

/**
 * Description of preload
*/
function preload() {
    knife = loadImage("assets/images/knife_edited.png");
    kitchen = loadImage("assets/images/kitchen.jpg");
}


/**
 * Description of setup
*/
function setup() {
    createCanvas(1000, 800);
    shape.x = width/2;
    shape.y = height/2;
}


/**
 * Description of draw()
*/
function draw() {
    background(kitchen);

    if (state === "title") {
        title();
    }
    else if (state === "simulation") {
        simulation();
    }

    if (shape.active) {
        handleDragging();
        drawShape();
    }
}

// the title page of the simulation before it begins
function title() {
    background(150)
    push();
    noFill();
    strokeWeight(3);
    rect(320, 170, 400, 60, 20);
    textSize(40);
    fill(159, 51, 51);
    textAlign(CENTER, CENTER);
    text("Cooking Simulator", 515, 200);
    pop();
    push();
    noFill();
    rect(320, 300, 400, 200, 20);
    textSize(20);
    fill(159, 51, 51);
    textAlign(CENTER);
    textStyle(BOLD);
    text("Rules", 328, 305, 400, 200);
    pop();
    textSize(20);
    fill(159, 51, 51);
    textAlign(CENTER);
    text(instructions, 320, 335, 400, 200);
}

function drawShape() {
    push();
    fill(255, 0, 0);
    noStroke();
    image(knife, shape.x, shape.y, shape.size);
    pop();
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

function mouseIsInsideShape() {
    let d = dist(mouseX, mouseY, shape.x, shape.y);
    if (d < shape.size) {
        return true;
    }
    else {
        return false;
    }
}

// Mouse related functions
function mousePressed() {
    if (state === "title") {
        state === "simulation";
    }

    if (shape.active && mouseIsInsideShape()) {
        shape.isBeingDragged = true;
        shape.offSetX = shape.x - mouseX;
        shape.offSetY = shape.y - mouseY;
    }
}

function mouseReleased() {
    if (shape.isBeingDragged = false) {
        shape.size += shape.feedbackSizeChangeAmount;
        shape.offSetX = 0;
        shape.offSetY = 0;
    }
}