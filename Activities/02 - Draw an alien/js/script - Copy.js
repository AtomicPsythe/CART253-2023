/**
 * Activity 2: Drawing an Alien
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
 * Draws an alien face
*/
function setup() {

createCanvas(640, 480);

background(255, 100, 100);
noStroke();

// draw the body
fill(127);
ellipse(320, 400, 300, 200);

// draw the head
fill(100);
ellipse(320, 240, 250, 400);

// draw the eyes
fill(0);
ellipse(250, 240, 80, 250);
ellipse(390, 240, 80, 250);

// draw the nostrils
fill(0);
ellipse(300, 350, 10, 10);
ellipse(340, 350, 10, 10);

// draw the mouth
stroke(200, 0, 0);
strokeWeight(5);
rectMode(CENTER);
rect(320, 390, 100, 25);

}


/**
 * Description of draw()
*/
function draw() {

}