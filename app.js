const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const imgTag = document.getElementById("imgTag");
const imageContainer = document.getElementsByClassName("image-section");
const confusedImage = "./confued.gif";
const joyImages = "./joy.gif";
const sadImages = "./sad.gif";
const requestingImag = "./requesting.gif";
const yes = "./yes.gif";

console.log("button: ", noButton);
let timeoutId;
function mouseTranformation(event) {
  console.log({ event });
  imgTag.src = confusedImage;
  var randomX = Math.floor(Math.random() * 501) - 250; // Adjust the range based on desired movement
  var randomY = Math.floor(Math.random() * 401) - 200;
  noButton.style.transform = "translate(" + randomX + "px, " + randomY + "px)";
  clearStyle();
}

const clearStyle = () => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    imgTag.src = requestingImag;
    // noButton.style.transform = "translate(" + 0 + "px, " + 0 + "px)";
  }, 1000);
};

noButton.addEventListener("mouseenter", mouseTranformation);
noButton.addEventListener("click", mouseTranformation);
noButton.addEventListener("mouseover", mouseTranformation);
noButton.addEventListener("mouseout", mouseTranformation);

yesButton.addEventListener("click", () => {
  console.log("yes button click porche");
  imgTag.src = yes;
});


yesButton.addEventListener("mouseenter", () => {
  imgTag.src = joyImages;
  // clearStyle();
});
yesButton.addEventListener("mouseover", () => {
  imgTag.src = joyImages;
});
yesButton.addEventListener("mouseout", () => {
  clearStyle();
});
