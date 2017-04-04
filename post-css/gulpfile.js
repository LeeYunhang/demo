let gulp = require('gulp')
let postcss = require('gulp-postcss')
let shortColor = require('postcss-short-color')
let autoprefixer = require('autoprefixer')
gulp.task('css', function () {
  return gulp.src('src/*.css')
  .pipe(postcss([shortColor, autoprefixer({browsers: ['> 1%'], cascade: false})]))
  .pipe(gulp.dest('dist'));
});
