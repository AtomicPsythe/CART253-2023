/**
 * Arrays Experiments
 * Foti Aivaliklis
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

// INTERMEDIATE FUNCTIONS VIDEO
// let user = {
//     x: 0, 
//     y: 0,
//     size: 100
// };

// // foods
// let food1;
// let food2;
// let food3;
// let food4;
// let food5;
// let food6;

// INTRODUCING ARRAYS VIDEO
// let school = [];
// let schoolSize = 1;

let circle = {
    x: 0,
    y: 0,
    size: 100,
    trail: [],
    trailSize: 20
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
    createCanvas(600, 600);
// INTRODUCING ARRAYS VIDEO
    // createCanvas(600, 600);

    // // create 4 fish positioned randomly
    // for (let i = 0; i < schoolSize; i++) {
    //     let fish = createFish(random(0, width), random(0, height));
    //     school.push(fish);
    // }

// INTERMEDIATE FUNCTIONS VIDEO
    // createCanvas(windowWidth, windowHeight);

    // food1 = createFood(250, windowHeight/2);
    // food2 = createFood(350, windowHeight/2);
    // food3 = createFood(450, windowHeight/2);
    // food4 = createFood(550, windowHeight/2);
    // food5 = createFood(650, windowHeight/2);
    // food6 = createFood(750, windowHeight/2);
}

// INTRODUCING ARRAYS VIDEO
// function createFish(x, y) {
//     let fish = {
//         x: x, 
//         y: y,
//         size: 50, 
//         vx: 0,
//         vy: 0,
//         speed: 2
//     };
//     return fish;
// }

// INTERMEDIATE FUNCTIONS VIDEO
// function createFood(x, y) {
//     let food = {
//         x: x, 
//         y: y, 
//         size: 50,
//         eaten: false
//     };
//     return food;
// }

/**
 * Description of draw()
*/
function draw() {
    background(0);

    circle.x = mouseX;
    circle.y = mouseY;

    for (let i = 0; i < circle.trail.length; i++) {
        let position = circle.trail[i];
        ellipse(position.x, position.y, circle.size);
    }

    ellipse(circle.x, circle.y, circle.size);

    let newTrailPosition = {
        x: circle.x,
        y: circle.y,
    };
    circle.trail.push(newTrailPosition);

    if (circle.trail.length > circle.trailSize) {
        circle.trail.shift();
    }
// INTRODUCING ARRAYS VIDEO
    // background(0);

    // for (let i = 0; i < school.length; i++) {
    //     moveFish(school[i]);
    //     displayFish(school[i]);
    // }

// INTERMEDIATE FUNCTIONS VIDEO
    // background(0);

    // // moves the user with the mouse
    // moveUser();

    // // check whether the user has eaten the food
    // checkFood(food1);
    // checkFood(food2);
    // checkFood(food3);
    // checkFood(food4);
    // checkFood(food5);
    // checkFood(food6);

    // // display the user and the foods
    // displayUser();
    // displayFood(food1);
    // displayFood(food2);
    // displayFood(food3);
    // displayFood(food4);
    // displayFood(food5);
    // displayFood(food6);
}

// INTRODUCING ARRAYS VIDEO
// function moveFish(fish) {
//     let change = random(0, 1);
//     if (change < 0.05) {
//         fish.vx = random(-fish.speed, fish.speed);
//         fish.vy = random(-fish.speed, fish.speed);
//     }

//     fish.x = fish.x + fish.vx;
//     fish.y = fish.y + fish.vy;

//     fish.x = constrain(fish.x, 0, width);
//     fish.y = constrain(fish.y, 0, height);
// }

// function displayFish(fish) {
//     push();
//     fill(200, 100, 100);
//     noStroke();
//     ellipse(fish.x, fish.y, fish.size);
//     pop();
// }

// function mousePressed() {
//     let fish = createFish(mouseX, mouseY);
//     school.push(fish);
// }

// INTERMEDIATE FUNCTIONS VIDEO
// function moveUser() {
//     user.x = mouseX;
//     user.y = mouseY;
// }

// function checkFood(food) {
//     if (!food.eaten) {
//         let d = dist(user.x, user.y, food.x, food.y);
//         if (d < user.size/2 + food.size/2) {
//             food.eaten = true;
//         }
//     }
// }

// function displayUser() {
//     push();
//     fill(255);
//     ellipse(user.x, user.y, user.size);
//     pop();
// }

// function displayFood(food) {
//     if (!food.eaten) {
//         push();
//         fill(255, 100, 100);
//         ellipse(food.x, food.y, food.size);
//         pop();
//     }
// }

function mousePressed() {

}