/**
 * Exercise 4: Age of Aquariums
 * Foti Aivaliklis
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let school = [];
let schoolSize = 5;
let fish;
let shark;
let ocean;

let state = "title" // can be title, simulation, ending1, ending2

/**
 * Description of preload
*/
function preload() {
    fish = loadImage("assets/images/fish.png");
    shark = loadImage("assets/images/shark.png");
}


/**
 * Description of setup
*/

function setup() {
    createCanvas(600, 600);

    // create 4 fish positioned randomly
    for (let i = 0; i < schoolSize; i++) {
        let fish = createFish(random(0, width), random(0, height));
        school.push(fish);
    }
}

function createFish(x, y) {
    let fish = {
        x: x, 
        y: y,
        size: 50, 
        color: random(0, 250),
        vx: 0,
        vy: 0,
        speed: 2
    };
    return fish;
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
    push();

    pop();
    // mouseImage();
    for (let i = 0; i < school.length; i++) {
        moveFish(school[i]);
        displayFish(school[i]);
    }
    checkOverlap();
}

function ending1() {
    push();
    textSize(40);
    fill(0, 250, 250);
    textAllign(CENTER, CENTER);
    text("The peace between the fish and the sharks has ended, this means war!", width/2, height/3);
    pop();
}

function ending2() {
    push();
    textSize(40);
    fill(0, 250, 250);
    textAlign(CENTER, CENTER);
    text("Woah, a rare species of fish has spawned!", width/2, height/1.5);
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

function checkOverlap(fish) {
    // push();
    // if(dist(mouseX, mouseY, fish.x, fish.y)>20) {
    //     state = "ending1";
    // }
    // pop();
}

function displayFish(fish) {
    push();
    noStroke();
    fill(fish.color);
    ellipse(fish.x, fish.y, fish.size);
    pop();
    // push();
    // fill(200, 100, 100);
    // noStroke();
    // ellipse(fish.x, fish.y, fish.size);
    // pop();
}

function specialColor(fish) {
    if (fill(fish.color) = color(black)) {
        state = "ending2";
    }
}

function keyPressed() {
    let fish = createFish(random(0, width), random(0, height));
    school.push(fish);
}

function mousePressed() {
    if (state === "title") {
        state = "simulation";
    }
}