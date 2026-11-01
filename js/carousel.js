export function initCarousel() {
  const track = document.getElementById('carousel-track');
  const slides = track.querySelectorAll('.temoignage');
  let currentIndex = 0;
  let autoPlay;

  const goToSlide = (index) => {
    currentIndex = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  };

  const startAutoPlay = () => { autoPlay = setInterval(() => goToSlide(currentIndex + 1), 5000); };
  const resetAutoPlay = () => { clearInterval(autoPlay); startAutoPlay(); };

  document.getElementById('next-btn').addEventListener('click', () => { goToSlide(currentIndex + 1); resetAutoPlay(); });
  document.getElementById('prev-btn').addEventListener('click', () => { goToSlide(currentIndex - 1); resetAutoPlay(); });
  
  const carousel = document.getElementById('carousel');
  carousel.addEventListener('mouseenter', () => clearInterval(autoPlay));
  carousel.addEventListener('mouseleave', startAutoPlay);
  
  startAutoPlay();
}