var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
 
// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync({
        server: "./"
    });

    gulp.watch("./sass/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./sass/*.scss")
        .pipe(sass({outputStyle: "compressed"}))
        .pipe(gulp.dest("./css"))
        .pipe(reload({stream: true}));
});

gulp.task('default', ['serve']);