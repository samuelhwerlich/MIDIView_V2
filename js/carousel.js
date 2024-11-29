let currentSlides = {
  carousel1: 0,
  carousel2: 0,
};

function showSlide(carouselId, index) {
  const carousel = document.getElementById(carouselId);
  const items = carousel.querySelectorAll(".carousel-item");
  const totalSlides = items.length;

  // Normalizar índice (loop infinito)
  if (index >= totalSlides) currentSlides[carouselId] = 0;
  else if (index < 0) currentSlides[carouselId] = totalSlides - 1;
  else currentSlides[carouselId] = index;

  // Ocultar todos os slides
  items.forEach((item, idx) => {
    item.style.display = idx === currentSlides[carouselId] ? "block" : "none";
  });
}

function prevSlide(carouselId) {
  showSlide(carouselId, currentSlides[carouselId] - 1);
}

function nextSlide(carouselId) {
  showSlide(carouselId, currentSlides[carouselId] + 1);
}

// Inicializar os carrosséis
document.addEventListener("DOMContentLoaded", () => {
  Object.keys(currentSlides).forEach((carouselId) => {
    showSlide(carouselId, 0);
  });
});