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
    size: 100,
    vx: 0,
    vy: 0, 
    speed: 5,
    fill: {
        r: 255,
        g: 0, 
        b: 0
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

/**
 * Description of preload
*/
function preload() {

}


/**
 * Creating the canvas, stating that covid19 will move from left to right and that it will start at a random y position
*/
function setup() {
    createCanvas(windowWidth, windowHeight);

    covid19.y = random(0, height)
    covid19.vx = covid19.speed;

    noCursor();
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

    // Covid 19 movement
    covid19.x = covid19.x + covid19.vx;
    covid19.y = covid19.y + covid19.vy;

    if (covid19.x > width) {
        covid19.x = 0;
        covid19.y = random(0, height);
    }

    // User movement
    user.x = mouseX;
    user.y = mouseY;

    if (mouseX > user.x) {
        user.vx = 1;
    }
    else if (mouseX < user.x) {
        user.vx = -1;
    }

    if (mouseY > user.y) {
        user.vy = 1;
    }
    else if (mouseY < user.y) {
        user.vy = -1;
    }

    user.x = user.x + user.vx;
    user.y = user.y + user.vy;

    ellipse(user.x, user.y, user.size);

    // Check for catching covid19
    let d = dist(user.x, user.y, covid19.x, covid19.y);
    if (d < covid19.size / 2 + user.size / 2) {
        noLoop();
    }

    // Display Covid 19
    fill(covid19.fill.r, covid19.fill.g, covid19.fill.b);
    ellipse(covid19.x, covid19.y, covid19.size);

    // Display user
    fill(user.fill);
    ellipse(user.x, user.y, user.size);
}