import animations from "./animations.js";

const $d = document;

export default function spyElements() {
	console.log("spy");
	const $elements = $d.querySelectorAll("[data-animation]");
	console.log($elements);

	const handleCallb = (entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add(entry.target.dataset.animation);
			} else {
				entry.target.classList.remove(entry.target.dataset.animation);
			}
			animations();
			observer.unobserve(entry.target);
		});
	};
	const observer = new IntersectionObserver(handleCallb, { threshold: 1 });
	$elements.forEach(($elem) => observer.observe($elem));
}
