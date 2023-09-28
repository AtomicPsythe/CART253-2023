/**
 * Conditionals
 * Foti Aivaliklis
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let backgroundShade = 0;
// every circle until the loops beyond counting video
// let circle = {
//     x: 0,
//     y: 250,
//     size: 100, 
//     speed: 1
// }

let displayCircle = false;

let caterpillar = {
    x: 100,
    y: 250,
    segmentSize: 50
}

// circle for loops beyond counting video
// let circle = {
//     x: undefined, 
//     y: undefined,
//     size: 100
// }

let dangerZone = {
    x: 250, 
    y: 250,
    size: 150
};

// circle for mouse input video
// let circle = {
//     x: 250, 
//     y: 250, 
//     size: 100
// };

let bg = {
    r: 0,
    g: 0,
    b: 0
};

// circle for movement video
// let circle = {
//     x: 250,
//     y: 250,
//     size: 100, 
//     vx: 0, // (velocity x and velocity y)
//     vy: 0,
//     speed: 5
// }

// intermediate drawing variables
// let angle = 0;
// let rectScale = 0;
//let clownImage;
let clown = {
    x: 250, 
    y: 250,
    size: 100, 
    image: undefined
};

/**
 * Description of preload
*/
function preload() {
    clownImage = loadImage("assets/images/clown.png");
}


/**
 * Description of setup
*/
function setup() {
    createCanvas(500, 500);

    // loops beyond counting video
    // circle.x = random(0, width);
    // circle.y = random(0, height);

    // let d = dist(circle.x, circle.y, dangerZone.x, dangerZone.y);
    // while (d < circle.size/2 + dangerZone.size/2) {
    //     circle.x = random(0, width);
    //     circle.y = random(0, height);
    //     d = dist(circle.x, circle.y, dangerZone.x, dangerZone.y);
    // }
}


/**
 * Description of draw()
*/
function draw() {
    background(0);

    clown.x = mouseX;
    clown.y = mouseY;

    imageMode(CENTER);
    image(clown.image, clown.x, clown.y, clown.size, clown.size);

    //image(clownImage, mouseX, mouseY);

    // intermediate drawing
    // push();
    // fill(255, 0, 0);
    // rectMode(CENTER);
    // translate(width/2, height/2);
    // rotate(angle);
    // scale(rectScale);
    // rect(0, 0, 100, 100);
    // pop();

    // angle = angle + 0.01;
    // rectScale = rectScale + 0.01;

    // push();
    // fill(255, 0, 0);
    // rect(0, 0, 100, 100);
    // pop();

    // push();
    // translate(200, 100);
    // fill(0, 255, 0);
    // rect(0, 0, 100, 100);
    // pop();

    // push();
    // translate(0, 200);
    // fill(0, 0, 255);
    // rect(0, 0, 100, 200);
    // pop();

    // push();
    // fill(255, 0, 0);
    // stroke(0, 255, 255);
    // strokeWeight(10);
    // rect(100, 100, 100, 100);
    // pop();

    // push();
    // fill(0, 0, 255);
    // rect(300, 100, 100, 100);
    // pop();

    // movement video
    // if (mouseX < circle.x) {
    //     circle.vx = -circle.speed;
    // }
    // else {
    //     circle.vx = circle.speed;
    // }

    // if (mouseY < circle.y) {
    //     circle.vy = -circle.speed;
    // }
    // else {
    //     circle.vy = circle.speed;
    // }

    // circle.x = circle.x + circle.vx;
    // circle.y = circle.y + circle.vy;

    // ellipse(circle.x, circle.y, circle.size);
    
    // danger zone (from loops beyong counting video)
    // noFill();
    // stroke(255, 0, 0);
    // ellipse(dangerZone.x, dangerZone.y, dangerZone.size);

    // fill(255);
    // noStroke();
    // ellipse(circle.x, circle.y, circle.size);
    
    //background(backgroundShade);
    //circle.x = circle.x + circle.speed;
    //ellipse(circle.x, circle.y, circle.size);

    // loops video
    
    // loops video
    //background(0)
    //noStroke();
    //fill(100, 200, 100);

    // let x = caterpillar.x;
    // let numSegments = 5;
    // let segmentsDrawn = 0;

    // while (segmentsDrawn < numSegments) {
    //     ellipse(x, caterpillar.y, caterpillar.segmentSize);
    //     x = x + 40;
    //     segmentsDrawn = segmentsDrawn + 1; // cam also be written as segmentsDrawm++;
    // }

    //let x = caterpillar.x;
    //let numSegments = 10;

    //for (let i = 0; i < numSegments; i++) { // replaces segmentsDrawn by i
        //ellipse(x, caterpillar.y, caterpillar.segmentSize);
        //x = x + 40;
    //}

    //ellipse(x, caterpillar.y, caterpillar.segmentSize);
    //x = x + 40;

    //ellipse(x, caterpillar.y, caterpillar.segmentSize);
    //x = x + 40;

    //ellipse(x, caterpillar.y, caterpillar.segmentSize);
    //x = x + 40;

    //ellipse(x, caterpillar.y, caterpillar.segmentSize);
    //x = x + 40;

    //ellipse(x, caterpillar.y, caterpillar.segmentSize);

    // booleans video
    //background(0);

    //if (mouseIsPressed) {
        //displayCircle = true;
    //}

    //if (displayCircle) { // mouseIsPressed, keyIsPressed can also be used here
        //ellipse(250, 250, 100, 100);
    //}

    // more conditionals video
    //fill(255, 255, 255);

    //if (circle.x > width/3 && circle.x < 2 * width/3) {
        //fill(255, 0, 0);
    //}    

    //if (mouseX < width/3) {
        //fill(255, 0, 0);
    //}
    //else if (mouseX < 2 * width/3) {
        //fill(0, 255, 0);
    //}
    //else {
        //fill(0, 0, 255);
    //}

    // conditionals video 1
    //if (circle.x > width) { // > (larger than), < (smaller than), >= (larger than or equal to), <= (smaller than or equal to), === (equal to), !== (not equal to)
        //circle.speed = -circle.speed;
    //}

    //if (circle.x < 0) {
        //circle.speed = -circle.speed;
    //}

    //if (mouseY < height/2) {
        //fill(255, 0, 0);
    //}

    //if (mouseY > height/2) {
        //fill(0, 0, 255);
    //}
}

// for mouse input video
// function mousePressed() { // can also write mouseMoved or mouseDragged or mouseWheel
//     // when you click on the screen the circle will move to its location automatically
//     // circle.x = mouseX;
//     // circle.y = mouseY;

//     // bg.r = random(0, 255);
//     // bg.g = random(0, 255);
//     // bg.b = random(0, 255);
// }