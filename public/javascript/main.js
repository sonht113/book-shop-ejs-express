// Header 
function activateSearchbox(el) {
	el.classList.add('searchbox--active')
}

function deactivateSearchbox(el) {
	el.classList.remove('searchbox--active')
}

function onFocus() {
	activateSearchbox(document.querySelector('.searchbox'));
}

function onBlur() {
	deactivateSearchbox(document.querySelector('.searchbox'));
}


// Home page
var swiper = new Swiper(".books-slider", {
	loop: true,
	centeredSlides: true,
	autoplay: {
		delay: 9500,
		disableOnInteraction: false,
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
	},
});



var swiper = new Swiper(".featured-slider", {
	spaceBetween: 10,
	loop: true,
	centeredSlides: true,
	autoplay: {
		delay: 9500,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		450: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
		1024: {
			slidesPerView: 4,
		},
	},
});
var swiper = new Swiper(".arrivals-slider", {
	spaceBetween: 10,
	loop: true,
	centeredSlides: true,
	autoplay: {
		delay: 9500,
		disableOnInteraction: false,
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
	},
});


// Cart page ============== 
function decrease(event) {
	var productId = event.getAttribute("productId");
	const parent = document.querySelector('tr[productitem="' + productId + '"]');
	var count = parseInt(parent.querySelector("input").value);
	if (!count || count < 2) {
		return;
	}
	var inputMoney = parent.querySelector('.price__book');
	var outputMoney = parent.querySelector('.total__price');
	var price = parseInt(inputMoney.innerHTML) || 0;
	outputMoney.innerHTML = price * --count;
	parent.querySelector("input").value = count;
}

function crease(event) {
	var productId = event.getAttribute("productId");
	const parent = document.querySelector('tr[productitem="' + productId + '"]');
	var inputMoney = parent.querySelector('.price__book');
	var outputMoney = parent.querySelector('.total__price');
	var count = parent.querySelector("input").value * 1 || 1;
	var price = parseInt(inputMoney.innerHTML) || 0;
	var outputMoneyNumber = price * ++count;
	outputMoney.innerHTML = outputMoneyNumber;
	parent.querySelector("input").value = count;
}

