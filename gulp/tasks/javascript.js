const gulp = require('gulp');

const $ = require('../plugins');
const conf = require('../conf').javascript;
var concat = require('gulp-concat');

gulp.task('javascript', () => {
  return gulp.src(conf.src)
    .pipe(concat('main.js'))
    .pipe(gulp.dest(conf.dest));
});