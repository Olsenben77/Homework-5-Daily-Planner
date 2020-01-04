//Pseudo
//Each input box changes with time = moment.js
//Present is grey
//Past is Red
//Future is Green
//Time up top is changed

//Variables to reference Dom Elements
var nineElement = document.getElementById("Nine");
var tenElement = document.getElementById("Ten");
var elevenElement = document.getElementById("Eleven");
var twelveElement = document.getElementById("Twelve");
var oneElement = document.getElementById("One");
var twoElement = document.getElementById("Two");
var threeElement = document.getElementById("Three");
var fourElement = document.getElementById("Four");
var fiveElement = document.getElementById("Five");
var dateElement = document.getElementById("Date");
var buttonElement = document.getElementsByClassName("btn btn-primary btn-lg");

//jquerythis

function saveActivity() {
  var input = $(this)
    .siblings("input")
    .val()
    .trim();
  var inputKey = $(this)
    .siblings("input")
    .attr("data-name");
  console.log(inputKey);
  if (input !== "") {
    window.localStorage.setItem(inputKey, input);
  }
}
for (var i = 0; i < buttonElement.length; i++) {
  buttonElement[i].onclick = saveActivity;
}
moment().format("dddd");
moment().calendar();
console.log(buttonElement);
