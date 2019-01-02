import gulp from 'gulp'
import htmlmin from 'gulp-htmlmin'
import runSequence from 'run-sequence'
import shell from 'gulp-shell'

gulp.task('hugo-build', shell.task(['hugo']))

gulp.task('minify-html', () => {
  return gulp.src('docs/**/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
      removeComments: true,
      useShortDoctype: true,
    }))
    .pipe(gulp.dest('./docs'))
})

gulp.task('build', ['hugo-build'], (callback) => {
  runSequence('minify-html', callback)
})
