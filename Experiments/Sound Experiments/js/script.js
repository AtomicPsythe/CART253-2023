/**
 * Sound Experiments
 * Foti Aivaliklis
 */

"use strict";

// REINTRODUCING SOUND VIDEO
// let barkSFX;

// P5 OSCILLATOR VIDEO
// let oscillator; 
// let angle = 0;

let synth;

/**
 * Description of preload
*/
function preload() {
    // REINTRODUCING SOUND VIDEO
    // barkSFX = loadSound("assets/sounds/bark.wav");
}


/**
 * Description of setup
*/
function setup() {
    createCanvas(600, 600);
    userStartAudio();

    // P5 OSCILLATOR VIDEO
    // oscillator = new p5.Oscillator(440, "sine");
    // oscillator.amp(0.2);

    synth = new p5.PolySynth();
}


/**
 * Description of draw()
*/
function draw() {
    background(0);

    // REINTRODUCING SOUND VIDEO
    // let newRate = map(mouseX, 0, width, -3, 3);
    // barkSFX.rate(newRate);

    // P5 OSCILLATOR VIDEO
    // let newFreq = map(mouseY, height, 0, 0, 880);
    // let sinAngle = sin(angle);
    // let newFreq = map(sinAngle, -1, 1, 0, 2000);
    // oscillator.freq(newFreq);

    // angle = angle + 0.1;

    // push();
    // textSize(32);
    // textAllign(LEFT, CENTER);
    // fill(255);
    // text(newFreq, 100, height/2);
    // pop();

    // let newAmp = map(mouseX, 0, width, 0, 1);
    // oscillator.amp(newAmp);
}

function mousePressed() {
    // REINTRODUCING SOUND VIDEO
    // barkSFX.loop();

    // P5 OSCILLATOR VIDEO
    // oscillator.start();

    synth.play("C4", 1, 0, 1);
}

// function mouseReleased() {
//     oscillator.stop();
// }