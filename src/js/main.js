//HEADER slide
(function () {
	var header = document.querySelector('.header');
	window.onscroll = () => {
		if (window.pageYOffset > 22) {
			header.classList.add('header__active');
		} else {
			header.classList.remove('header__active');
		}
	};
}());

//Header BURGER
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	})
	$('.header__link').click(function (event) {
		$('.header__burger, .header__menu').removeClass('active');
		$('body').removeClass('lock')
	});
});

//Change width and time on your desire

initMarquee(190, 27)
function initMarquee(boxWidth, time) {
    const boxElement = $('.boxo');
    const boxLength = boxElement.length;
    const wrapperWidth = boxWidth * boxLength;
    const windowWidth = $(window).width();
    boxElement.parent().css('left', '-' + boxWidth + 'px');
    boxElement.css('width', boxWidth + 'px');
    gsap.set(".boxo", {
        x: (i) => i * boxWidth
    });
    gsap.to(".boxo", {
        duration: time,
        ease: "none",
        x: "-=" + wrapperWidth,
        modifiers: {
            x: gsap.utils.unitize(
                function (x) {
                    return parseFloat(x + windowWidth + boxWidth) % wrapperWidth
                }
            )
        },
        repeat: -1
    });

}




