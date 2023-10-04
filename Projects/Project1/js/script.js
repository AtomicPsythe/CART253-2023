/**
 * Project 1
 * Foti Aivaliklis
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let shape = {
    x: undefined,
    y: undefined,
    size: 200,
    isBeingDragged: false,
    offSetX: 0,
    offSetY: 0,
    feedbackSizeChangeAmount: 5,
    active: true
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
    createCanvas(700, 300);
    shape.x = width/4;
    shape.y = height/2;
}


/**
 * Description of draw()
*/
function draw() {
    background(0);

    if (shape.active) {
        handleDragging();
        drawShape();
    }
    drawBoundary();
}

function handleDragging() {
    if (shape.isBeingDragged) {
        shape.x = mouse.x + shape.offSetX;
        shape.y = mouse.y + shape.offSetY;

        shape.x = constrain(shape.x, 0, width);
        shape.y = constrain(shape.y, 0, height);
    }
}

function drawShape() {
    push();
    fill(255, 0, 0);
    noStroke();
    ellipse(shape.x, shape.y, shape.size);
    pop();
}

function mouseIsInsideShape() {
    let d = dist(mouseX, mouseY, shape.x, shape.y);
    if (d < shape.size/2) {
        return true;
    }
    else {
        return false;
    }
}

function drawBoundary() {
    push();
    stroke(255);
    line(width/2, 0, width/2, height);
    pop();
}

function mousePressed() {
    if (shape.active && mouseIsInsideShape()) {
        shape.isBeingDragged = true;
        shape.offSetX = shape.x - mouse.x;
        shape.offSetY = shape.y - mouse.y;
        shape.size -= shape.feedbackSizeChangeAmount;
    }
}

function mouseReleased() {
    if (shape.isBeingDragged && shape.x > width/2) {
        shape.active = false;
    }
    else {
        shape.isBeingDragged = false;
        shape.size += shape.feedbackSizeChangeAmount;
        shape.offSetX = 0;
        shape.offSetY = 0;
    }
}