
particlesJS("particles-js", {
  particles: {
    number: { value: 60, density: { enable: true, value_area: 1000 }},
    color: { value: ["#ff69b4", "#00ffff", "#ffffff", "#ffd700", "#00ff00"] },
    shape: { type: "circle", stroke: { width: 0, color: "#000000" }},
    opacity: { value: 0.6, random: true },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 130,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.4,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 150, line_linked: { opacity: 0.6 }},
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});
