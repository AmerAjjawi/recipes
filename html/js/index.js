//grab elements and create a variable for the images
const images = [...document.querySelectorAll(".displayed-img")];
//initialize counter
let counter = 0;

//set a function to loop through images and hide them and show only a specific one
function displaySlide(index) {
    images.forEach(item => {
        //hide all images
        item.style.display = "none";
    })
    //display a specific image
    images[index].style.display = "block";
}

//set a function to move forward
function moveForward() {
    counter = (counter + 1) % images.length;
    displaySlide(counter);
}