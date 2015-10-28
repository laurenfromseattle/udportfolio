// Include gulp
var gulp = require('gulp');

// Include plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var csso = require('gulp-csso');
var htmlmin = require('gulp-htmlmin');
var inlinecss = require('gulp-inline-css');

// Concat and minify JS
gulp.task('scripts', function() {
	return gulp.src('src/js/*.js')
		.pipe(concat('main.js'))
			.pipe(rename({suffix: '.min'}))
			.pipe(uglify())
			.pipe(gulp.dest('build/js'));
});

gulp.task('scripts-views', function() {
	return gulp.src('src/views/js/*.js')
		.pipe(concat('main.js'))
			.pipe(rename({suffix: '.min'}))
			.pipe(uglify())
			.pipe(gulp.dest('build/views/js'));
});

// Minifies CSS
gulp.task('styles', function() {
	return gulp.src('src/css/*.css')
		.pipe(rename({suffix: '.min'}))
		.pipe(csso())
		.pipe(gulp.dest('build/css'));
});

gulp.task('styles-views', function() {
	return gulp.src('src/views/css/*.css')
		.pipe(rename({suffix: '.min'}))
		.pipe(csso())
		.pipe(gulp.dest('build/views/css'));
});

// Inlines css in index.html
gulp.task('inline-styles', function() {
	return gulp.src('src/*.html')
	.pipe(inlinecss({preserveMediaQueries: true}))
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('./'));
});

// Default task
gulp.task('default', ['scripts', 'scripts-views', 'styles', 'styles-views', 'inline-styles']);