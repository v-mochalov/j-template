const {
    gulp,
    gp: {po2mo}
} = $;

gulp.task('po2mo', function () {
    return gulp
        .src('languages/*.po')
        .pipe(po2mo())
        .pipe(gulp.dest('./languages'))
});