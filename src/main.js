//import { gsap } from "gsap";
//import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DotLottie } from "@lottiefiles/dotlottie-web";

gsap.registerPlugin(ScrollTrigger);

const bigWaveLottie = new DotLottie({
  canvas: document.querySelector("#bigwave"),
  src: "https://lottie.host/81cd22a3-d44f-4681-a8be-3dd3101f06d9/FoEViopkZA.lottie",
  autoplay: true,
  loop: true,
});

const cloudLottie = new DotLottie({
  canvas: document.querySelector("#cloud"),
  src: "https://lottie.host/c118ade8-1d81-4769-b469-59bab97fde78/IhTUQmaTQy.lottie",
  autoplay: true,
  loop: true,
});

const pelleteuseLottie = new DotLottie({
  canvas: document.querySelector("#pelleteuse"),
  src: "https://lottie.host/9ea9af28-966d-4059-9bf5-e16a825d39d0/OVA1kZ1L94.lottie",
  autoplay: true,
  loop: true,
});

const betonLottie = new DotLottie({
  canvas: document.querySelector("#beton"),
  src: "https://lottie.host/be679607-6914-4a66-83e2-4fbf2b58c125/vx1mBfioVF.lottie",
  autoplay: true,
  loop: true,
});

gsap.fromTo(
  ".titre-principal",
  { scale: 1 },
  {
    scale: 1.05,
    repeat: -1,
    yoyo: true,
    duration: 1.5,
    delay: 0,
  },
);

