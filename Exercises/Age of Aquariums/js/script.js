/**
 * Exercise 4: Age of Aquariums
 * Foti Aivaliklis
 * 
 * An interesting exercise that involves the user avoiding circles that are fish while simultaneously spawning more to encounter different and unique endings!
 */

"use strict";

// defining the variables
let school = [];
let schoolSize = 2;
let fish;
let shark;
let ocean;

let user = {
    x: 0, 
    y: 0,
    size: 100
}

// different fish color options
let colorArray = [100, 125, 150, 175, 200, 225];

let state = "title" // can be title, simulation, ending1, ending2

/**
 * Defines the image variables
*/
function preload() {
    shark = loadImage("assets/images/shark.png");
    ocean = loadImage("assets/images/ocean2.jpg");
}


/**
 * Creates the canvas and the two starting fish
*/

function setup() {
    createCanvas(600, 600);

    // create 2 fish positioned randomly
    for (let i = 0; i < schoolSize; i++) {
        let fish = createFish(random(0, width), random(0, height));
        school.push(fish);
    }
    colorArray.push(250);
}

// the function to create the new fish spawned
function createFish(x, y) {
    let fish = {
        x: x, 
        y: y,
        size: 50, 
        color: random(colorArray),
        vx: 0,
        vy: 0,
        speed: 2
    };
    return fish;
}

/**
 * Calls the different state functions to enter different phases of the simulation
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

// the beginning state of the simulation that shows the title and the instructions
function title() {
    background(ocean);
    push();
    fill(255);
    stroke(0, 0, 139);
    strokeWeight(8);
    rect(80, 165, 440, 70);
    pop();
    push();
    textSize(45);
    fill(179, 98, 0);
    textAlign(CENTER, CENTER);
    text("Age of Aquariums", width/2, height/3);
    pop();
    push();
    fill(255);
    stroke(0, 0, 139);
    strokeWeight(5);
    rect(30, 280, 540, 110);
    pop();
    push();
    textSize(20);
    fill(179, 98, 0);
    textAlign(CENTER, CENTER);
    text("Click the screen to begin the simulation!", width/2, height/2);
    textSize(15);
    text("As the shark, your goal is to avoid the fish circles, \n while using the keyboard keys to spawn more to not disrupt \n the relationship between both groups. If you do... special things will happen...!", width/2, height/1.7);
    pop();
}

// the simulation itself
function simulation() {
    push();
    background(ocean);
    pop();
    mouseImage();
    for (let i = 0; i < school.length; i++) {
        moveFish(school[i]);
        displayFish(school[i]);
        specialColor(school[i]);
    }
    checkOverlap();
}

// the special ending 1 that happens if you overlap the cursor with the circles
function ending1() {
    background(ocean);
    push();
    fill(255);
    stroke(0, 0, 139);
    strokeWeight(5);
    rect(40, 265, 520, 70);
    pop();
    push();
    textSize(20);
    fill(179, 98, 0);
    textAlign(CENTER, CENTER);
    text("The peace between the fish and the sharks has ended, \n this means war! AAAAAAAAAAAAAA", width/2, height/2);
    pop();
}

// the special ending 2 that happens if you spawn a circle of a certain color
function ending2() {
    background(ocean);
    push();
    fill(255);
    stroke(0, 0, 139);
    strokeWeight(5);
    rect(40, 265, 520, 70);
    pop();
    push();
    textSize(20);
    fill(179, 98, 0);
    textAlign(CENTER, CENTER);
    text("Woah, a rare species of fish has spawned! \n Let's let it roam free to not make it go extinct.", width/2, height/2);
    pop();
}

// presents the mouse image as a shark
function mouseImage() {
    image(shark, mouseX, mouseY, 100, 100);
}

// how the fish move independently
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

// checks if the mouse overlaps with the fish
function checkOverlap(fish) {
    for (let i = 0; i < school.length; i++) {
        let fish = school[i];
        let d = dist(mouseX, mouseY, fish.x, fish.y);
        if (d < (user.size/2) + fish.size/2) {
            school.splice(i, 1);
            state = "ending1";
        }
    }
}

// displays each new fish spawned
function displayFish(fish) {
    push();
    noStroke();
    fill(fish.color);
    ellipse(fish.x, fish.y, fish.size);
    pop();
}

// checks if a special coloured fish gets spawned
function specialColor(fish) {
    if (fish.color === 250) {
        state = "ending2";
    }
}

// keyPressed function for spawning new fish
function keyPressed() {
    let fish = createFish(random(0, width), random(0, height));
    school.push(fish);
}

// mousePressed function for transitioning from the title to the simulation state
function mousePressed() {
    if (state === "title") {
        state = "simulation";
    }
}