const gulp = require('gulp');
const requireDir = require('require-dir');
const runSequence = require('run-sequence');
const browserSync = require('browser-sync');
const reload = browserSync.reload;

const DIR = require('./gulp/conf').DIR;

requireDir('./gulp/tasks');

gulp.task('predefault', cb => {
  runSequence(
    'javascript',
    'replace-html',
    ['sass', 'watchify', 'copy-vendor-script','imagemin'],
    'wiredep',
    'serve',
    cb
  );
});

gulp.task('default', ['predefault'], () => {
  gulp.watch(
    [`./${DIR.SRC}/partials/**/*.html`],
    ['replace-html',reload]
  );

  gulp.watch(
    [`./${DIR.SRC}/**/*.{scss,sass}`],
    ['sass', reload]
  );

  gulp.watch(
    [`./${DIR.SRC}/**/*.js`],
    ['javascript', reload]
  );

  gulp.watch(
    [`./${DIR.DEST}/js/main.js`],
    reload
  );
});

gulp.task('build', cb => {
  runSequence(
    'clean',
    ['sass'],
    ['minify-css', 'browserify'],
    'uglify',
    'copy-vendor-script-to-build',
    cb
  );
});