'use strict';
 
const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./src/**/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(postcss())
    .pipe(rename('style.css'))
    .pipe(gulp.dest(__dirname));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/**/**/*.scss', gulp.series('sass'));
});