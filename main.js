
/*********************** Element selector *************************************/
// to select a DOM element
const selectElement = (element) => {
    return document.querySelector(element);
};

/*********************** Navigation menu ************************************/
// toggles the 'open' class when the hamburger menu icon is clicked
let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');
menuToggler.addEventListener('click', () => {
    body.classList.toggle('open');
});

/*********************** Gallery Slideshow ********************************/
var slideIndex = 1;
showSlides(slideIndex);

// <-previous and next-> arrows to change slideshow image
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// dot shows current slideshow image + changes the slideshow image when clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// displays and hides the images when an arrow or dot is clicked
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("galleryImage");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}