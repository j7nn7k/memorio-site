var gulp = require('gulp');
var util = require('gulp-util');

var clean = require('gulp-clean');
var concat = require('gulp-concat');
var header = require('gulp-header');
var less = require('gulp-less');
var recess = require('gulp-recess');
var minifyCss = require('gulp-minify-css');

var pkg = require('./package.json');

var bannerStyles = [
    '/*!',
    ' * memorio (c)',
    ' */',
    ''
].join('\n');

gulp.task('styles', function() {
    return gulp.src('./resources/styles/main.less')
        .pipe(less())
//        .pipe(recess())
        .pipe(concat('main.css'))
        .pipe(minifyCss())
        .pipe(header(bannerStyles))
        .pipe(gulp.dest('./css/'));
});

gulp.task('clean', function() {
    return gulp.src('./build', {read: false})
        .pipe(clean());
});

gulp.task('watch', function() {
    gulp.watch('./resources/styles/**/*', ['styles']);
});

gulp.task('default', ['clean', 'styles']);
