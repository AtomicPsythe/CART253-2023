/**
 * Exercise 4: Age of Aquariums
 * Foti Aivaliklis
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

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

let colorArray = [100, 125, 150, 175, 200, 225];

let state = "title" // can be title, simulation, ending1, ending2

/**
 * Description of preload
*/
function preload() {
    shark = loadImage("assets/images/shark.png");
    ocean = loadImage("assets/images/ocean2.jpg");
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
    colorArray.push(250);
}

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

function mouseImage() {
    image(shark, mouseX, mouseY, 100, 100);
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
    for (let i = 0; i < school.length; i++) {
        let fish = school[i];
        let d = dist(mouseX, mouseY, fish.x, fish.y);
        if (d < (user.size/2) + fish.size/2) {
            school.splice(i, 1);
            state = "ending1";
        }
    }
}

function displayFish(fish) {
    push();
    noStroke();
    fill(fish.color);
    ellipse(fish.x, fish.y, fish.size);
    pop();
}

function specialColor(fish) {
    if (fish.color === 250) {
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