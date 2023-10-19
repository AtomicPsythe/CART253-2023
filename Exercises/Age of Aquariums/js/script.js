/**
 * Exercise 4: Age of Aquariums
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let school = [];
let schoolSize = 10;
let shark;
let state = "title" // can be title, simulation, ending1, ending2

/**
 * Description of preload
*/
function preload() {
    // school = loadImage("assets/images/fish.png");
    // shark = loadImage("assets/images/shark.png");
}


/**
 * Description of setup
*/
function createFish(x, y) {
    let fish = {
        x: x, 
        y: y,
        size: 50, 
        vx: 0,
        vy: 0,
        speed: 2
    };
    return fish;
}

function setup() {
    createCanvas(600, 600);

    // create 4 fish positioned randomly
    for (let i = 0; i < schoolSize; i++) {
        let fish = createFish(random(0, width), random(0, height));
        school.push(fish);
    }

    for (let i = 0; i < school.length; i++) {
        moveFish(school[i]);
        displayFish(school[i]);
    }

    createFish(5, 10);
}


/**
 * Description of draw()
*/
function draw() {
    background(0);

    if (state === "title") {
        title();
    }
    else if (state === "simulation") {
        simulation();
    }
    else if (state === "ending1") {
        ending1();
    }
    else if (state === "ending2") {
        ending2();
    }
}

function title() {
    push();
    textSize(40);
    fill(0, 250, 250);
    textAlign(CENTER, CENTER);
    text("Age of Aquariums", width/2, height/3);
    pop();
    push();
    textSize(20);
    fill(250, 250, 250);
    textAlign(CENTER, CENTER);
    text("Click the screen to begin the simulation!", width/2, height/2);
}

function simulation() {
    moveFish();
    displayFish();
}

function moveFish(fish) {
    let change = random(0, 1);
    if (change < 0.05) {
        fish.vx = random(-fish.speed, fish.speed);
        fish.vy = random(-fish.speed, fish.speed);
    }

    fish.x = fish.x + fish.vx;
    fish.y = fish.y + fish.vy;

    fish.x = constrain(fish.x, 0, width);
    fish.y = constrain(fish.y, 0, height);
}

function displayFish(fish) {
    push();
    fill(200, 100, 100);
    noStroke();
    ellipse(fish.x, fish.y, fish.size);
    pop();
}

function keyPressed() {
    let fish = createFish(mouseX, mouseY);
    school.push(fish);
}

function mousePressed() {
    if (state === "title") {
        state = "simulation";
    }
}