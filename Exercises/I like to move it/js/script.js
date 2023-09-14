/**
 * Activity 3: I like to move it!
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
    y: 250, 
    size: 100,
    speed: 1,
    fill: 255
};
let circle2 = {
    x: 500,
    y: 250, 
    size: 75,
    speed: 2, 
    fill: 255
};
let circle3 = {
    x: 250,
    y: 0, 
    size: 100,
    speed: 2, 
    fill: 255
};

/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {
    createCanvas(500, 500);
    noStroke();
}


/**
 * Description of draw()
*/
function draw() {
    // Background 
    background(bg.r, bg.g, bg.b);
    bg.r = bg.r + 1;

    // White square that moves according to mouse movements
    //rectMode(CENTER);
    //rect(mouseX, mouseY, 100, 100);

    // Circle 1
    circle1.x = circle1.x + 1;
    circle1.x = constrain(circle1.x, 0, width/2);
    fill(circle1.fill);
    ellipse(circle1.x, circle1.y, circle1.size);

    // Circle 2
    circle2.x = circle2.x + -1;
    circle2.x = constrain(circle2.x, width/2, width);
    fill(circle2.fill);
    ellipse(circle2.x, circle2.y, circle2.size);

    // Circle 3
    fill(circle3.fill);
    ellipse(circle3.x, circle3.y, circle3.size);
}