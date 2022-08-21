"use strict";

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; //importer le gsap 
gsap.registerPlugin(ScrollTrigger);

let annee = new Date().getFullYear();
let date = document.querySelector(".date");
date.innerHTML = annee;

window.addEventListener('mousemove', event => {
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
gsap.to(".music-container", { // Animate .text2
  // Whatever properties to animate here
  scrollTrigger: {
    trigger: ".music-container", // make .panel2 the trigger
    start: "20px 80%", // 10% of .panel2 enters the bottom of the viewport
    // Whatever other ScrollTrigger vars you need here
    end: "bottom 20px",
    markers: true,
    scrub: 1
  },
  x: 40,
  duration: 3
});



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
gsap.from(".temoignages", {
  scale: 0.5,
  duration: 3,
  scrollTrigger: {
    trigger: ".temoignages",
    start: "center 90%",
    end: "center 10%",
    scrub: 0.3
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

gsap.fromTo(".roundrectangle3",
  { y: 90 },
  {
    y: 0,
    transformOrigin: "50% 50%",
    repeat: 0,
    ease: "elastic.out(1, 0.3)",
    duration: 4
  });
gsap.fromTo(".roundrectangle4",
  { y: 90 },
  {
    y: 0,
    transformOrigin: "50% 50%",
    repeat: 0,
    ease: "elastic.out(1, 0.3)",
    duration: 4
  });

gsap.fromTo(".roundrectangle3",
  { y: 90 },
  {
    y: 0,
    transformOrigin: "50% 50%",
    repeat: 0,
    ease: "elastic.out(1, 0.3)",
    duration: 4
  });
