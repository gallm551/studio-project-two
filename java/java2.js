
var scrollPosition = document.body.scrollTop,
boxPositions = [-350, -100, 50, 50];
function scrollDelta() {
var newScrollPosition = document.body.scrollTop,
  delta = newScrollPosition - scrollPosition;
scrollPosition = document.body.scrollTop;
return delta;
}
function moveCamera() {
var boxes = document.getElementsByClassName("box"),
  delta = scrollDelta();
  console.log(delta);
for (var i=0,l=boxes.length;i<l;i++) {
boxPositions[i] += parseInt(delta);
boxes[i].style["transform"] = "translateZ("+boxPositions[i]+"px)";
}
}
window.addEventListener("scroll", moveCamera, false);
//
// Defining variable based on unique ID for Audio 

var audio1 = document.getElementById("audioID");


function playAudio() {
  audio1.play();
}