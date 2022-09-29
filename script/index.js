import { navbar } from "../components/navbar.js";

let navbar_div = document.getElementById("head_navbar");

navbar_div.innerHTML = navbar();

import { footer } from "../components/footer.js";
let footer_div = document.getElementById("bottom_footer");
footer_div.innerHTML = footer();

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop: true,
  speed: 1000,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      a: console.log(320),
    },
    480: {
      slidesPerView: 2,
      a: console.log(480),
    },
    768: {
      slidesPerView: 3,
      a: console.log(768),
    },
    1024: {
      slidesPerView: 4,
      a: console.log(1024),
    },
  },
});
