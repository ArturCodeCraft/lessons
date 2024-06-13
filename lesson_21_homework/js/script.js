document.addEventListener('click', function (e) {
	const targetElement = e.target;
	if (targetElement.closest('.menu__icon')) {
		document.documentElement.classList.toggle('menu-open');
	}
})




// for scroll TEST
// window.addEventListener('scroll', function () {
// 	if (window.scrollY > 0) {
// 		document.body.classList.add('scroll');
// 	} else {
// 		document.body.classList.remove('scroll');
// 	}
// });