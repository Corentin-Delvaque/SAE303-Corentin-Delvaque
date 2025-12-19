gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".titre-principal",
  { scale: 1 },
  {
    scale: 1.05,
    repeat: -1,
    yoyo: true,
    duration: 1.5,
    delay: 0.5,
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
    delay: 0.5,
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
    delay: 0.5,
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
    delay: 1,
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
    delay: 0.5,
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
    delay: 1,
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
    delay: 1,
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
    delay: 1,
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
      markers: true,
      scrub: true,
    },
    delay: 1,
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
    delay: 1,
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
    delay: 1,
  },
);

gsap.fromTo(
  ".card2",
  { x: 1500, y: 0, scale: 1, opacity: 0 },
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
    delay: 1,
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
    delay: 1,
  },
);
