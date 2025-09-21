document.addEventListener("DOMContentLoaded", function() {
  let currentIndex = 0;
  const slides = document.querySelector('.slides');
  const images = document.querySelectorAll('.slides img');
  const total = images.length;

  document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % total;
    updateSlide();
  });

  document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + total) % total;
    updateSlide();
  });

  function updateSlide() {
    slides.style.transform = `translateX(-${currentIndex * images[0].clientWidth }px)`; 
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Find ALL sliders on the page
  const sliders = document.querySelectorAll(".slider");

  sliders.forEach(function (slider) {
    let currentIndex = 0;
    const slides = slider.querySelector(".slides");
    const images = slider.querySelectorAll(".slides img");
    const total = images.length;

    // Buttons inside THIS slider
    const nextBtn = slider.querySelector(".next");
    const prevBtn = slider.querySelector(".prev");

    // Go to next image
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % total;
      updateSlide();
    });

    // Go to previous image
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + total) % total;
      updateSlide();
    });

    function updateSlide() {
      slides.style.transform = `translateX(-${currentIndex * 320}px)`; // 320 = image width
    }
  });
});
function updateSlide() {
  const imageWidth = images[0].clientWidth; // get actual width dynamically
  slides.style.transform = `translateX(-${currentIndex * imageWidth}px)`; 
}

window.addEventListener("resize", updateSlide); // Update on resize

