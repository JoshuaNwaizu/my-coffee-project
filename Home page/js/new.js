  
let swiperCards = new Swiper('.card-content', {
  loop: true,
  spaceBetween:32,
  grabCursor: true,
  autoplay: {
    delay: 5000, // Set the time in milliseconds between slides.
  },


  pagination: {
    el: '.swiper-pagination',
    secondEl: '.swiper-pagination-2',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
    
  },
});