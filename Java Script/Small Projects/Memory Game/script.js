const moves = document.getelemantById("moves-count");
const timeValue = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const gameContainer = document.querySelector(".game-container");
const result = document.getElementById(".result");
const controls = document.querySelector(".controls-container");

let cards;
let interval;
let firstcard = false;
let secondcard = false;

//iteams array for storing
const item =[
  {}
]