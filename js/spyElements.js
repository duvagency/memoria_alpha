import animations from "./animations.js";

const $d = document;

export default function spyElements() {
	const $elements = $d.querySelectorAll("[data-animation]");
	const handleCallb = (entries) => {
		entries.forEach((entry) => {
			console.log(entry.isIntersecting);
			console.log(entry);
			if (entry.isIntersecting) {
				entry.target.classList.add(entry.target.dataset.animation);
			} else if (entry.target.matches(entry.target.dataset.animation)) {
				entry.target.classList.remove(entry.target.dataset.animation);
			}
		});
	};
	const observer = new IntersectionObserver(handleCallb, {
		root: null,
		rootMargin: "0px",
		threshold: 1.0,
	});
	$elements.forEach(($elem) => observer.observe($elem));
}
