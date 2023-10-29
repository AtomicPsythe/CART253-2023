/**
 * Object Oriented Programming Experiments
 * Student Name
 * 
 * description
 * 
 */

"use strict";

// Our garden
let garden = {
  // An array to store the individual flowers
  flowers: [],
  // How many flowers in the garden
  numFlowers: 5,
  // An array to our the bees
  bees: [],
  // How many bees in the garden
  numBees: 5,
  // The color of the grass 
  grassColor: {
    r: 120,
    g: 180,
    b: 120
  }
};

let sky = {
  r: 159,
  g: 224, 
  b: 252
};

let sun = {
  x: 250,
  y: 340,
  maxHeight: 160,
  minHeight: 0,
  maxWidth: 600,
  minWidth: 0,
  size: 80,
  r: 250,
  g: 223,
  b: 107,
};

let cloudsInSky = [];
let timer = 0;

let state = "title" // can be title, simulation, ending1, ending2

// setup() creates the canvas and the flowers in the garden
function setup() {
  createCanvas(600, 600);

  // Create our flowers by counting up to the number of the flowers
  for (let i = 0; i < garden.numFlowers; i++) {
    // Create variables for our arguments for clarity
    let x = random(0, width);
    let y = random(height/3, height);
    let size = random(50, 80);
    let stemLength = random(50, 100);
    let petalColor = {
      r: random(100, 255),
      g: random(100, 255),
      b: random(100, 255)
    }
    // Create a new flower using the arguments
    let flower = new Flower(x, y, size, stemLength, petalColor);
    // Add the flower to the array of flowers
    garden.flowers.push(flower);
  }

  // Create our bees by counting up to the number of bees
  for (let i = 0; i < garden.numBees; i++) {
    // Create variables for our arguments for clarity
    let x = random(0, width);
    let y = random(0, height);
    // Create a new bee using the arguments
    let bee = new Bee(x, y);
    // Add the bee to the array of bees
    garden.bees.push(bee);
  }

  cloudsInSky.push(new Cloud());
  console.log(cloudsInSky);
}

// draw() displays our flowers
function draw() {
  if (state === "title") {
    title();
  }
  else if (state === "simulation") {
    simulation();
  }
  else if (state === "ending1") {
    ending1();
  }
  else if (state === "ending2") {
    ending2();
  }
}

function title() {
  background(240, 230, 140);
  push();
  fill(255);
  stroke(0, 0, 139);
  strokeWeight(8);
  rect(80, 165, 440, 70);
  pop();
  push();
  textSize(45);
  fill(179, 98, 0);
  textAlign(CENTER, CENTER);
  text("Juggle Garden", width/2, height/3);
  pop();
  push();
  fill(255);
  stroke(0, 0, 139);
  strokeWeight(5);
  rect(30, 280, 540, 110);
  pop();
  push();
  textSize(20);
  fill(179, 98, 0);
  textAlign(CENTER, CENTER);
  text("Click the screen to begin the simulation!", width/2, height/2);
  textSize(15);
  text("As the shark, your goal is to avoid the fish circles, \n while using the keyboard keys to spawn more to not disrupt \n the relationship between both groups. If you do... special things will happen...!", width/2, height/1.7);
  pop();
}

function simulation() {
  push();
  background(sky.r, sky.g, sky.b);
  // sky.b = mouseY;
  sky.b = map(mouseY, 0, 160, 160, 0);
  pop();

  // grass area
  push();
  noStroke();
  fill(0, 100, 0);
  rect(0, height/3, 600, 600);
  pop();

  // Loop through all the flowers in the array and display them
  for (let i = 0; i < garden.flowers.length; i++) {
    let flower = garden.flowers[i];
    // Check if this flower is alive
    if (flower.alive) {
      // Update the flower by shrinking it and displaying it
      flower.shrink();
      flower.display();
    }
  }

  // Loop through all the bees in the array and display them
  for (let i = 0; i < garden.bees.length; i++) {
    let bee = garden.bees[i];
    // Check if this flower is alive
    if (bee.alive) {
      // Shrink and move the bee
      bee.shrink();
      bee.move();

      // Goes through the entire flower array and try to pollinate the flowers!
      for (let j = 0; j < garden.flowers.length; j++) {
        let flower = garden.flowers[j];
        bee.tryToPollinate(flower);
      }

      // Display the bee
      bee.display();
    }
  }

  // the sun
  noStroke();
  fill(sun.r, sun.g, sun.b);
  ellipse(sun.x, sun.y, sun.size);
  sun.y = mouseY;
  sun.y = constrain(sun.y, sun.minHeight, sun.maxHeight);
  sun.x = mouseX;
  sun.x = constrain(sun.x, sun.minWidth, sun.maxWidth);

  deadFlowers();
}

// the special ending 1 that happens if you overlap the cursor with the circles
function ending1() {
  background(ocean);
  push();
  fill(255);
  stroke(0, 0, 139);
  strokeWeight(5);
  rect(40, 265, 520, 70);
  pop();
  push();
  textSize(20);
  fill(179, 98, 0);
  textAlign(CENTER, CENTER);
  text("The peace between the fish and the sharks has ended, \n this means war! AAAAAAAAAAAAAA", width/2, height/2);
  pop();
}


function deadFlowers() {
  if (Flower === 0) {
    state = "ending1"
  }
}

// keyPressed function for spawning new flower
function keyPressed() {
  for (let i = 0; i < garden.numFlowers; i++) {
    // Create variables for our arguments for clarity
    let x = random(0, width);
    let y = random(height/3, height);
    let size = random(50, 80);
    let stemLength = random(50, 100);
    let petalColor = {
      r: random(100, 255),
      g: random(100, 255),
      b: random(100, 255)
    }
    // Create a new flower using the arguments
    let flower = new Flower(x, y, size, stemLength, petalColor);
    // Add the flower to the array of flowers
    garden.flowers.push(flower);
  }
}
// mousePressed function for transitioning from the title to the simulation state
function mousePressed() {
  if (state === "title") {
      state = "simulation";
  }
}