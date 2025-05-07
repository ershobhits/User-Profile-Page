const gulp = require('gulp');
const sass = require('gulp-dart-sass'); 
const fileInclude = require('gulp-file-include');

gulp.task('styles', () => {
  return gulp.src('src/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});


// Compile HTML with partials
gulp.task('html', () => {
  return gulp.src('src/index.html')
    .pipe(fileInclude({ prefix: '@@', basepath: '@file' }))
    .pipe(gulp.dest('dist'));
});

// Copy JS
gulp.task('scripts', () => {
  return gulp.src('src/js/*.js')
    .pipe(gulp.dest('dist/js'));
});

// Watch for changes
gulp.task('watch', () => {
  gulp.watch('src/scss/**/*.scss', gulp.series('styles'));
  gulp.watch('src/**/*.html', gulp.series('html'));
  gulp.watch('src/js/**/*.js', gulp.series('scripts'));
});

// Default task
gulp.task('default', gulp.series('styles', 'html', 'scripts', 'watch'));
