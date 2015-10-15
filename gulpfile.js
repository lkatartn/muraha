var gulp = require('gulp');
var concat = require('gulp-concat');
var bowerFiles = require('gulp-bower-files');
var gulpFilter = require('gulp-filter');


gulp.task('default', function() {
	bowerFiles()
	.pipe(gulp.dest('./public/vendor'));
})