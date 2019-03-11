var gulp = require('gulp'),
    sass= require('gulp-sass');


gulp.task('sass', function(){
    return gulp.src('./sass/**/*main_1920.{sass,scss}')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('./css'))
});
gulp.task('sassmob', function(){
    return gulp.src('./sass/**/*main_320.{sass,scss}')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('./css'))
});
gulp.task('sasspl', function(){
    return gulp.src('./sass/**/*main_767.{sass,scss}')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('./css'))
});


gulp.task('watch', function() {
    gulp.watch('./sass/**/*.{sass,scss}' , gulp.parallel('sass','sassmob','sasspl'));
});

gulp.task('default', gulp.parallel('watch'));