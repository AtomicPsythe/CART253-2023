/**
 * Object Oriented Programming Experiments
 * Foti Aivaliklis
 */

"use strict";

let garden = {
    // array that creates the flowers
    flowers: [],
    // how many flowers are made
    numFlowers: 100, 
    // creates the grass
    grassColor: {
        r: 120,
        g: 180,
        b: 120
    }
};

/**
 * Description of setup
*/
function setup() {
    createCanvas(600, 600);

    // creates our flowers by counting up to the number of flowers
    for (let i = 0; 1 < garden.numFlowers; i++) {
        let x = random(0, width);
        let y = random(0, height);
        let size = random(50, 80);
        let stemLength = random(50, 100);
        let petalColor = {
            r: random(100, 255),
            g: random(100, 255),
            b: random(100, 255)
        };
        // creates new flower
        let flower = new Flower();
        // adds flowers to the array
        garden.flowers.push(flower);
    }
}

/**
 * Description of draw()
*/
function draw() {
    background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b);

    for (let i = 0; i < garden.flowers.length; i++) {
        let flower = garden.flowers[i];
        flower.display();
    }
}