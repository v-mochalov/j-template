const {
    gulp,
    bs,
    gp: {sass, autoprefixer}
} = $;

const version = require('./avr')

gulp.task('styles', function () {
    return gulp
        .src(process.env.SRC_STYLES)
        .pipe(
            sass({
                outputStyle: 'compressed'
            }).on('error', sass.logError)
        )
        .pipe(
            autoprefixer({
                overrideBrowserslist: ['last 2 versions', '> 1%', 'not dead'],
                cascade: false
            })
        )
        .pipe(gulp.dest(process.env.BUILD_CSS))  // write rev'd assets to build dir
        .pipe(version.version())
        .pipe(
            bs.reload({
                stream: true
            })
        );
});