export default function animations() {
	anime({
		targets: ".rotate",
		translateX: [-100, 0],
		scale: [0, 1],
		rotate: "-10",
		duration: 2000,
	});
	anime({
		targets: ".scale-rotate",
		translateX: [-100, 0],
		scale: [0, 1],
		rotate: "1turn",
		duration: 2000,
	});

	anime({
		targets: ".a-left",
		translateX: [-100, 0],
		opacity: [0, 1],
		duration: 3000,
	});

	anime({
		targets: ".a-top",
		translateY: [100, 0],
		opacity: [0, 1],
		duration: 3000,
	});

	anime({
		targets: ".a-right",
		translateX: [100, 0],
		opacity: [0, 1],
		duration: 3000,
	});

	anime({
		targets: ".a-bottom",
		translateY: [-100, 0],
		opacity: [0, 1],
		duration: 3000,
	});

	anime({
		targets: ".a-random",

		translateX: function () {
			return [anime.random(-360, 360), 0];
		},
		translateY: function () {
			return [anime.random(-360, 360), 0];
		},
		duration: function () {
			return anime.random(1200, 1800);
		},
		delay: function () {
			return anime.random(0, 400);
		},
		scale: [0, 1],
	});

	anime({
		targets: ".a-staggering-right",
		translateX: [-270, 0],
		delay: anime.stagger(150),
	});

	anime({
		targets: ".a-staggering-left",
		translateX: [270, 0],
		delay: anime.stagger(150),
	});
}
