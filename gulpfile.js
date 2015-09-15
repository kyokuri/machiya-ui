var gulp = require('gulp');
var less = require('gulp-less');
var minifyCss = require('gulp-minify-css');
var browserSync = require('browser-sync');
var sourcemaps = require('gulp-sourcemaps');

var LESS_ROOT = './src/less';
var CSS_ROOT = './dist/css';
var EXAMPLE_ROOT = './example';

gulp.task('less', function() {
  return gulp.src(LESS_ROOT + '/app.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(minifyCss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(CSS_ROOT));
});

gulp.task('watch', function() {
  gulp.watch(LESS_ROOT + '/**', ['less']);
});

gulp.task('server', function() {
  browserSync({
    server: {
      baseDir: EXAMPLE_ROOT
    }
  });

  gulp.watch(LESS_ROOT + '/**', ['less', function() {
    browserSync.reload();
  }]);
});

gulp.task('default', ['less'], function() {});
