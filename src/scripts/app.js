"use strict";

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; //importer le gsap 
gsap.registerPlugin(ScrollTrigger); 

let annee = new Date().getFullYear();
let date = document.querySelector(".date");
date.innerHTML = annee;

window.addEventListener('mousemove', event =>{
  document.documentElement.style.setProperty('--x', event.clientX + 'px');
  document.documentElement.style.setProperty('--y', event.clientY + 'px');
});

gsap.from('.image--introduction', {
  x: 70,
  duration: 1,
  opacity: 0,
  delay: 0.25
});




gsap.from(".explication1", {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".explication1",
    start: "center 90%",
    end: "center 50%",
    scrub: 0.5
  }
});
gsap.from(".explication2", {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".explication2",
    start: "center 100%",
    end: "center 50%",
    scrub: 0.5
  }
});
gsap.from(".explication3", {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".explication3",
    start: "center 90%",
    end: "center 50%",
    scrub: 0.5
  }
});
var tl2 = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline({
  defaults: {
    duration: 3
  }
});
tl2.from('.music-container', {
  x: -1000,
  duration: 10,
  stagger: 0.5,
  start: 'top bottom'
})

gsap.from(".imagephone", {
  scale: 1.1,
  duration: 3,
  scrollTrigger: {
    trigger: ".imagephone",
    start: "center 10%",
    end: "center 90%",
    scrub: 0.5
  }
});
gsap.from(".temoignage", {
  scale: 1.1,
  duration: 3,
  scrollTrigger: {
    trigger: ".temoignage",
    start: "center 90%",
    end: "center 10%",
    scrub: 0.5
  }
});
gsap.from(".image3", {
  scale: 1.1,
  duration: 3,
  scrollTrigger: {
    trigger: ".image3",
    start: "center 90%",
    end: "center 10%",
    scrub: 0.5
  }
});
gsap.from(".image4", {
  scale: 1.1,
  duration: 3,
  scrollTrigger: {
    trigger: ".image4",
    start: "center 90%",
    end: "center 10%",
    scrub: 0.5
  }
});