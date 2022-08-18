import gsap from 'gsap';

//Date//
let annee = new Date().getFullYear();
let date = document.querySelector(".date");
date.innerHTML = annee;

window.addEventListener('mousemove', event =>{
  document.documentElement.style.setProperty('--x', event.clientX + 'px');
  document.documentElement.style.setProperty('--y', event.clientY + 'px');
});
var slideIndex = 1;
var slideExist = document.querySelector(".slideshow__container");
showSlides(slideIndex);
var prevButton = document.querySelector(".slideshow__prev");

if (prevButton) {
  prevButton.addEventListener('click', function () {
    plusSlides(-1);
  });
}

var nextButton = document.querySelector(".slideshow__next");

if (nextButton) {
  nextButton.addEventListener('click', function () {
    plusSlides(1);
  });
} // Next/previous controls


function plusSlides(n) {
  showSlides(slideIndex += n);
} // Thumbnail image controls


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;

  if (slideExist) {
    var slides = document.querySelectorAll(".slideshow__slides");

    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].classList.add("hide");
    }

    slides[slideIndex - 1].classList.remove("hide");
  }
}
/*ANIMATIONS DESKTOP*/
//Timeline


var gsapExist = document.querySelector(".h1-intro");
var gsapExist2 = document.querySelector(".p-intro");
var gsapExist3 = document.querySelector(".img-intro");

if (window.matchMedia('(min-width: 768px)').matches) {
  if (gsapExist && gsapExist2 && gsapExist3) {
    var tl2 = timeline({
      defaults: {
        duration: 3
      }
    });
    tl2.from('.h1-intro', {
      x: -1000,
      duration: 0.7,
      stagger: 0.5
    });
    tl2.from('.p-intro', {
      x: -1000,
      duration: 0.6
    }, "-=0.3");
    tl2.from('.img-intro', {
      x: 1000,
      duration: 0.6
    }, "=");
  }
} //ScrollTrigger 


var gsapExist4 = document.querySelector(".explication");
var gsapExist5 = document.querySelector(".music-container");

if (window.matchMedia('(min-width: 768px)').matches) {
  if (gsapExist4 && gsapExist5) {
    gsap.from(".music-container", {
      x: 200,
      opacity: 0,
      duration: 0.3,
      scrollTrigger: {
        trigger: ".music-container",
        start: 'top bottom',
        toggleActions: 'play none none none'
      }
    });
    gsap.from(".explication", {
      x: -200,
      opacity: 0,
      duration: 0.3,
      scrollTrigger: {
        trigger: ".callToAction-left",
        start: 'top bottom',
        toggleActions: 'play none none none'
      }
    });
  }
}

var gsapExist6 = document.querySelector(".explication");
var gsapExist7 = document.querySelector(".music-container"); //ScrollTrigger 

if (window.matchMedia('(min-width: 768px)').matches) {
  if (gsapExist6 && gsapExist7) {
    gsap.from(".music-container", {
      x: 200,
      opacity: 0,
      duration: 0.3,
      scrollTrigger: {
        trigger: ".music-container",
        start: 'top bottom',
        toggleActions: 'play none none none'
      }
    });
    gsap.from(".explication", {
      x: -200,
      opacity: 0,
      duration: 0.3,
      scrollTrigger: {
        trigger: ".explication",
        start: 'top bottom',
        toggleActions: 'play none none none'
      }
    });
  }
}
/*ANIMATION MOBILE*/
//Timeline


var gsapExist8 = document.querySelector(".h1-intro");
var gsapExist9 = document.querySelector(".p-intro");
var gsapExist10 = document.querySelector(".img-intro");

if (window.matchMedia('(max-width: 767px)').matches) {
  if (gsapExist8 && gsapExist9 && gsapExist10) {
    var tl = gsap.timeline({
      defaults: {
        duration: 3
      }
    });
    tl.from('.h1-intro', {
      x: -1000,
      duration: 0.7,
      stagger: 0.5
    });
    tl.from('.p-intro', {
      x: -1000,
      duration: 0.6
    }, "-=0.3");
    tl.from('.img-intro', {
      x: -1000,
      duration: 0.6
    }, "-=0.3");
  }
} //ScrollTrigger 


var gsapExist11 = document.querySelector(".callToAction-right");

if (window.matchMedia('(max-width: 767px)').matches) {
  if (gsapExist11) {
    gsap.from(".callToAction-right", {
      rotation: -20,
      duration: 1,
      scrollTrigger: {
        trigger: ".callToAction-right",
        start: 'top bottom',
        toggleActions: 'play play play play'
      }
    });
  }
}