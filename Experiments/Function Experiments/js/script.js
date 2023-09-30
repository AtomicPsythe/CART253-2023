/**
 * Function Experiments
 * Foti Aivaliklis
 * 
 */

"use strict";

// let circle = {
//     x: 0,
//     y: 250, 
//     size: 100, 
//     vx: 1, 
//     vy: 0
// };

// let circle = {
//     x: 250, 
//     y: 250,
//     size: 100, 
//     vx: 0, 
//     vy: 0 
// };

// let hello = {
//     string: "Hello, world!",
//     x: 0,
//     y: 250,
//     vx: 5, 
//     vy: 1,
// };

// let circle = {
//     x: 0,
//     y: 250,
//     size: 100, 
//     vx: 0, 
//     vy: 0, 
//     speed: 2
// };

// let state = "title"; // possible states are: title, animation, ending

// let bg = 0;

let circle = {
    x: 250, 
    y: 250,
    size: 100, 
    vx: 0,
    vy: 0, 
    speed: 5
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

    // AUTOMATED MOVEMENT VIDEO
    // circle.vx = circle.speed;
    // circle.vy = circle.speed;
    
    // STATES VIDEO
    // circle.vx = circle.speed;
    // textSize(32);
    // textAlign(CENTER, CENTER);
    // FUNCTIONS WITH RETURN VALUES
    // let hotCelsius = toCelsius(100);
    // console.log("100 degress Fahrenheit is ${hotCelsius} degrees Celsius.");

    // let coldCelsius = toCelsius(10);
    // console.log("10 degress Fahrenheit is ${coldCelsius} degrees Celsius.");
    // reset();
}


/**
 * Description of draw()
*/
function draw() {
    background(0);

    // AUTOMATED MOVEMENT VIDEO

    let dx = circle.x - mouseX;
    let dy = circle.y - mouseY;

    if (dx < 0) {
        circle.vx = circle.speed;
    }
    else if (dx > 0) {
        circle.vy = circle.speed;
    }

    if (dy < 0) {
        circle.vy = circle.speed;
    }
    else if (dy > 0) {
        circle.vy = -circle.speed;   
    }

    // let change = random();
    // if (change < 0.01) {
    //     circle.vx = random(-circle.speed, circle.speed);
    //     circle.vy = random(-circle.speed, circle.speed);
    // }

    circle.x = circle.x + circle.vx;
    circle.y = circle.y + circle.vy;

    ellipse(circle.x, circle.y, circle.size);

    // KEYBOARD INPUT VIDEO
    // textAlign(CENTER, CENTER);
    // textSize(64);
    // fill(255);
    // text(key, width/2, height/2);

    // handleInput();
    // move();
    // display();

    // STATES
    // if (state === "title") {
    //     title();
    // }
    // else if (state === "animation") {
    //     animation();
    // }
    // else if (state === "ending") {
    //     ending();
    // };

    // TEXT VIDEO

    // hello.x = hello.x + hello.vx;
    // hello.y = hello.y + hello.vy;

    // textAlign(CENTER, CENTER);
    // textSize(64);
    // fill(200, 50, 200);
    // text(hello.string, hello.x, hello.y);

    // FUNCTIONS WITH RETURN VALUES VIDEO
//     move();
//     checkOffScreen();
//     display();

// function move() {
//     circle.x = circle.x + circle.vx;
//     circle.y = circle.y + circle.vy;
// };
// function reset() {
//     circle.x = 250;
//     circle.y = 250;
//     circle.vx = random(-10, 10);
//     circle.vy = random(-10, 10);
// };

// function checkOffScreen() {
//     let offScreen = circleIsOffScreen();
//     if (offScreen) {
//         reset();
//     }
// };

// function circleIsOffScreen() {
//     if (circle.x < 0 || circle.x > width || circle.y < 0 || circle.y > height) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// function display() {
//     ellipse(circle.x, circle.y, circle.size);
// };

    // let x = random(0, width);
    // let y = random(0, height);

    // ellipse(x, y, 100);
    // FUNCTIONS WITH PARAMETERS VIDEO
//     parallels(100, 100, 5, 1, 100, 1);
//     parallels(50, 50, 10, 2, 20, 10);
//     parallels(200, 200, 15, 7, 3, 20);
//     parallels(312, 257, 20, 0.5, 300, 1);
// }

// function parallels(x, y, numLines, lineWidth, lineHeight, lineSpacing) {
//     // let x = 50; (declared by using the x and y parameters)
//     // let y = 250;
//     for (let i = 0; i < numLines; i++) { // 20 changes how manny get produced (or how many times the code gets looped)
//         noStroke();
//         fill(255);
//         rectMode(CENTER);
//         rect(x, y, lineWidth, lineHeight);
//         x = x + lineSpacing; // changes how spaced out the rectangles are
// }
//     // FUNCTIONS VIDEO
//     move();
//     wrap();
//     display();
// };

// function display() {
//     fill(255, 0, 0);
//     ellipse(circle.x, circle.y, circle.size);
// }

// function move() {
//     circle.x = circle.x + circle.vx;
//     circle.y = circle.y + circle.vy;
// };

// function wrap() {
//     if (circle.x > width) {
//         reset();
//         // circle.x = 0;  // replaces the following 3 lines with reset();
//         // circle.vx = circle.vx + 2;
//         // circle.size = circle.size + 5;
//     };
// }

// // Functions Video
// function reset() {
//     circle.x = 0;
//     circle.vx = circle.vx + 2;
//     circle.vy = circle.vy - 0.25;
//     circle.size = circle.size + 5;
// }

// // Functions videeo
// function mousePressed() {
//     reset();
//     // circle.x = 0; // replaces the following 3 lines with reset();
//     // circle.vx = circle.vx + 2;
//     // circle.size = circle.size + 5;
};

