/**
 * Exercise 2: Dodge-em
 * Foti Aivaliklis
 * 
 * Improving or changing the COVID-19 “simulation” activity with a new interaction style, new visuals, and even a new meaning.
 */

"use strict";

let covid19 = {
    x: 0, 
    y: 250, 
    size: 200,
    vx: 0,
    vy: 0, 
    speed: 30,
    fill: {
        r: 0,
        g: 255, 
        b: 25
    }
};

let user = {
    x: 250,
    y: 250,
    size: 150, 
    vx: 0,
    vy: 0,
    fill: {
        r: 255,
        g: 255,
        b: 255
    }
}

let numStatic = 5000;
let textSizeNumber = 45;
let virus;
let font;
let person;

/**
<<<<<<< Updated upstream
 * Defining the variables and locations for the font, virus image, and user person image. 
=======
 * Defining the font, virus image, and person image for the simulation.
>>>>>>> Stashed changes
*/
function preload() {
    font = loadFont('assets/fonts/DeathMarkersDrip.otf');
    // Font from Font Space
    virus = loadImage('assets/images/virus.png');
    // Image from Worms and Germs Blog
    person = loadImage('assets/images/person.png');
    // Image from Creazilla
};


/**
 * Creating the canvas, stating that COVID-19 will move from left to right and that it will start at a random y position
*/
function setup() {
    createCanvas(windowWidth, windowHeight);

    covid19.y = random(0, height);
    covid19.vx = covid19.speed;
}

/**
<<<<<<< Updated upstream
 * Created the simulation by displaying and defining the user image and controls, the COVID-19 image and movement, and showing the consequences of catching/encountering the COVID-19 virus.
=======
 * The creation of the simulation displaying the background static, how the user controls themselves, and what happens when the user catches covid19
>>>>>>> Stashed changes
*/
function draw() {
    background(0);

    // Display static
    for (let i = 0; i < numStatic; i++) {
        let x = random(0, width);
        let y = random(0, height);
        stroke(255);
        point(x,y);
    }

    // Display controls
    textSize(textSizeNumber);
    text("Rules: Move your mouse while left clicking to move the user circle to avoid COVID-19!", 5, 10, windowWidth, windowHeight);

    // Display "User" name near the user image
    fill(255);
    stroke(255);
    textSize(40);
    text("User", user.x + 55, user.y + 55, user.size);

    // Displaying the virus image
    image(virus, covid19.x - covid19.size/2, covid19.y - covid19.size/2, covid19.size, covid19.size);

    // Displaying the user image
    image(person, user.x - user.size/2, user.y - user.size/2, user.size, user.size);

    // Covid 19 movement
    covid19.x = covid19.x + covid19.vx;
    covid19.y = covid19.y + covid19.vy;

    if (covid19.x > width) {
        covid19.x = 0;
        covid19.y = random(0, height);
    }
    if (covid19.y > height) {
        covid19.y = 0;
        covid19.x = random(width, 0);
<<<<<<< Updated upstream
    }
=======
    };
>>>>>>> Stashed changes

    // User movement + user movement when the mouse is pressed
    if (mouseX > user.x) {
        user.vx = 15;
    }
    else if (mouseX < user.x) {
        user.vx = -15;
    }

    if (mouseY > user.y) {
        user.vy = 15;
    }
    else if (mouseY < user.y) {
        user.vy = -15;
    }
    if (mouseIsPressed === true) {
        if (mouseX > user.x) {
            user.vx = 15;
        }
        else if (mouseX < user.x) {
            user.vx = -15;
        }
    
        if (mouseY > user.y) {
            user.vy = 15;
        }
        else if (mouseY < user.y) {
            user.vy = -15;
        }
    }
    else {
        if (mouseX > user.x) {
            user.vx = 0;
        }
        else if (mouseX < user.x) {
            user.vx = 0;
        }
    
        if (mouseY > user.y) {
            user.vy = 0;
        }
        else if (mouseY < user.y) {
            user.vy = 0;
        }
    };
    user.x = user.x + user.vx;
    user.y = user.y + user.vy;

    // Check for catching COVID-19 and what happens when the user catches COVID-19
    let d = dist(user.x, user.y, covid19.x, covid19.y);
    if (d < covid19.size / 2 + user.size / 2) {
        push();
        filter(INVERT);
        fill(230, 88, 112);
        noStroke();
        textSize(150);
        textFont(font);
        textAlign(CENTER);
        text("You caught COVID-19 :(", 50, 350, windowWidth, windowHeight);
        noLoop();
        pop();
    }
}