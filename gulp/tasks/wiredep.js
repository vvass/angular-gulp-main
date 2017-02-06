const gulp = require('gulp');

const $ = require('../plugins');
const wiredep = require('wiredep').stream;
const conf = require('../conf').wiredep;

gulp.task('wiredep', () => {
  return gulp.src(conf.src)
    .pipe(wiredep());
});