const $sliderContainer = document.getElementById("main-container"),
	$boxBtns = document.getElementById("box-btns"),
	sliderContainerProperty = $sliderContainer.getBoundingClientRect();

/* function showBtn() {
	carouselProperty.width >= carouselItemsProperty.width
		? (carouselBtn.style.display = "none")
		: (carouselBtn.style.display = "initial");

	carouselItems.clientLeft > 0
		? (carouselBtn.firstElementChild.style.display = "initial")
		: (carouselBtn.firstElementChild.style.display = "none");
} */
//showBtn();

let pageTranslate = 0;

export default function handleCarruser() {
	$boxBtns.addEventListener("click", (e) => {
		const elem = e.target;

		if (elem.matches("#preview") && pageTranslate > 0) {
			console.log("entre aqui");
			pageTranslate -= window.innerWidth;
			pageTranslate = pageTranslate < 0 ? 0 : pageTranslate;
			$sliderContainer.style.transform = `translateX(-${pageTranslate}px)`;
		}

		if (elem.matches("#next")) {
			pageTranslate += window.innerWidth;
			$sliderContainer.style.transform = `translateX(-${pageTranslate}px)`;
		}
		/* ($sliderContainer.style.right = `${window.innerWidth}px`); */
		/* window.scrollTo(window.scrollX - window.innerWidth, 0); */
		elem.matches("#next") &&
			/* ($sliderContainer.style.left = `-${window.innerWidth}px`); */
			/* window.scrollTo(window.innerWidth + window.scrollX, 0); */

			console.log({
				s: window.scrollX,
				iw: window.innerWidth,
				d: sliderContainerProperty.width,
				dc: $sliderContainer.offsetWidth,
			});

		/* $sliderContainer.style.transform = `translateX(-${
			window.innerWidth / 2
		}px)`; */
	});
}

/* function moveCarousel(side) {
	const itemsWidth = carouselItemsProperty.width;

	switch (side) {
		case "left": {
			if (itemsTranslateShow - itemsWidth >= 0) {
				itemsTranslateShow -= itemsWidth;
			} else {
				itemsTranslateShow -= itemsTranslateShow;
			}
			break;
		}
		case "right": {
			if (itemsTranslateShow + itemsWidth <= itemsTranslateValue) {
				itemsTranslateShow += itemsWidth;
			} else {
				itemsTranslateShow += itemsTranslateValue - itemsTranslateShow;
			}
			break;
		}
	}

	carouselItems.style.transform = `translateX(-${itemsTranslateShow}px)`;

	console.log({ itemsWidth, itemsTranslateValue, itemsTranslateShow });
}
 */
