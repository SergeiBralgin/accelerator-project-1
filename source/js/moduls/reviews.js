import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

new Swiper('.reviews__swiper', {
  speed: 600,
  allowTouchMove: true,
  slidesPerView: 1,
  autoHeight: true,
  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-navigation-next',
    prevEl: '.swiper-navigation-prev',
  },
  breakpoints: {
    768: {
      allowTouchMove: false,
    }
  }
});
