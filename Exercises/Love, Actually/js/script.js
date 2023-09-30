/**
 * Exercise 3: Love, Actually
<<<<<<< Updated upstream
 * Foti Aivaliklis
=======
 * Student Name
>>>>>>> Stashed changes
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let circle1 = {
    x: undefined, 
    y: 250,
<<<<<<< Updated upstream
    size: 100,
=======
    size: 120,
>>>>>>> Stashed changes
    vx: 0, 
    vy: 0,
    speed: 3
};

let circle2 = {
    x: undefined, 
    y: 250,
<<<<<<< Updated upstream
    size: 100,
    vx: 0, 
    vy: 0,
    speed: 3
};

// let sasaki;
// let miyano;

let state = "title"; // Can be: title, simulation, love, sadness
=======
    size: 120,
    vx: 0, 
    vy: 0,
    speed: 2
};

let dangerArea = {
    x: 20,
    y: 20,
    size: 5
};

let state = "title"; // Can be: title, simulation, love, sadness or topLeftQuadrant

let sasaki;
let miyano;
let sakura;
let sparkle;
let button;
>>>>>>> Stashed changes

/**
 * Description of preload
*/
function preload() {
<<<<<<< Updated upstream
    // sasaki = loadImage("assets/images/sasaki_cropped.png");
    // miyano = loadImage("assets/images/miyano_cropped");
=======
    sasaki = loadImage("assets/images/sasaki_cropped.png");
    miyano = loadImage("assets/images/miyano_cropped.png");
    sakura = loadImage("assets/images/sakura_cropped.png");
    sparkle = loadImage("assets/images/shine.png");
>>>>>>> Stashed changes
}


/**
 * Description of setup
*/
function setup() {
    createCanvas(500, 500);
    setupCircles();
<<<<<<< Updated upstream
=======
    secretButton();
}

function secretButton() {
    button = createButton("Click here!");
    button.position(280, 290);
    button.mousePressed(reset);
    button.hide();
}

function reset() {
    setupCircles();
    state = "simulation";
    button.hide();
>>>>>>> Stashed changes
}

function setupCircles() {
    // Position circles separated from one another
    circle1.x = width/3;
<<<<<<< Updated upstream
    circle2.x = 2*width/3;

    // Start circles moving in a random direction
    circle1.vx = random(-circle1.speed, circle1.speed);
    circle1.vy = random(-circle1.speed, circle1.speed);
=======
    circle1.y = height/3;
    circle2.x = 2*width/3;

    // Start circles moving in a random direction
>>>>>>> Stashed changes
    circle2.vx = random(-circle2.speed, circle2.speed);
    circle2.vy = random(-circle2.speed, circle2.speed);
}

/**
 * Description of draw()
*/
function draw() {
<<<<<<< Updated upstream
    background(0);
=======
    background(sakura);
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream

=======
    else if (state === "topLeftQuadrant") {
        checkTopLeftQuadrant();
    }
    handleInput();
>>>>>>> Stashed changes
}

function title() {
    push();
<<<<<<< Updated upstream
    textSize(64);
    fill(200, 100, 100);
    textAlign(CENTER, CENTER);
    text("Love?", width/2, height/2);
    pop();
=======
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
>>>>>>> Stashed changes
}

function simulation() {
    move();
    checkOffScreen();
    checkOverlap();
    display();
}

function love() {
    push();
    textSize(64);
<<<<<<< Updated upstream
    fill(255, 150, 150);
    textAlign(CENTER, CENTER);
    text("Love!", width/2, height/2);
    pop();
}

function sadness() {
    push();
    textSize(64);
    fill(150, 150, 255);
    textAlign(CENTER, CENTER);
    text(":(", width/2, height/2);
    pop();
=======
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
>>>>>>> Stashed changes
}

function move() {
    // Move the circles
    circle1.x = circle1.x + circle1.vx;
    circle1.y = circle1.y + circle1.vy;

<<<<<<< Updated upstream
=======
    let change = random();
    if (change < 0.1) {
        circle2.vx = random(-circle2.speed, circle2.speed);
        circle2.vy = random(-circle2.speed, circle2.speed);
    }
>>>>>>> Stashed changes
    circle2.x = circle2.x + circle2.vx;
    circle2.y = circle2.y + circle2.vy;
}

function checkOffScreen() {
    // Check if circles have gone offscreen
    if (isOffScreen(circle1) || isOffScreen(circle2)) {
        state = "sadness";
    }
}

function isOffScreen(circle) {
    if (circle.x < 0 || circle.x > width || circle.y < 0 || circle.y > height) {
        return true;
    }
    else {
        return false;
    }
}

function checkOverlap() {
    // Check if the circles overlap
    let d = dist(circle1.x, circle1.y, circle2.x, circle2.y);
    if (d < circle1.size/2 + circle2.size/2) {
        state = "love";
    }
}

function display() {
    // Display the circles
<<<<<<< Updated upstream
    // image(sasaki, circle1.x - circle1.size/2, circle1.y - circle1.size/2, circle1.size, circle1.size);
    // image(miyano, circle2.x - circle2.size/2, circle2.y - circle2.size/2, circle2.size, circle2.size);
    ellipse(circle1.x, circle1.y, circle1.size);
    ellipse(circle2.x, circle2.y, circle2.size);
}

function mousePressed() {
    if (state === "title") {
        state = "simulation";
    }
=======
    image(sasaki, circle1.x - circle1.size/2, circle1.y - circle1.size/2, circle1.size, circle1.size);
    image(miyano, circle2.x - circle2.size/2, circle2.y - circle2.size/2, circle2.size, circle2.size);
}

function checkTopLeftQuadrant() {
    if (circle1.x < width/2 && circle1.y < height/2) {
        push();
        textSize(15);
        fill(0);
        textAlign(CENTER);
        text("Looks like you have been given a second chance at love, try again!", 250, 300)
        pop();
        button.show();
    }
}

function mousePressed(){
    if (state === "title") {
        state = "simulation";
    }
    else if (state === "topLeftQuadrant") {
        state = "title";
    }
>>>>>>> Stashed changes
}