var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    minifycss = require('gulp-csso'),
    gutil = require('gulp-util'),
    rename = require('gulp-rename');

gulp.task('styles', function(){ 
    gutil.log(gutil.colors.magenta('Compiling Sass, autoprefixing, minifying...'));
    gulp.src('sass/**/*.scss')
        .pipe(sass({ style: 'expanded' }))
        .pipe(autoprefixer('last 2 version','safari 5', 'ie 9'))
        .pipe(gulp.dest('build/css'))
        .pipe(concat('themes/Kelbster/static/css/*.css'))
        .pipe(minifycss())
        .pipe(rename('kelbster.min.css'))
        .pipe(gulp.dest('themes/Kelbster/static/css'));
});

gulp.task('watch', function() {
  gulp.watch('sass/**/*.scss', ['styles']);
});

gulp.task('default', ['styles', 'watch']);