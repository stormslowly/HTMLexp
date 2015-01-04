'use strict';

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');

gulp.task('prefix', function() {

  return gulp.src('*.css')
    .pipe(autoprefixer())
    .pipe(minify({
      keepBreaks: true
    }))
    .pipe(gulp.dest('dist'));

});

gulp.task('default', ['prefix']);

gulp.task('watch', function() {
  gulp.watch('*.css', ['prefix']);
});