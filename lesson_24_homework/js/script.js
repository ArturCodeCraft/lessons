// document.addEventListener('click', function (e) {
// 	const targetElement = e.target;
// 	if (targetElement.closest('.menu__icon')) {
// 		document.documentElement.classList.toggle('menu-open');
// 	}
// })

// for scroll TEST
// window.addEventListener('scroll', function () {
// 	if (window.scrollY > 0) {
// 		document.body.classList.add('scroll');
// 	} else {
// 		document.body.classList.remove('scroll');
// 	}
// });


// Задача №2
window.addEventListener('load', function () {
	document.body.classList.add('loaded');


	// Задача №1
	document.querySelectorAll('.item').forEach(item => {
		item.addEventListener('click', function () {
			this.classList.toggle('active');
		});
	});


	// Задача №3
	document.querySelector('header').addEventListener('mouseenter', function () {
		document.querySelector('.footer__copy').style.backgroundColor = 'red';
	});

	document.querySelector('header').addEventListener('mouseleave', function () {
		document.querySelector('.footer__copy').style.backgroundColor = '';
	});


	// Задача №4
	function isInViewport(element) {
		const rect = element.getBoundingClientRect();
		return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
	}

	document.addEventListener('scroll', function () {
		const itemCount = document.querySelector('.item-count');
		if (itemCount && isInViewport(itemCount) && !itemCount.classList.contains('counting')) {
			itemCount.classList.add('counting');
			let count = 0;
			const maxCount = parseInt(itemCount.dataset.maxCount, 10);
			const interval = parseInt(itemCount.dataset.interval, 10);

			const intervalId = setInterval(function () {
				if (count >= maxCount) {
					clearInterval(intervalId);
					return;
				}
				itemCount.textContent = ++count;
			}, interval);
		}
	});
});

