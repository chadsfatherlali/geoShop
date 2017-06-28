var gulp = require('gulp');
var postcss = require('gulp-postcss');
var shortColor = require('postcss-short-color');

gulp.task('css', function () {
  return gulp.src('postcss/*.css')
  .pipe(postcss([shortColor]))
  .pipe(gulp.dest('client'));
});