/**
 * Exercise 3: I like to move it!
 * Foti Aivaliklis
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let backgroundShade = 0;
let bg = {
    r: 0,
    b: 0, 
    g: 0
}
let circle1 = {
    x: 0,
    y: 66, 
    size: 130,
    speed: 2, 
    fill: 200
};
let circle4 = {
    x: 500,
    y: 165, 
    size: 68,
    speed: 2, 
    fill: 100
};
let circle2 = {
    x: 0,
    y: 250, 
    size: 100,
    speed: 2,
    fill: 255
};
let circle5 = {
    x: 0,
    y: 367, 
    size: 115,
    speed: 2, 
    fill: 100
};
let circle3 = {
    x: 500,
    y: 462, 
    size: 75,
    speed: 2, 
    fill: 150
};
let circle6 = {
    x: 250,
    y: 254, 
    size: 110,
    speed: 2,
    fill: 255
}

/**
 * Does nothing.
*/
function preload() {

}

/**
 * Creates the canvas and ensures the shapes have no outline.
*/
function setup() {
    createCanvas(500, 500);
    noStroke();
}

/**
 * Draws the 6 circles and displays the various size, colour, movement changes.
*/
function draw() {
    // Background 
    background(bg.r, bg.g, bg.b);
    bg.r = map(circle2.size, 100, width, 0, 255); 
    
    // Circle 2 (first in the list as its the backmost circle)
    circle2.x = circle2.x + -1;
    circle2.x = constrain(circle2.x, width/2, width);
    circle2.size = circle2.size + 0.75;
    circle2.size = constrain(circle2.size, 0, width);
    fill(circle2.fill);
    ellipse(circle2.x, circle2.y, circle2.size);

    // Circle 6 (circle that responds to mouseX and mouseY commands)
    circle6.fill = map(mouseX, 0, width, 0, 255);
    fill(circle6.fill);
    ellipse(circle6.x, circle6.y, circle6.size);

    // Circle 1 (the frontmost circle)
    circle1.x = circle1.x + 1;
    circle1.x = constrain(circle1.x, 0, width/2);
    fill(circle1.fill);
    ellipse(circle1.x, circle1.y, circle1.size);

    // Circle 4 (the frontmost circle)
    circle4.x = circle4.x + -1;
    circle4.x = constrain(circle4.x, width/2, width);
    fill(circle4.fill);
    ellipse(circle4.x, circle4.y, circle4.size);

    // Circle 5 (the frontmost circle)
    circle5.x = circle5.x + 1;
    circle5.x = constrain(circle5.x, 0, width/2);
    fill(circle5.fill);
    ellipse(circle5.x, circle5.y, circle5.size);

    // Circle 3 (the frontmost circle)
    circle3.x = circle3.x + -1;
    circle3.x = constrain(circle3.x, width/2, width);
    fill(circle3.fill);
    ellipse(circle3.x, circle3.y, circle3.size);
}