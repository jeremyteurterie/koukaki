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

// // Carrousel
// const swiper = new Swiper('.swiper', {
//   effect: 'coverflow',
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: 'auto',
//   coverflowEffect: {
//     rotate: 50,
//     stretch: 5,
//     depth: 100,
//     modifier: 1,
//     slideShadows: false,
//   },
//   initialSlide: 1,
// });

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

// changement du menu burger en croix au clic et animation des titres du menu
// const burger = document.querySelector('.burger');
// const titlesNav = document.querySelectorAll('.menu li ');

// burger.addEventListener('click', () => {
//   burger.classList.toggle('active'); // ajout de la class active au clic de la div Burger

//   if (burger.classList.contains('active')) {
//     setTimeout(() => {
//       titlesNav.forEach((title) => {
//         // parcourt tous les titres du menu nav
//         title.classList.add('animated'); // ajout de la class animated à chaque titre
//       });
//     }, '500'); // l'animation des titres est réalisée après 0,5 seconde
//   } else {
//     titlesNav.forEach((title) => {
//       title.classList.remove('animated');
//     });
//   }
// });

// // pour que le burger affiche le menu au clic
// document.querySelector('.menu-toggle').addEventListener('click', function () {
//   document.querySelector('.menu').classList.toggle('is-active');
//   console.log('is-active');
// });

// // pour que le menu soit caché au clic des titres
// const navLinks = document.querySelectorAll('.menu li');

// navLinks.forEach((link) => {
//   link.addEventListener('click', () => {
//     document.querySelector('.menu').classList.remove('is-active');
//     burger.classList.remove('active');
//     titlesNav.forEach((title) => {
//       title.classList.remove('animated');
//     });
//   });
// });
