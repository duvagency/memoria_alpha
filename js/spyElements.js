import animations from "./animations.js";

const $d = document;

export default function spyElements() {
	const $elements = $d.querySelectorAll(".section");
	const handleCallb = (entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const $items = entry.target.querySelectorAll("[data-animate]");
				for (const $item of $items) {
					console.log($item);
					$item.classList.add($item.dataset.animate);
				}
				animations();
			} else {
				const $items = entry.target.querySelectorAll("[data-animate]");
				for (const $item of $items) {
					console.log($item);
					$item.classList.remove($item.dataset.animate);
				}
			}
			/* if (entry.isIntersecting) {
				entry.target.classList.add(entry.target.dataset.animation);
			} else if (entry.target.matches(entry.target.dataset.animation)) {
				entry.target.classList.remove(entry.target.dataset.animation);
			} */
		});
	};
	const observer = new IntersectionObserver(handleCallb, {
		root: null,
		rootMargin: "20px",
		threshold: 0.5,
	});
	$elements.forEach(($elem) => observer.observe($elem));
}
