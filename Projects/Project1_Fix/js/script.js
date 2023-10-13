/**
 * Project 1
 * Foti Aivaliklis
 * 
 * The following cooking simulation takes the player through the process of making a grilled cheese via interacting with the ingredients and tools provided on the screen.
 */

"use strict";

// knife
let knifeIngredient = {
    x: undefined,
    y: undefined,
    size: 150,
    isBeingDragged: false,
    offSetX: 0,
    offSetY: 0,
    active: true
};

// bread
let breadIngredient = {
    x: undefined,
    y: undefined,
    size: 120,
    isBeingDragged: false,
    offSetX: 0,
    offSetY: 0,
    active: true
};

// toast
let toastIngredient = {
    x: undefined,
    y: undefined,
    size: 130,
    isBeingDragged: false,
    offSetX: 0,
    offSetY: 0,
    active: true
};

// cheese
let cheeseIngredient = {
    x: undefined,
    y: undefined,
    size: 100,
    isBeingDragged: false,
    offSetX: 0,
    offSetY: 0,
    active: true
};

// sliced cheese
let slicedCheeseIngredient = {
    x: undefined,
    y: undefined,
    size: 100,
    isBeingDragged: false,
    offSetX: 0,
    offSetY: 0,
    active: true
};

// butter
let butterIngredient = {
    x: undefined,
    y: undefined,
    size: 120,
    isBeingDragged: false,
    offSetX: 0,
    offSetY: 0,
    active: true
};

// grilled cheese
let grilledCheeseIngredient = {
    x: undefined,
    y: undefined,
    size: 160,
    isBeingDragged: false,
    offSetX: 0,
    offSetY: 0,
    active: true
};

