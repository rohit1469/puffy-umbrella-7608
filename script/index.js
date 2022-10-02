// ---------------------------scroll-----------------

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
// -----------------------------scroll------------------

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
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

let arr = document.querySelectorAll(".swiper-slide");

aj_Contaier(arr);

function aj_Contaier(data) {
  data.forEach((el) => {
    el.addEventListener("click", function () {
      console.log(el);
    });
  });
}

let subscribe = document.getElementById("subscribe");
subscribe.addEventListener("click", function () {
  alert("Subscribed To Meanbuy");
});