// STATES VIDEO
// function keyPressed() {
//     if (state === "title") {
//         state = "animation";
//     }
// };

// function title() {
//     // title
//     fill(255);
//     text("Life", width/2, height/2);
// };

// function animation() {
//     // animation
//     circle.x = circle.x + circle.vx;
//     circle.y = circle.y + circle.vy;

//     if (circle.x > width) {
//         state = "ending";
//     }

//     ellipse(circle.x, circle.y, circle.size);
// };

// function ending() {
//     // ending
//     fill(127);
//     text("It's all over", width/2, height/2);
// };

// FUNCTIONS WITH RETURN VALUES
// function toCelsius(fahrenheit) {
//     let celsius = (fahrenheit - 32) * 5/9;
//     return celsius;
// }

// KEYBOARD INPUT VIDEO
//function keyPressed() {
//     bg = random(0, 255);
    // if (key === "a") {
    //     bg = 0;
    // }
    // else if (key === "b") {
    //     bg = 127;
    // }
    // else if (key === "c") {
    //     bg = 255;
    // }
    // if (keyCode === UP_ARROW) {
    //     bg = bg + 10;
    //     bg = constrain(bg, 0, 255);
    // }
    // else if (keyCode === DOWN_ARROW) {
    //     bg = bg - 10;
    //     bg = constrain(bg, 0, 255);
    // }
//}

// function handleInput() {
//     if (keyIsDown(LEFT_ARROW)) {
//         circle.vx = -circle.speed;
//     }
//     else if (keyIsDown(RIGHT_ARROW)) {
//         circle.vx = circle.speed;
//     }
//     else {
//         circle.vx = 0;
//     }
//     if (keyIsDown(UP_ARROW)) {
//         circle.vy = -circle.speed;
//     }
//     else if (keyIsDown(DOWN_ARROW)) {
//         circle.vy = circle.speed;
//     }
//     else {
//         circle.vy = 0;
//     }
// }

// function move() {
//     circle.x = circle.x + circle.vx;
//     circle.y = circle.y + circle.vy;
// }

// function display() {
//     ellipse(circle.x, circle.y, circle.size);
// }