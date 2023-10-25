/**
 * Object Oriented Programming Experiments
 * Foti Aivaliklis
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let garden = {
    // array that creates the flowers
    flowers: [],
    // how many flowers are made
    numFlowers: 20, 
    // creates the grass
    grassColor: {
        r: 120,
        g: 180,
        b: 120
    }
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

    // creates our flowers by counting up to the number of flowers
    for (let i = 0; 1 < garden.numFlowers; i++) {
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
        displayFlower(flower);
    }
}