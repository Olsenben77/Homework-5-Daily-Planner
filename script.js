//Variables to reference Dom Elements

var dateElement = document.getElementById("Date");
var buttonElement = document.getElementsByClassName("btn btn-primary btn-lg");

//Save data to local storage
function saveActivity() {
  var input = $(this)
    .siblings("input")
    .val()
    .trim();
  var inputKey = $(this)
    .siblings("input")
    .attr("data-name");

  if (input !== "") {
    window.localStorage.setItem(inputKey, input);
  }
}
for (var i = 0; i < buttonElement.length; i++) {
  buttonElement[i].onclick = saveActivity;
}
//Moment.js date on top of page
function LogIt(msg) {
  $("#Date").append(msg);
}

$(document).ready(function() {
  LogIt("It's&nbsp;" + moment().format("dddd, MMMM Do, h:mm:a") + " my dudes");

  //Input sections color change by hour
  function getExpireDate() {
    var currentHour = moment().hours();
    $("input").each(function() {
      var calendarHour = parseInt($(this).attr("id"));
      if (calendarHour === currentHour) {
        $(this).css("background", "red");
      } else if (calendarHour > currentHour) {
        $(this).css("background", "green");
      } else {
        $(this).css("background", "grey");
      }
    });
  }
  getExpireDate();
});
document.getElementById("9").innerHTML = localStorage.getItem("input");
document.getElementById("10").innerHTML = localStorage.getItem("input");
document.getElementById("11").innerHTML = localStorage.getItem("input");
document.getElementById("12").innerHTML = localStorage.getItem("input");
document.getElementById("13").innerHTML = localStorage.getItem("input");
document.getElementById("14").innerHTML = localStorage.getItem("input");
document.getElementById("15").innerHTML = localStorage.getItem("input");
document.getElementById("16").innerHTML = localStorage.getItem("input");
document.getElementById("17").innerHTML = localStorage.getItem("input");
