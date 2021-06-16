import handleCarruser from "./js/carousel.js";
import spyElements from "./js/spyElements.js";
const $carruseles = document.querySelectorAll("[data-carrusel]");

spyElements();
document.addEventListener("DOMContentLoaded", (e) => {
	handleCarruser(e);
});

ScrollReveal().reveal(".scroll-reveal", { delay: 1000 });
