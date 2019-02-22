/* Comments */

var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

var currentTime = new Date().getHours();

      if (21 <= currentTime&&currentTime < 7) {
       window.location.href = "index-two.html"; 
     }
    
//Defining variable based on unique ID

var audio1 = document.getElementById("audioID");

//Example of an HTML Audio/Video Method

function playAudio() {
  audio1.play();
}