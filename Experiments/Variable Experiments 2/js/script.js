/**
 * Variable Experiments 2
 * Foti Aivaliklis
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let me = {
    x: 0,
    y: 250,
    //w: 30,
    h: 100,
    speed: 1, 
    fill: 250
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
    background(0);
    colorMode(HSL);
}


/**
 * Description of draw()
*/
function draw() {
    // rainbow gradient (its gay btw)
    //let hue = map(me.x, 0, width, 255, 0);
    //stroke(hue, 50, 50);
    //line(me.x, me.y, me.x, me.y - me.h);
    //me.x = me.x + me.speed;

    // makes a thin line move quickly across the screen
    //stroke(me.fill.r, me.fill.g, me.fill.b);
    //line(me.x, me.y, me.x, me.y - me.h);

    // makes a seizure like square
    //me.fill.r = random(0, 255);
    //me.fill.g = random(0, 255);
    //me.fill.b = random(0, 255);
    //fill(me.fill.r, me.fill.g, me.fill.b);
    //rect(me.x, me.y, me.h);

    // gradient
    //stroke(me.fill);
    //line(me.x, me.y, me.x, me.y - me.h);
    // update my color
    //me.fill = me.fill - 0.5;

    // update my position
    //me.x = me.x + me.speed;
}
// makes a full screen rainbow
function setBackgroundToRainbowGradient() {
    let gradient = drawingContext.createLineartGradient(0, 0, width, height);
    gradient.addColorStop(0, "red");
    gradient.addColorStop(1/6, "orange");
    gradient.addColorStop(2/6, "yellow");
    gradient.addColorStop(3/6, "green");
    gradient.addColorStop(4/6, "blue");
    gradient.addColorStop(5/6, "indigo");
    gradient.addColorStop(1, "violet");
    drawingContext.fillstyle = gradient
    drawingContext.fillRect(0, 0, width, height);
};