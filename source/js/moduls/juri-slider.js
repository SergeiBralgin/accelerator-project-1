import Swiper from 'swiper';
import 'swiper/css';
import {Navigation} from 'swiper/modules';

new Swiper('.juri__swiper', {
  loop: true,
  spaceBetween: 40,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    },

    1366: {
      slidesPerView: 4,
      allowTouchMove: false,
    },
  },
  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-navigation-next',
    prevEl: '.swiper-navigation-prev',
  },
});
