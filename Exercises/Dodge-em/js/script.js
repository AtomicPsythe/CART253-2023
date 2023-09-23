/**
 * Exercise 2: Dodge em
 * Foti Aivaliklis
 * 
 * Improving or changing the COVID-19 “simulation” activity with a new interaction style, new visuals, and even a new meaning.
 */

"use strict";

let covid19 = {
    x: 0, 
    y: 250, 
    size: 150,
    vx: 0,
    vy: 0, 
    speed: 20,
    fill: {
        r: 0,
        g: 255, 
        b: 25
    }
};

let user = {
    x: 250,
    y: 250,
    size: 100, 
    fill: 255,
    vx: 0,
    vy: 0
}

let numStatic = 5000;
let textSizeNumber = 80;
let virus;
let font;

/**
 * Description of preload
*/
function preload() {
    font = loadFont('assets/fonts/DeathMarkersDrip.otf');
    virus = loadImage('assets/images/virus.png')
}


/**
 * Creating the canvas, stating that covid19 will move from left to right and that it will start at a random y position
*/
function setup() {
    createCanvas(windowWidth, windowHeight);

    covid19.y = random(0, height);
    covid19.vx = covid19.speed;

    // noCursor();
}


/**
 * Description of draw()
*/
function draw() {
    background(0);

    // Display static
    for (let i = 0; i < numStatic; i++) {
        let x = random(0, width);
        let y = random(0, height);
        stroke(255);
        point(x,y);
    }

    // Displaying the virus image
    image(virus, covid19.x - covid19.size/2, covid19.y - covid19.size/2, covid19.size, covid19.size)

    // Covid 19 movement
    covid19.x = covid19.x + covid19.vx;
    covid19.y = covid19.y + covid19.vy;

    if (covid19.x > width) {
        covid19.x = 0;
        covid19.y = random(0, height);
    }

    // User movement
    if (mouseX > user.x) {
        user.vx = 20;
    }
    else if (mouseX < user.x) {
        user.vx = -20;
    }

    if (mouseY > user.y) {
        user.vy = 20;
    }
    else if (mouseY < user.y) {
        user.vy = -20;
    }

    user.x = user.x + user.vx;
    user.y = user.y + user.vy;

    ellipse(user.x, user.y, user.size);

    // Check for catching covid19
    let d = dist(user.x, user.y, covid19.x, covid19.y);
    if (d < covid19.size / 2 + user.size / 2) {
        fill(230, 88, 112);
        noStroke();
        textSize(80);
        textFont(font);
        //text("You caught COVID-19 :(", 600, windowWidth / 12.78, windowHeight / 2);
        text("You caught COVID-19 :(", 550, 500);
        noLoop();
    }

    // Display Covid 19
    // fill(covid19.fill.r, covid19.fill.g, covid19.fill.b);
    // ellipse(covid19.x, covid19.y, covid19.size);

    // Display user
    let x = user.x;
    let numSegments = 3;

    for (let segmentsDrawn = 0; segmentsDrawn < numSegments; segmentsDrawn++) {
        ellipse(user.x, user.y, user.size);
    }
    // fill(user.fill);
    // ellipse(user.x, user.y, user.size);
}