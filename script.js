let slideIndex = 0;
const slides = document.querySelector('.carousel-slide');
const totalSlides = slides.querySelectorAll('img').length;
const slidesToShow = 4; // Número de slides a serem mostrados de cada vez

function showSlide(index) {
  if (index < 0) {
    slideIndex = 0;
  } else if (index >= totalSlides - slidesToShow + 1) {
    slideIndex = totalSlides - slidesToShow;
  }

  const slideWidth = slides.offsetWidth / slidesToShow;
  const offset = -slideIndex * slideWidth;
  slides.style.transform = `translateX(${offset}px)`;
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

showSlide(slideIndex);
