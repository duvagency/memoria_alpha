import handleCarruser from "./js/carousel.js";
import spyElements from "./js/spyElements.js";
const $carruseles = document.querySelectorAll("[data-carrusel]");

const $itemsDataImg = document.querySelectorAll("[data-img]");

for (const item of $itemsDataImg) {
	item.style.backgroundImage = `url(${item.dataset.img})`;
}

spyElements();

document.addEventListener("DOMContentLoaded", (e) => {
	handleCarruser(e);
});

/* ScrollReveal().reveal(".scroll-reveal", { delay: 1000 }); */
