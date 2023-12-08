var images = ['imeasges/image1.jpg'];
var index = 0;

function showImage() {
    var divElement = document.querySelector('.news');
    divElement.style.backgroundImage = 'url(' + images[index] + ')';
}

function nextImage() {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    showImage();
}

window.onload = function() {
    showImage();
    setInterval(nextImage, 5000); 
};
