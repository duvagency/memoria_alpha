import animations from "./js/animations.js";
import handleCarruser from "./js/carousel.js";
import spyElements from "./js/spyElements.js";
/* import animate from "./js/animate.min.js"; */

document.addEventListener("DOMContentLoaded", (e) => {
	handleCarruser(e);
	spyElements();
});
