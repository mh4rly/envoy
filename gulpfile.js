var gulp = require('gulp');
var path = require('path');
var neat = require('node-neat');

gulp.task('default', function() {
  // place code for your default task here
});

'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('sass/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: require('node-neat').includePaths
    }).on('error', sass.logError))
    .pipe(gulp.dest('css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'sass:watch']);
