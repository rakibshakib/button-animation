const button = document.getElementById("click-btn");
const inputBox = document.getElementById("inputBox");

let timeoutId;
function mouseTranformation(event) {
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


inputBox.addEventListener("change", (event)=> {
  console.log("changing event ", event);
  console.log(inputBox.value)
});

function onchangeInputHandler(event){
  console.log("event", event)
}
