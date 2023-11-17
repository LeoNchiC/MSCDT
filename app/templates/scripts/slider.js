var images = ['images/image1.jpg', 'image2.jpg', 'image3.jpg'];
var index = 0;

function showImage() {
    var divElement = document.getElementById('imageContainer');
    divElement.style.backgroundImage = 'url(' + images[index] + ')';
}

function nextImage() {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    showImage();
}

function prevImage() {
    index--;
    if (index < 0) {
        index = images.length - 1;
    }
    showImage();
}

document.getElementById('next').addEventListener('click', nextImage);
document.getElementById('prev').addEventListener('click', prevImage);

window.onload = showImage;
