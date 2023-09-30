/**
 * Messing around with the Setup and Draw functions
 * Foti Aivaliklis
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

    let x = 0; // the small square's starting point

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
    background(255, 100, 100);
    noStroke();

}


/**
 * Description of draw()
*/
function draw() {
    background(255, 100, 100);
    rect(x, 100, 100, 100);
    x += 3;
    if (x > width) {
        x = 0; // makes it loop multiple times
    }

}