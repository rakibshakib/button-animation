// window.addEventListener('DOMContentLoaded', (event) => {
//     var audio = document.getElementById('backgroundAudio');

//     // Hide audio controls
//     audio.controls = false;

//     // Set visibility to none
//     // audio.style.visibility = 'hidden';
//   });

const button = document.getElementById("click-btn");
console.log("button: ", button);
let timeoutId;
function mouseTranformation(event) {
  console.log({ event });
  var randomX = Math.floor(Math.random() * 501) - 250; // Adjust the range based on desired movement
  var randomY = Math.floor(Math.random() * 401) - 200;
  button.style.transform = "translate(" + randomX + "px, " + randomY + "px)";
  clearStyle();
}

const clearStyle = () => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    button.style.transform = "translate(" + 0 + "px, " + 0 + "px)";
  }, 1000);
};

button.addEventListener("mouseenter", mouseTranformation);
button.addEventListener("click", mouseTranformation);
button.addEventListener("mouseover", mouseTranformation);
button.addEventListener("mouseout", mouseTranformation);
