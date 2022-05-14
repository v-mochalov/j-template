const {
  gulp,
  bs,
  gp: {
    cheerio,
    replace,
    clean,
    svgSprite
  }
} = $;

function cleanSvgFolder() {
  return gulp.src(process.env.BUILD_SVG, {
    read: false,
    allowEmpty: true
  }).pipe(clean())
}

function makeSvgSprite() {
  const svgConfig = {
    shape: {
      transform: [{
        svgo: {
          plugins: [{
            removeUselessStrokeAndFill: false
          }]
        }
      }]
    },

    mode: {
      symbol: {
        dest: '',
        sprite: 'sprite.svg'
      }
    }
  };

  return gulp
    .src(process.env.SRC_SVG)
    .pipe(gulp.dest(process.env.BUILD_SVG + '/source'))
    .pipe(
      cheerio({
        run: function ($) {
          // $('[fill]').removeAttr('fill');
          // $('[stroke]').removeAttr('stroke');
          // $('[style]').removeAttr('style');
        },
        parseOptions: {
          xmlMode: true
        }
      })
    )
    .pipe(replace('&gt;', '>'))
    .pipe(svgSprite(svgConfig))
    .pipe(gulp.dest(process.env.BUILD_SVG))
    .pipe(bs.reload({stream: true}))
}

gulp.task('svg', gulp.series(cleanSvgFolder, makeSvgSprite));