gsap.fromTo(
  ".sous-titre",
  { x: -1500, y: 0, scale: 1 },
  {
    x: 0,
    y: 0,
    scale: 1,
    scrollTrigger: {
      trigger: ".sous-titre",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
    duration: 1.5,
    delay: 0,
  },
);

gsap.fromTo(
  ".maison",
  { x: 1500, y: 0, scale: 1 },
  {
    x: 0,
    y: 0,
    scale: 1,
    scrollTrigger: {
      trigger: ".maison",
      start: "top 80%",
      end: "bottom 20%",

      toggleActions: "play none none reverse",
    },
    duration: 1,
    delay: 0,
  },
);

gsap.fromTo(
  ".text-section1",
  { x: -1500, y: 0, scale: 1 },
  {
    x: 0,
    y: 0,
    scale: 1,
    scrollTrigger: {
      trigger: ".text-section1",
      start: "top 80%",
      end: "bottom 20%",

      toggleActions: "play none none reset",
    },
    duration: 1.5,
    delay: 0.5,
  },
);

gsap.fromTo(
  ".text-section2",
  { x: -1500, y: 0, scale: 1 },
  {
    x: 0,
    y: 0,
    scale: 1,
    scrollTrigger: {
      trigger: ".text-section2",
      start: "top 80%",
      end: "bottom 20%",

      toggleActions: "play none none reset",
    },
    duration: 1.5,
    delay: 0,
  },
);

gsap.fromTo(
  ".titre",
  { x: -1500, y: 0, scale: 1 },
  {
    x: 0,
    y: 0,
    scale: 1,
    scrollTrigger: {
      trigger: ".titre",
      start: "top 80%",
      end: "bottom 20%",

      toggleActions: "play none none reverse",
    },
    duration: 1.5,
    delay: 0,
  },
);

gsap.fromTo(
  ".text-box-right",
  { x: 1500, y: 0, scale: 1 },
  {
    x: 0,
    y: 0,
    scale: 1,
    scrollTrigger: {
      trigger: ".text-box-right",
      start: "top 80%",
      end: "bottom 20%",

      toggleActions: "play none none reverse",
    },
    duration: 1.5,
    delay: 0,
  },
);

gsap.fromTo(
  ".text-box-left",
  { x: -1500, y: 0, scale: 1 },
  {
    x: 0,
    y: 0,
    scale: 1,
    scrollTrigger: {
      trigger: ".text-box-left",
      start: "top 80%",
      end: "bottom 20%",

      toggleActions: "play none none reverse",
    },
    duration: 1.5,
    delay: 0,
  },
);

gsap.fromTo(
  ".voleur",
  { x: -500, y: -150, scale: 0.001 },
  {
    x: 0,
    y: 0,
    scale: 1,
    scrollTrigger: {
      trigger: ".voleur",
      start: "top 80%",
      end: "bottom 20% ",
      scrub: true,
    },
    delay: 0,
  },
);

gsap.fromTo(
  ".text-box-left2",
  { x: -1500, y: 0, scale: 1 },
  {
    x: 0,
    y: 0,
    scale: 1,
    scrollTrigger: {
      trigger: ".text-box-left2",
      start: "top 80%",
      end: "bottom 20%",

      toggleActions: "play none none reverse",
    },
    duration: 1.5,
    delay: 0,
  },
);

gsap.fromTo(
  ".card",
  { x: -1500, y: 0, scale: 1, opacity: 0 },
  {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    scrollTrigger: {
      trigger: ".card",
      start: "top 80%",
      end: "bottom 20%",

      toggleActions: "play none none reverse",
    },
    duration: 1.5,
    delay: 0,
  },
);

gsap.fromTo(
  ".card2",
  { x: -1500, y: 0, scale: 1, opacity: 0 },
  {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    scrollTrigger: {
      trigger: ".card2",
      start: "top 80%",
      end: "bottom 20%",

      toggleActions: "play none none reverse",
    },
    duration: 1.5,
    delay: 0,
  },
);

gsap.fromTo(
  ".card3",
  { x: -1500, y: 0, scale: 1, opacity: 0 },
  {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    scrollTrigger: {
      trigger: ".card3",
      start: "top 80%",
      end: "bottom 20%",

      toggleActions: "play none none reverse",
    },
    duration: 1.5,
    delay: 0,
  },
);

gsap.fromTo(
  ".quizz-options",
  { x: 0, y: 0, scale: 1 },
  {
    x: 0,
    y: 10,
    scale: 1,

    duration: 1.5,
    delay: 0,
    yoyo: true,
    repeat: -1,
  },
);

gsap.fromTo(
  ".quizz-options2",
  { x: 0, y: 0, scale: 1 },
  {
    x: 0,
    y: 10,
    scale: 1,

    duration: 1.5,
    delay: 0.5,
    yoyo: true,
    repeat: -1,
  },
);

gsap.fromTo(
  ".quizz-options3",
  { x: 0, y: 0, scale: 1 },
  {
    x: 0,
    y: 10,
    scale: 1,

    duration: 1.5,
    delay: 1,
    yoyo: true,
    repeat: -1,
  },
);

gsap.fromTo(
  ".quizz-answer",
  { x: -1500, y: 0, scale: 1, opacity: 0 },
  {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    scrollTrigger: {
      trigger: ".quizz-answer",
      start: "top 80%",
      end: "bottom 20%",

      toggleActions: "play none none reverse",
    },
    duration: 1.5,
    delay: 0,
  },
);

gsap.fromTo(
  ".bétonière",
  { x: 1500, y: 0, scale: 1, opacity: 0 },
  {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    scrollTrigger: {
      trigger: ".bétonière",
      start: "top 50%",
      end: "bottom 20%",

      toggleActions: "play none none reverse",
    },
    duration: 1.5,
    delay: 0,
  },
);

gsap.fromTo(
  ".gaz",
  { x: 1500, y: 0, scale: 1, opacity: 0 },
  {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    scrollTrigger: {
      trigger: ".gaz",
      start: "top 50%",
      end: "bottom 20%",

      toggleActions: "play none none reverse",
    },
    duration: 1.5,
    delay: 0,
  },
);

gsap.fromTo(
  ".gravats",
  { scale: 1 },
  {
    scale: 1.1,
    repeat: -1,
    yoyo: true,
    duration: 1.5,
    delay: 0,
  },
);

gsap.fromTo(
  ".soleil",
  { x: 0, y: -1000, scale: 5 },
  {
    x: 0,
    y: 0,
    scale: 1,
    scrollTrigger: {
      trigger: ".soleil",
      start: "top 60%",
      end: "bottom 50% ",
      scrub: true,
    },

    delay: 0,
  },
);

gsap.fromTo(
  ".corentin",
  { rotation: 0 },
  {
    rotation: 720,
    repeat: -1,
    repeatDelay: 0.75,
    duration: 1.5,
    delay: 0,
  },
);
