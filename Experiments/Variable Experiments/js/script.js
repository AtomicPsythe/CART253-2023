/**
 * Variable Experiments
 * Foti Aivaliklis
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight); // windowWidth and windowHeight makes the canvas the size of the whole webpage
    
}


/**
 * Description of draw() // can also be called an update function
*/
function draw() {
    background(255, 0, 0); // can also be an image
    rectMode(CENTER);
    rect(mouseX, mouseY, 100, 100); // mouseX and mouseY changes every time as you move your mouse
}