// bowl
let bowlIngredient = {
    x: undefined,
    y: undefined,
    size: 150,
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
let grilledCheese;
let bowl;

// various states
let state = "title"; // can be title, simulation, food
let instructions = "Click and drag the knife to different ingredients to prep them and combine them with others to make a grilled cheese!";

/**
 * Establishes the variables for the images used
*/
function preload() {
    knife = loadImage("assets/images/knife_edited.png");
    kitchen = loadImage("assets/images/kitchen.jpg");
    cheese = loadImage("assets/images/cheese_drawn.png");
    butter = loadImage("assets/images/butter_drawn2.png");
    bread = loadImage("assets/images/bread_drawn.png");
    toast = loadImage("assets/images/toast_drawn.png");
    slicedCheese = loadImage("assets/images/slicedcheese_drawn.png");
    grilledCheese = loadImage("assets/images/grilledcheese_drawn.png");
    bowl = loadImage("assets/images/bowl_drawn.png");
}

/**
 * Creates the canvas and sets up and displays the images
*/
function setup() {
    createCanvas(1000, 800);
    setupImages();
    displayImages();
}

// Identifies the images' location on the canvas
function setupImages() {
    knifeIngredient.x = width/2.5;
    knifeIngredient.y = height/10;
    breadIngredient.x = width/8;
    breadIngredient.y = height/1.7;
    cheeseIngredient.x = width/3;
    cheeseIngredient.y = height/1.9;
    butterIngredient.x = width/2;
    butterIngredient.y = height/1.7;
}


/**
 * Creates the background and calls to each of the three states of the game depending on the player's progression
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
}

// the title page of the simulation before it begins
function title() {
    gameTitle();
    rulesAndInstructions();
}

// the title itself
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

// the instructions listed on the title page
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

// simulation itself, calls to display the images, the image changes, and if the mouse interacts with them
function simulation() {
    displayImages();
    handleDragging();
    breadHandleDragging();
    toastHandleDragging();
    cheeseHandleDragging();
    slicedCheeseHandleDragging();
    butterHandleDragging();
    isOffScreen(knifeIngredient);
    breadCheckOverlap();
    cheeseCheckOverlap();
    grilledCheeseCheckOverlap();
    mouseIsInsideknifeIngredient();
    mouseIsInsidebreadIngredient();
    mouseIsInsidetoastIngredient();
    mouseIsInsidecheeseIngredient();
    mouseIsInsideslicedCheeseIngredient();
    mouseIsInsidebutterIngredient();
    bowlAppear();
}

// displaying the images in relation to the variable locations establised above
function displayImages() {
    image(knife, knifeIngredient.x, knifeIngredient.y, knifeIngredient.size);
    image(bread, breadIngredient.x, breadIngredient.y, breadIngredient.size);
    image(toast, toastIngredient.x, toastIngredient.y, toastIngredient.size);
    image(cheese, cheeseIngredient.x, cheeseIngredient.y, cheeseIngredient.size);
    image(slicedCheese, slicedCheeseIngredient.x, slicedCheeseIngredient.y, slicedCheeseIngredient.size);
    image(butter, butterIngredient.x, butterIngredient.y, butterIngredient.size);
    image(grilledCheese, grilledCheeseIngredient.x, grilledCheeseIngredient.y, grilledCheeseIngredient.size);
    image(bowl, bowlIngredient.x, bowlIngredient.y, bowlIngredient.size);
}

// Interacting with the objects functions
function handleDragging() {
// for knife
    if (knifeIngredient.isBeingDragged) {
        knifeIngredient.x = mouseX + knifeIngredient.offSetX;
        knifeIngredient.y = mouseY + knifeIngredient.offSetY;

        knifeIngredient.x = constrain(knifeIngredient.x, 0, width);
        knifeIngredient.y = constrain(knifeIngredient.y, 0, height);
    }
}
// for bread
function breadHandleDragging() {
    if (breadIngredient.isBeingDragged) {
        breadIngredient.x = mouseX + breadIngredient.offSetX;
        breadIngredient.y = mouseY + breadIngredient.offSetY;

        breadIngredient.x = constrain(breadIngredient.x, 0, width);
        breadIngredient.y = constrain(breadIngredient.y, 0, height);
    }
}
// for toast
function toastHandleDragging() {
    if (toastIngredient.isBeingDragged) {
        toastIngredient.x = mouseX + toastIngredient.offSetX;
        toastIngredient.y = mouseY + toastIngredient.offSetY;

        toastIngredient.x = constrain(toastIngredient.x, 0, width);
        toastIngredient.y = constrain(toastIngredient.y, 0, height);
    }
}
// for cheese
function cheeseHandleDragging() {
    if (cheeseIngredient.isBeingDragged) {
        cheeseIngredient.x = mouseX + cheeseIngredient.offSetX;
        cheeseIngredient.y = mouseY + cheeseIngredient.offSetY;

        cheeseIngredient.x = constrain(cheeseIngredient.x, 0, width);
        cheeseIngredient.y = constrain(cheeseIngredient.y, 0, height);
    }
}
// for sliced cheese
function slicedCheeseHandleDragging() {
    if (slicedCheeseIngredient.isBeingDragged) {
        slicedCheeseIngredient.x = mouseX + slicedCheeseIngredient.offSetX;
        slicedCheeseIngredient.y = mouseY + slicedCheeseIngredient.offSetY;

        slicedCheeseIngredient.x = constrain(slicedCheeseIngredient.x, 0, width);
        slicedCheeseIngredient.y = constrain(slicedCheeseIngredient.y, 0, height);
    }
}
// for butter
function butterHandleDragging() {
    if (butterIngredient.isBeingDragged) {
        butterIngredient.x = mouseX + butterIngredient.offSetX;
        butterIngredient.y = mouseY + butterIngredient.offSetY;

        butterIngredient.x = constrain(butterIngredient.x, 0, width);
        butterIngredient.y = constrain(butterIngredient.y, 0, height);
    }
}
// checks if the knife is going off screen
function isOffScreen() {
    if (knifeIngredient.x < 0 || knifeIngredient.x > width || knifeIngredient.y < 0 || knifeIngredient.y > height) {
        return true;
    }
    else {
        return false;
    }
}
// checks if the knife overlaps with the bread
function breadCheckOverlap() {
    let d = dist(knifeIngredient.x, knifeIngredient.y, breadIngredient.x, breadIngredient.y);
    if (d < knifeIngredient.size/2 + breadIngredient.size/2) {
        breadIngredient = false;
        toastIngredient.x = width/6;
        toastIngredient.y = height/2;
    }
}
// checks if the knife overlaps with the cheese
function cheeseCheckOverlap() {
    let d = dist(knifeIngredient.x, knifeIngredient.y, cheeseIngredient.x, cheeseIngredient.y);
    if (d < knifeIngredient.size/2 + cheeseIngredient.size/2) {
        cheeseIngredient = false;
        slicedCheeseIngredient.x = width/3;
        slicedCheeseIngredient.y = height/1.8;
    }
}
// checks if the bowl can appear and what happens when the bowl appears
function bowlAppear() {
    if (breadIngredient === false && cheeseIngredient === false) {
        push();
        fill(255);
        strokeWeight(2);
        rect(200, 170, 630, 60, 20);
        textSize(22);
        fill(159, 51, 51);
        textAlign(CENTER, CENTER);
        text("Drag all of the ingredients into the bowl to complete your dish!", 515, 200);
        pop();
        image(bowl, bowlIngredient.x, bowlIngredient.y, bowlIngredient.size);
        bowlIngredient.x = width/1.5;
        bowlIngredient.y = height/2;
    }
}
// checks if all of the ingredients are placed inside of the bowl to create a grilled cheese
function grilledCheeseCheckOverlap() {
    let toastIngredientDist = dist(toastIngredient.x, toastIngredient.y, bowlIngredient.x, bowlIngredient.y);
    let slicedCheeseIngredientDist = dist(slicedCheeseIngredient.x, slicedCheeseIngredient.y, bowlIngredient.x, bowlIngredient.y);
    let butterIngredientDist = dist(butterIngredient.x, butterIngredient.y, bowlIngredient.x, bowlIngredient.y);
    if (toastIngredientDist < toastIngredient.size/2 && slicedCheeseIngredientDist < slicedCheeseIngredient.size/2 && butterIngredientDist < butterIngredient.size/2) {
        state = "food";
    }
}
// ending state, presenting the player with their meal and a sign off
function food() {
    displayImages();
    knifeIngredient = false;
    toastIngredient = false;
    slicedCheeseIngredient = false;
    butterIngredient = false;
    grilledCheeseIngredient.x = width/2.2;
    grilledCheeseIngredient.y = height/2;
    bowlIngredient = false;
    push();
    fill(255);
    strokeWeight(3);
    rect(200, 170, 630, 60, 20);
    textSize(40);
    fill(159, 51, 51);
    textAlign(CENTER, CENTER);
    text("Congratulations, enjoy your meal!", 515, 200);
    pop();
    push();
    fill(255);
    strokeWeight(3);
    rect(220, 270, 590, 60, 20);
    textSize(40);
    fill(159, 51, 51);
    textAlign(CENTER, CENTER);
    text("Refresh the page to play again!", 515, 300);
    pop();
}

// Mouse related functions

// checks if the mouse overlaps witht the knife
function mouseIsInsideknifeIngredient() {
    let d = dist(mouseX, mouseY, knifeIngredient.x, knifeIngredient.y);
    if (d < knifeIngredient.size) {
        return true;
    }
    else {
        return false;
    }
}
// checks if the mouse overlaps witht the bread
function mouseIsInsidebreadIngredient() {
    let d = dist(mouseX, mouseY, breadIngredient.x, breadIngredient.y);
    if (d < breadIngredient.size) {
        return true;
    }
    else {
        return false;
    }
}
// checks if the mouse overlaps witht the toast
function mouseIsInsidetoastIngredient() {
    let d = dist(mouseX, mouseY, toastIngredient.x, toastIngredient.y);
    if (d < toastIngredient.size) {
        return true;
    }
    else {
        return false;
    }
}
// checks if the mouse overlaps witht the cheese
function mouseIsInsidecheeseIngredient() {
    let d = dist(mouseX, mouseY, cheeseIngredient.x, cheeseIngredient.y);
    if (d < cheeseIngredient.size) {
        return true;
    }
    else {
        return false;
    }
}
// checks if the mouse overlaps witht the sliced cheese
function mouseIsInsideslicedCheeseIngredient() {
    let d = dist(mouseX, mouseY, slicedCheeseIngredient.x, slicedCheeseIngredient.y);
    if (d < slicedCheeseIngredient.size) {
        return true;
    }
    else {
        return false;
    }
}
// checks if the mouse overlaps witht the butter
function mouseIsInsidebutterIngredient() {
    let d = dist(mouseX, mouseY, butterIngredient.x, butterIngredient.y);
    if (d < butterIngredient.size) {
        return true;
    }
    else {
        return false;
    }
}
// checks if the mouse overlaps with each ingredient and if the mouse is pressed while doing so
function mousePressed() {
    if (knifeIngredient.active && mouseIsInsideknifeIngredient()) {
        knifeIngredient.isBeingDragged = true;
        knifeIngredient.offSetX = knifeIngredient.x - mouseX;
        knifeIngredient.offSetY = knifeIngredient.y - mouseY;
    }
    if (breadIngredient.active && mouseIsInsidebreadIngredient()) {
        breadIngredient.isBeingDragged = true;
        breadIngredient.offSetX = breadIngredient.x - mouseX;
        breadIngredient.offSetY = breadIngredient.y - mouseY;
    }
    if (toastIngredient.active && mouseIsInsidetoastIngredient()) {
        toastIngredient.isBeingDragged = true;
        toastIngredient.offSetX = toastIngredient.x - mouseX;
        toastIngredient.offSetY = toastIngredient.y - mouseY;
    }
    if (cheeseIngredient.active && mouseIsInsidecheeseIngredient()) {
        cheeseIngredient.isBeingDragged = true;
        cheeseIngredient.offSetX = cheeseIngredient.x - mouseX;
        cheeseIngredient.offSetY = cheeseIngredient.y - mouseY;
    }
    if (slicedCheeseIngredient.active && mouseIsInsideslicedCheeseIngredient()) {
        slicedCheeseIngredient.isBeingDragged = true;
        slicedCheeseIngredient.offSetX = slicedCheeseIngredient.x - mouseX;
        slicedCheeseIngredient.offSetY = slicedCheeseIngredient.y - mouseY;
    }
    if (butterIngredient.active && mouseIsInsidebutterIngredient()) {
        butterIngredient.isBeingDragged = true;
        butterIngredient.offSetX = butterIngredient.x - mouseX;
        butterIngredient.offSetY = butterIngredient.y - mouseY;
    }

    // checks if the state is title then it will transition to simulation upon clicking the screen
    if (state === "title") {
        state = "simulation";
    }
}
// checks if the mouse is released upon interacting with each ingredient
function mouseReleased() {
    if (knifeIngredient.isBeingDragged && knifeIngredient.x > width/2.5) {
        knifeIngredient.isBeingDragged = false;
        knifeIngredient.offSetX = 0;
        knifeIngredient.offSetY = 0;
    }
    if (breadIngredient.isBeingDragged && breadIngredient.x > width/8) {
        breadIngredient.isBeingDragged = false;
        breadIngredient.offSetX = 0;
        breadIngredient.offSetY = 0;
    }
    if (toastIngredient.isBeingDragged && toastIngredient.x > width/6) {
        toastIngredient.isBeingDragged = false;
        toastIngredient.offSetX = 0;
        toastIngredient.offSetY = 0;
    }
    if (cheeseIngredient.isBeingDragged && cheeseIngredient.x > width/3) {
        cheeseIngredient.isBeingDragged = false;
        cheeseIngredient.offSetX = 0;
        cheeseIngredient.offSetY = 0;
    }
    if (slicedCheeseIngredient.isBeingDragged && slicedCheeseIngredient.x > width/2.5) {
        slicedCheeseIngredient.isBeingDragged = false;
        slicedCheeseIngredient.offSetX = 0;
        slicedCheeseIngredient.offSetY = 0;
    }
    if (butterIngredient.isBeingDragged && butterIngredient.x > width/2) {
        butterIngredient.isBeingDragged = false;
        butterIngredient.offSetX = 0;
        butterIngredient.offSetY = 0;
    }
}
