
document.addEventListener("DOMContentLoaded", function() {
  var currentIndex = 1;
  var totalImages = 4;

  function showNextImage() {
    var currentImage = document.querySelector('.choose-image' + currentIndex);
    var nextIndex = currentIndex === totalImages ? 1 : currentIndex + 1;
    var nextImage = document.querySelector('.choose-image' + nextIndex);

    currentImage.style.display = 'none';
    nextImage.style.display = 'block';

    currentIndex = nextIndex;
  }

  // Initial setup
  document.querySelector('.choose-image1').style.display = 'block';

  // Show images in a loop with 1-second interval`
  setInterval(showNextImage, 1300);
});
