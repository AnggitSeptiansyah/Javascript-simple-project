const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false;
const intervalTime = 5000; //5000 milisecond

let slideInterval;

const nextSlide = () => {
  const current = document.querySelector('.current');
  // Menghilangkan class "Current"
  current.classList.remove('current');
  // Check untuk next slide
  if (current.nextElementSibling) {
    // Tambahkan current untuk next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current to start
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () => {
  const current = document.querySelector('.current');
  // Menghilangkan class "Current"
  current.classList.remove('current');
  // Check untuk next slide
  if (current.previousElementSibling) {
    // Tambahkan current untuk prev sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // Slide to Last -> yaitu dengan cara mengambil slide dikurang 1
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
}

// Button Event
next.addEventListener('click', e => {
  nextSlide();
});

prev.addEventListener('click', e => {
  prevSlide();
});