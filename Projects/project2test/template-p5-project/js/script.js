/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let script = {
    intro: [
        {
            type: "speech",
            characterImage: "Stan",
            charName: "Alarm",
            text: "Pzzzz... pzzzz... pzzzz... pzz..." // 0
        },
        {
            type: "speech",
            characterImage: "Joe",
            charName: "Cleo",
            text: "*yawns* My goodness it’s way too early to be awake for school. It doesnt help that I didn't get \n much sleep last night… I got too caught up in a novel I was reading. I guess it’s my fault for \n that but still..." // 1
        },
        {
            type: "speech",
            characterImage: "Joe",
            charName: "Cleo",
            text: "Now the question is, should I be a good student and succumb to waking up early or just treat \nmyself and sleep in a little bit more?" // scene 2
        },
        {
            type: "choice",
            choices: [
                {
                    text: "Sleep in, you deserve it",
                    nextScene: "sad",
                    button: {
                        x: 100,
                        y: 100,
                        w: 200,
                        h: 40
                    }
                },
                {
                    text: "Wake up and take on the day",
                    nextScene: "sad",
                    button: {
                        x: 100,
                        y: 150,
                        w: 200,
                        h: 40
                    }
                }
            ]
        }
    ],
    love: [
        {
            type: "speech",
            text: "Great!"
        },
        {
            type: "speech",
            text: "Let's get married?"
        },
        {
            type: "transition",
            nextScene: "intro"
        }
    ],
    sad: [
        {
            type: "speech",
            text: "Oh no!"
        },
        {
            type: "speech",
            text: "Let's get married?"
        },
        {
            type: "transition",
            nextScene: "intro"
        }
    ]
}

let currentScene = "intro";
let currentDialog = 0;


/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
    createCanvas(600, 400);
}


/**
Description of draw()
*/
function draw() {
    background(255);

    let line = script[currentScene][currentDialog];

    // if (line.characterImage !== undefined) {
    //     image(line.characterImage, 100, 100);
    // }

    if (line.type === "speech") {
        // Display the dialog and the next button etc.
        text(line.charName, 100, 80);
        text(line.text, 100, 100);
        textWrap(WORD);
    }
    else if (line.type === "choice") {
        for (let i = 0; i < line.choices.length; i++) {
            let choice = line.choices[i];
            rect(choice.button.x, choice.button.y, choice.button.w, choice.button.h)
            textAlign(CENTER, CENTER);
            text(choice.text, choice.button.x + choice.button.w / 2, choice.button.y + choice.button.h / 2);
        }
    }
    else if (line.type === "transition") {
        currentScene = line.nextScene;
        currentDialog = 0;
    }
}

function mousePressed() {
    let line = script[currentScene][currentDialog];

    if (line.type === "speech") {
        currentDialog++;
    }
    else if (line.type === "choice") {
        // Work out which choice they clicked!
        for (let i = 0; i < line.choices.length; i++) {
            let choice = line.choices[i];
            if (mouseX > choice.button.x &&
                mouseX < choice.button.x + choice.button.w &&
                mouseY > choice.button.y &&
                mouseY < choice.button.y + choice.button.h) {
                // It was clicked
                currentScene = choice.nextScene;
                currentDialog = 0;
            }
        }
    }
}