const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const htmlmin = require('gulp-htmlmin');
const replace = require('gulp-replace')


function compilaSass(){
    return gulp.src('src/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('build/'))
}

function htmlMin (){
    return gulp.src('src/index.html')
    .pipe(replace('main.scss','main.css'))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build/'));
}

function observa(){
    gulp.watch('src/main.scss', compilaSass);
    gulp.watch('src/index.html', htmlMin)
}

gulp.task('sass', observa)
gulp.task('build',gulp.series(compilaSass, htmlMin))