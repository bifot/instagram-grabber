var gulp = require('gulp');
var sass = require('gulp-sass');

// Compile Our Sass
gulp.task('sass', function() {
  return gulp.src('static/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('static/css'));
});

// Watch Files For Changes
gulp.task('watch', function() {
  gulp.watch('static/scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['sass', 'watch']);