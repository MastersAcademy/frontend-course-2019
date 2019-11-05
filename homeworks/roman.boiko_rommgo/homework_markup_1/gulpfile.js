const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');




gulp.task('build', function () {
    return gulp.src("./sass/style.scss")
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            overrideBrowserslist:  ['> 0.01%'],
            cascade: false
        }))
        // .pipe(cleanCSS({
        //     level: 2
        // }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("./css"))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch', function () {
    gulp.watch("./sass/**/*.scss", gulp.parallel('build'));
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }

    });
});

gulp.task('default', gulp.parallel('watch','browserSync', 'build'));
