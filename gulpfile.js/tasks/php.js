const {
    gulp,
    gp: {fileInclude}
} = $;

gulp.task('php', function () {

    return gulp
        .src(process.env.SRC_PHP)
        .pipe(gulp.dest(process.env.BUILD_PHP));
});
