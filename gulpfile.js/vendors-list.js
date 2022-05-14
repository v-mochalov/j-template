module.exports = {
	js: [
		// REQUIRED
		// Babel polyfill
		'node_modules/@babel/polyfill/dist/polyfill.min.js',
		// Make SVG Sprite work in all browsers
		'node_modules/svg4everybody/dist/svg4everybody.min.js',
		// END OF REQUIRED

		// jQuery
		'node_modules/jquery/dist/jquery.min.js',

		// Slick Slider
		'node_modules/slick-carousel/slick/slick.min.js',
	],
	css: [
		// Slick Slider
		'node_modules/slick-carousel/slick/slick.css',

		// Magnific Popup
		// 'node_modules/magnific-popup/dist/magnific-popup.css'

	]
};
