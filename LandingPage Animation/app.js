const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const hambaurger = document.querySelector('.hambaurger');
const headline = document.querySelector('.headline');

const tl = new TimelineMax();

tl.fromTo(hero, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
    .fromTo(hero, 0.8, { width: '100%' }, { width: '80%', ease: Power2.easeInOut })
    .fromTo(slider, 0.8, { x: "-100%" }, { x: '0%', ease: Power2.easeInOut }, "-=0.8")
    .fromTo(logo, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.3")
    .fromTo(hambaurger, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.3")
    .fromTo(headline, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.3")
