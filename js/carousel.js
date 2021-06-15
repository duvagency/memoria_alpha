/* import spyElements from "./spyElements.js"; */
import animations from "./animations.js";

const $sliderContainer = document.getElementById("carrusel"),
	$boxBtns = document.getElementById("box-btns"),
	$sections = document.querySelectorAll(".section");

let pageTranslate = 0;
let countClick = 0;
let $nextBtn = $boxBtns.lastElementChild;

const handleButton = ($btn) => {
	/* animations(); */
	if (countClick === 0) {
		$boxBtns.style.display = "none";
		return;
	} else {
		$boxBtns.style.display = "initial";
		if ($btn.matches("#next") && countClick === $sections.length) {
			$btn.classList.add("isActive");
		} else {
			$nextBtn.classList.remove("isActive");
		}
	}
};

handleButton();

export default function handleCarruser() {
	document.addEventListener("click", (e) => {
		const elem = e.target;
		if (countClick <= $sections.length && countClick >= 0) {
			if (elem.matches("#preview") && pageTranslate > 0) {
				pageTranslate -= window.innerWidth;
				pageTranslate = pageTranslate < 0 ? 0 : pageTranslate;
				$sliderContainer.style.transform = `translateX(-${pageTranslate}px)`;
				countClick--;
				handleButton(elem);
			}

			if (elem.matches("#next") && countClick < $sections.length) {
				pageTranslate += window.innerWidth;
				$sliderContainer.style.transform = `translateX(-${pageTranslate}px)`;
				countClick++;
				handleButton(elem);
			}
		}
	});
}
