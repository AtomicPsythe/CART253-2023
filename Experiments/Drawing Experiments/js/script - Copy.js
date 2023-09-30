/**
 * Drawing Experiments
 * Foti Aivaliklis
 * 
 * Experimenting with p5's drawing and color functions.
 * 
 * Currently draws a face.
 */

"use strict";

/**
 * Description of preload
*/
function preload() {

}


/**
 * Draws a face on the canvas.
*/
function setup() {

    createCanvas(500, 500);

    // set the background to mint
    background(191, 255, 199);

    // draw a flesh colored head
    fill(250, 200, 200); // the flesh color
    ellipse(250, 250, 200, 200); // the head

    // draw the eyes (black as the void of space)
    fill(0, 0, 255);
    ellipse(200, 250, 30, 30);
    ellipse(300, 250, 30, 30);

    // draw the mouth
    strokeWeight(10); // line thickness
    line(200, 300, 300, 300); // line itself

    /**stroke(255, 255, 0); 

    noStroke();

    ellipseMode(CORNER);
    fill(127, 0, 200, 100);
    ellipse(250, 250, 100, 100);

    fill(137, 0, 200, 100);
    ellipse(250, 250, 80, 80);

    fill(147, 0, 200, 100);
    ellipse(250, 250, 60, 60);

    fill(157, 0, 200, 100);
    ellipse(250, 250, 40, 40);

    fill(167, 0, 200, 100);
    ellipse(250, 250, 20, 20); */


    /**rectMode(CENTER);
    rect(250, 250, 100, 100);
    rect(250, 250, 80, 80);
    rect(250, 250, 60, 60); */

    /**point(250, 250);

    rect(0, 0, 250, 250);

    line(0, 0, 500, 500);

    line(500, 0, 0, 500);

    ellipse(250, 250, 100, 100); */

}


/**
 * Does nothing.
*/
function draw() {

}