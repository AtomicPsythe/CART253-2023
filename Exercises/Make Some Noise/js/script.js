/**
 * Exercise 6 - Make Some Noise
 * Author Name
 * 
 * 
 */

"use strict";

// The balls
let balls = [];

// F-minor
let notes = [`F3`,`G3`,`Ab4`,`Bb4`,`C4`,`Db4`,`Eb4`,`F4`];

// setup() just creates the canvas
function setup() {
  createCanvas(600,600);
  userStartAudio();
}

// draw() is a description of draw() goes here.
function draw() {
  background(0);

  // a for loop that allows the balls to move, bounce off of the sides of the canvas, and be displayed
  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    ball.move();
    ball.bounce();
    ball.display();
  }
}

function mousePressed() {
  createBall(mouseX,mouseY);
}

function createBall(x,y) {
  let note = random(notes);
  let ball = new Ball(x,y,note);
  balls.push(ball);
}

function keyPressed() {
    
}