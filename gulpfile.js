var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function() {
	return gulp.src('css/style.less')
	.pipe(less())
	.pipe(gulp.dest('css'))
});

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('prefixes', function () {
    return gulp.src('css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css'));
});
