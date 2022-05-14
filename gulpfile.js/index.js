global.$ = {
	gulp: require('gulp'),
	gp: require('gulp-load-plugins')(),
	bs: require('browser-sync').create(),
}

require('./paths');
require('./tasks');

const {
	gulp
} = $

//'svg' commented
const doMagic = gulp.parallel('img', 'copy', 'php', 'html', 'styles', 'scripts:build', 'vendors', 'svg');

gulp.task('build', gulp.series(
	'clean',
	doMagic
));

gulp.task('dev', gulp.parallel('serve', 'watch', 'scripts:watch'));

gulp.task('start', gulp.series('build', 'dev'));