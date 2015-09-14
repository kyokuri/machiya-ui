var gulp = require('gulp');
var less = require('gulp-less');
var minifyCss = require('gulp-minify-css');

var LESS_ROOT = './src/less';
var CSS_ROOT = './dist/css';

gulp.task('less', function() {
  return gulp.src(LESS_ROOT + '/app.less')
    .pipe(less())
    .pipe(minifyCss())
    .pipe(gulp.dest(CSS_ROOT));
});

gulp.task('watch', function() {
  gulp.watch(LESS_ROOT + '/**', ['less']);
});

gulp.task('default', ['less'], function() {});
