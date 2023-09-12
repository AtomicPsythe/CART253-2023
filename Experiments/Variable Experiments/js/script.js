/**
 * Variable Experiments
 * Foti Aivaliklis
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let backgroundShade = 0;
//let circleX = 0;
//let circleY = 250;
//let circleSize = 100;
//let circleSpeed = 2; //having a negative number here makes it move from right to left
//let circleAcceleration = 0.25;
// "let" declares a variable

let circle = {
    x: 0,
    y: 250,
    size: 200,
    speed: 2
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
    //createCanvas(windowWidth, windowHeight); // windowWidth and windowHeight makes the canvas the size of the whole webpage
    createCanvas(500, 500);
}


/**
 * Description of draw() // can also be called an update function - executed 60 times per second
*/
function draw() {
    //background(255, 0, 0); // can also be an image
    //rectMode(CENTER);
    //rect(mouseX, mouseY, 100, 100); // mouseX and mouseY changes every time as you move your mouse
    
    background(backgroundShade);
    //circleSize = circleSize * 1.01;
    circle.x += circle.speed; //+= means adds to, whatever is before the symbol, can also just use +
    //circleSpeed += circleAcceleration;
    ellipse(circle.x, circle.y, circle.size);

    console.log(`circleX: ${circleX}, circleY: ${circleY}, circleSize: ${circleSize}, circleSpeed: ${circleSpeed}`);
}