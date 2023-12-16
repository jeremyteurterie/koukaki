// effet d’apparition des titres
const titles = document.querySelectorAll('.title-animation');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
    }
  });
});

titles.forEach((title) => observer.observe(title));

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
function parallaxTransform(element, scrollFactor) {
  const scrollPosition = window.pageYOffset;
  element.style.transform = `translate3d(${
    scrollPosition * scrollFactor
  }px, 0, 0)`;
}

const bigCloud = document.querySelector('.big-cloud');
const smallCloud = document.querySelector('.small-cloud');

window.addEventListener('scroll', function () {
  parallaxTransform(bigCloud, -0.2);
  parallaxTransform(smallCloud, -0.2);
});

// Menu burger
const burger = document.querySelector('.burger-button');
const nav = document.querySelector('.burger-menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('open');
});
