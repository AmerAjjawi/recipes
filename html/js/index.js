//grab elements
const images = [...document.querySelectorAll(".slider")];
console.log(images);
let counter = 0;

//set function to hide and display images
function displaySlide(index) {
    images.forEach(item => {
        item.style.display = "none";
    });
    images[index].style.display = "block";
}

//function to move slide forward
function moveSlide() {
    counter = (counter + 1) % images.length;
    displaySlide(counter);
}

//function to move slide back
function moveSlideBack() {
    counter = (counter - 1 + images.length) % images.length;
    displaySlide(counter);
}

//add button
document.getElementById("forwardBtn").addEventListener("click", moveSlide);

document.getElementById("backwardBtn").addEventListener("click", moveSlideBack);
