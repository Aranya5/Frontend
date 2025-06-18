// This is a new JavaScript file
console.log("New file created"); 
var score = 8;
console.log("Mid-lele skills: "+ (score > 0 && score < 10));
var timeRemaining = 7;
var energy = 10;
console.log("Game over: " + (timeRemaining == 0 || energy == 0));
// EVEN ODD
var num1 = 2;
var num2 = 5;
var test1 = num1%2;
var test2 = num2%2;
var result1 = (test1 == 0);
var result2 = (test2 == 0);
console.log("Is "+num1+" an even number? " +result1);
console.log("Is "+num2+" an even number? " +result2);

// style with loops

var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < 7; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}