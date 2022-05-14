const {
    gulp
} = $;

const replace = require('gulp-string-replace');

exports.version = function version(cb) {

    return gulp.src(["./functions.php"])
        .pipe(replace(/\$assets_version *= *"(.*?)";/g,
            function (replacement) {
                if (replacement.length == 24) {
                    return '$assets_version = "' + getRndInteger(1000, 9999) + '";';
                } else if (replacement.length == 25) {
                    return '$assets_version = "' + getRndInteger(10000, 99999) + '";';
                } else {
                    return '$assets_version = "' + getRndInteger(100, 999) + '";';
                }

            }))

        .pipe(gulp.dest('./'))
    cb();
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
