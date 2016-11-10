var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

gulp.task('default', function() {
  // place code for your default task here
});

//less compiler
gulp.task('less', function () {
  return gulp.src('less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('css/'));
});


//watch less changes
gulp.task('watch', function () {
  gulp.watch('less/**/*.less', ['less']);
});


gulp.task('default', ['less', 'watch']);
