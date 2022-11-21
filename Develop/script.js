// // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// // the code isn't run until the browser has finished rendering all the elements
// // in the html.
var description = document.querySelector("#description");
var saveButton = document.getElementsByClassName('#saveBtn');

// saveButton.addEventListener("click", function(event) {
//   event.preventDefault();

// var storage1 = {
//   description: description.value
// };
// console.log(storage1)
// localStorage.setItem("storage1", JSON.stringify(storage1));
// var msgData = JSON.parse(localStorage.getItem("#description"));
// save.textContent = save.firstName

// });


//sets and splays current time 
var time1 = dayjs().format('MMMM  dddd ');
var time2 = dayjs().format('DD ');
$('#currentDay').text(time1 + "the " + time2);

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
//Controls time blocks background color with cascading if loop
$(document).ready(readyFn);
function readyFn(jQuery) {
  var hour = dayjs().format('HH');
  if (hour < 9) {
    $('#9').css({ 'background-color': '#77dd77' });
  } if (hour === 9) {
    $('#9').css({ 'background-color': '#ff6961' });
  } if (hour > 9) {
    $('#9').css({ 'background-color': '#d3d3d3' });
  } if (hour < 10) {
    $('#10').css({ 'background-color': '#77dd77' });
  } if (hour === 10) {
    $('#10').css({ 'background-color': '#ff6961' });
  } if (hour > 10) {
    $('#10').css({ 'background-color': '#d3d3d3' });
  } if (hour < 11) {
    $('#11').css({ 'background-color': '#77dd77' });
  } if (hour === 11) {
    $('#11').css({ 'background-color': '#ff6961' });
  } if (hour > 11) {
    $('#11').css({ 'background-color': '#d3d3d3' });
  } if (hour < 12) {
    $('#12').css({ 'background-color': '#77dd77' });
  } if (hour === 12) {
    $('#12').css({ 'background-color': '#ff6961' });
  } if (hour > 12) {
    $('#12').css({ 'background-color': '#d3d3d3' });
  } if (hour < 13) {
    $('#13').css({ 'background-color': '#77dd77' });
  } if (hour === 13) {
    $('#13').css({ 'background-color': '#ff6961' });
  } if (hour > 13) {
    $('#13').css({ 'background-color': '#d3d3d3' });
  } if (hour < 14) {
    $('#14').css({ 'background-color': '#77dd77' });
  } if (hour === 14) {
    $('#14').css({ 'background-color': '#ff6961' });
  } if (hour > 14) {
    $('#14').css({ 'background-color': '#d3d3d3' });
  } if (hour < 15) {
    $('#15').css({ 'background-color': '#77dd77' });
  } if (hour === 15) {
    $('#15').css({ 'background-color': '#ff6961' });
  } if (hour > 15) {
    $('#15').css({ 'background-color': '#d3d3d3' });
  } if (hour < 16) {
    $('#16').css({ 'background-color': '#77dd77' });
  } if (hour === 16) {
    $('#16').css({ 'background-color': '#ff6961' });
  } if (hour > 16) {
    $('#16').css({ 'background-color': '#d3d3d3' });
  } if (hour < 17) {
    $('#17').css({ 'background-color': '#77dd77' });
  } if (hour === 17) {
    $('#17').css({ 'background-color': '#ff6961' });
  } if (hour > 17) {
    $('#17').css({ 'background-color': '#d3d3d3' });
  }
}