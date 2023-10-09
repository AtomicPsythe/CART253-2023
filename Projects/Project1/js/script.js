/**
 * Project 1
 * Student Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

// knife
let shape = {
    x: undefined,
    y: undefined,
    size: 150,
    isBeingDragged: false,
    offSetX: 0,
    offSetY: 0,
    active: true
};

// bread
let shape2 = {
    x: undefined,
    y: undefined,
    size: 170,
    isBeingDragged: false,
    offSetX: 0,
    offSetY: 0,
    active: true
};

// toast
let shape3 = {
    x: undefined,
    y: undefined,
    height: 60,
    size: 130,
    isBeingDragged: false,
    offSetX: 0,
    offSetY: 0,
    active: true
};

// cheese
let shape4 = {
    x: undefined,
    y: undefined,
    height: 60,
    size: 130,
    isBeingDragged: false,
    offSetX: 0,
    offSetY: 0,
    active: true
};

// sliced cheese
let shape5 = {
    x: undefined,
    y: undefined,
    height: 60,
    size: 130,
    isBeingDragged: false,
    offSetX: 0,
    offSetY: 0,
    active: true
};

// butter
let shape6 = {
    x: undefined,
    y: undefined,
    height: 60,
    size: 130,
    isBeingDragged: false,
    offSetX: 0,
    offSetY: 0,
    active: true
};

// grilled cheese
let shape7 = {
    x: undefined,
    y: undefined,
    height: 60,
    size: 130,
    isBeingDragged: false,
    offSetX: 0,
    offSetY: 0,
    active: true
};

// image variables
let knife;
let kitchen;
let cheese;
let butter;
let bread;
let toast;
let slicedCheese;
let grilledCheese

// various states
let state = "title"; // can be title, simulation, food
let instructions = "Click and drag the knife to different ingredients to prep them and combine them with others to make a grilled cheese!";

/**
 * Description of preload
*/
function preload() {
    knife = loadImage("assets/images/knife_edited.png");
    kitchen = loadImage("assets/images/kitchen.jpg");
    cheese = loadImage("assets/images/cheese_edited.png");
    butter = loadImage("assets/images/butter_edited.png");
    bread = loadImage("assets/images/bread_drawn.png");
    toast = loadImage("assets/images/toast_drawn.png");
    slicedCheese = loadImage("assets/images/slicedcheese.png");
    grilledCheese = loadImage("assets/images/grilledcheese.png");
}


/**
 * Description of setup
*/
function setup() {
    createCanvas(1000, 800);
    setupImages();
    displayImages();
}

function setupImages() {
    shape.x = width/2.5;
    shape.y = height/10;
    shape2.x = width/8;
    shape2.y = height/2;
    shape4.x = height/2.5;
    shape4.y = width/4;
    shape6.x = height/1.5;
    shape6.y = width/4;
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

    // if (shape.active) {
    //     handleDragging();
    // }
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
    breadHandleDragging();
    toastHandleDragging();
    cheeseHandleDragging();
    butterHandleDragging();
    isOffScreen(shape);
    mouseIsInsideShape();
    mouseIsInsideShape2();
    mouseIsInsideShape3();
    mouseIsInsideShape4();
    mouseIsInsideShape6();
    breadCheckOverlap();
    // cheeseCheckOverlap();
}

function displayImages() {
    image(knife, shape.x, shape.y, shape.size);
    image(bread, shape2.x, shape2.y, shape2.size);
    image(toast, shape3.x, shape3.y, shape3.size);
    image(cheese, shape4.x, shape4.y, shape4.size);
    image(butter, shape6.x, shape6.y, shape6.size);
    image(grilledCheese, shape7.x, shape7.y, shape7.size);
}

// Interacting with the objects functions
function handleDragging() {
    // for knife
    if (shape.isBeingDragged) {
        shape.x = mouseX + shape.offSetX;
        shape.y = mouseY + shape.offSetY;

        shape.x = constrain(shape.x, 0, width);
        shape.y = constrain(shape.y, 0, height);
    }
}

function breadHandleDragging() {
    if (shape2.isBeingDragged) {
        shape2.x = mouseX + shape2.offSetX;
        shape2.y = mouseY + shape2.offSetY;

        shape2.x = constrain(shape2.x, 0, width);
        shape2.y = constrain(shape2.y, 0, height);
    }
}

function toastHandleDragging() {
    if (shape3.isBeingDragged) {
        shape3.x = mouseX + shape3.offSetX;
        shape3.y = mouseY + shape3.offSetY;

        shape3.x = constrain(shape3.x, 0, width);
        shape3.y = constrain(shape3.y, 0, height);
    }
}

function cheeseHandleDragging() {
    if (shape4.isBeingDragged) {
        shape4.x = mouseX + shape4.offSetX;
        shape4.y = mouseY + shape4.offSetY;

        shape4.x = constrain(shape4.x, 0, width);
        shape4.y = constrain(shape4.y, 0, height);
    }
}

