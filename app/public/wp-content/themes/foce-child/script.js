// effet d’apparition des titres
const titles = document.querySelectorAll('.title-animation');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
      return;
    }
  });
});

titles.forEach((title) => {
  observer.observe(title);
});

// Swiper
var swiper = new Swiper('.mySwiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
    delay: 4000,
  },
});

// effet de parallaxe sur les nuages
const bigCloud = document.querySelector('.big-cloud');
const smallCloud = document.querySelector('.small-cloud');

window.addEventListener('scroll', function () {
  const scrollPosition = window.pageYOffset;
  bigCloud.style.transform = `translate3d(${scrollPosition * -0.2}px, 0, 0)`;
  smallCloud.style.transform = `translate3d(${scrollPosition * -0.2}px, 0, 0)`;
});

// effet de parallaxe sur la vidéo et le titre du header
const video = document.querySelector('#background-video');
const title = document.querySelector('.title-animation');

window.addEventListener('scroll', function () {
  const scrollPosition = window.pageYOffset;
  video.style.transform = `translate3d(0, ${scrollPosition * 0.2}px, 0)`;
  title.style.transform = `translate3d(0, ${scrollPosition * -0.5}px, 0)`;
});

// Menu burger

const burger = document.querySelector('.burger-button');
const nav = document.querySelector('.burger-menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
});

burger.addEventListener('click', () => {
  nav.classList.toggle('open');
});