function butterHandleDragging() {
    if (shape6.isBeingDragged) {
        shape6.x = mouseX + shape6.offSetX;
        shape6.y = mouseY + shape6.offSetY;

        shape6.x = constrain(shape6.x, 0, width);
        shape6.y = constrain(shape6.y, 0, height);
    }
}

function isOffScreen() {
    if (shape.x < 0 || shape.x > width || shape.y < 0 || shape.y > height) {
        return true;
    }
    else {
        return false;
    }
}

function breadCheckOverlap() {
    let d = dist(shape.x, shape.y, shape2.x, shape2.y);
    if (d < shape.size/2 + shape2.size/2) {
        shape2 = false;
        shape3.x = width/8;
        shape3.y = height/2;
    }
}

function ingredientsCheckOverlap() {
    let d = dist(shape3.x, shape3.y, shape4.x, shape4.y, shape6.x, shape6.y);
    if (d < shape.size/2 + shape2.size/2) {
        shape2 = false;
        shape3.x = width/8;
        shape3.y = height/2;
    }
}

// function cheeseCheckOverlap() {
//     let d = dist(shape.x, shape.y, shape4.x, shape4.y);
//     if (d < shape.size/2 + shape4.size/2) {
//         shape4 = false;
//         shape5.x = width/2.5;
//         shape5.y = height/4;
//     }
// }

function grilledCheeseCheckOverlap() {
    let d = dist(shape3.x, shape3.y, shape4.x, shape4.y, shape6.x, shape6.y);
    if (d < shape3.size/2 + shape4.size/2 + shape6.size/2) {
        shape3 = false;
        shape4 = false;
        shape6 = false;
        shape7.x = width/2;
        shape7.y = height/2;
    }
}

// Mouse related functions
function mousePressed() {
    if (shape.active && mouseIsInsideShape()) {
        shape.isBeingDragged = true;
        shape.offSetX = shape.x - mouseX;
        shape.offSetY = shape.y - mouseY;
    }
    if (shape2.active && mouseIsInsideShape2()) {
        shape2.isBeingDragged = true;
        shape2.offSetX = shape2.x - mouseX;
        shape2.offSetY = shape2.y - mouseY;
    }
    if (shape3.active && mouseIsInsideShape3()) {
        shape3.isBeingDragged = true;
        shape3.offSetX = shape3.x - mouseX;
        shape3.offSetY = shape3.y - mouseY;
    }
    if (shape4.active && mouseIsInsideShape4()) {
        shape4.isBeingDragged = true;
        shape4.offSetX = shape4.x - mouseX;
        shape4.offSetY = shape4.y - mouseY;
    }
    if (shape6.active && mouseIsInsideShape6()) {
        shape6.isBeingDragged = true;
        shape6.offSetX = shape6.x - mouseX;
        shape6.offSetY = shape6.y - mouseY;
    }

    if (state === "title") {
        state = "simulation";
    }
}

function mouseReleased() {
    if (shape.isBeingDragged && shape.x > width/2) {
        shape.isBeingDragged = false;
        shape.offSetX = 0;
        shape.offSetY = 0;
    }
    if (shape2.isBeingDragged && shape2.x > width/8) {
        shape2.isBeingDragged = false;
        shape2.offSetX = 0;
        shape2.offSetY = 0;
    }
    if (shape3.isBeingDragged && shape3.x > width/8) {
        shape3.isBeingDragged = false;
        shape3.offSetX = 0;
        shape3.offSetY = 0;
    }
    if (shape4.isBeingDragged && shape4.x > width/4) {
        shape4.isBeingDragged = false;
        shape4.offSetX = 0;
        shape4.offSetY = 0;
    }
    if (shape6.isBeingDragged && shape6.x > width/4) {
        shape6.isBeingDragged = false;
        shape6.offSetX = 0;
        shape6.offSetY = 0;
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

function mouseIsInsideShape2() {
    let d = dist(mouseX, mouseY, shape2.x, shape2.y);
    if (d < shape2.size) {
        return true;
    }
    else {
        return false;
    }
}

function mouseIsInsideShape3() {
    let d = dist(mouseX, mouseY, shape3.x, shape3.y);
    if (d < shape3.size) {
        return true;
    }
    else {
        return false;
    }
}

function mouseIsInsideShape4() {
    let d = dist(mouseX, mouseY, shape4.x, shape4.y);
    if (d < shape4.size) {
        return true;
    }
    else {
        return false;
    }
}

function mouseIsInsideShape6() {
    let d = dist(mouseX, mouseY, shape6.x, shape6.y);
    if (d < shape6.size) {
        return true;
    }
    else {
        return false;
    }
}