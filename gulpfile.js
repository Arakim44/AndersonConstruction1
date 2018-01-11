var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
browserSync = require('browser-sync').create();


gulp.task('html',function() {
    console.log("usuful being done in HTML here.");
});

gulp.task('styles', function() {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport, cssvars, nested, autoprefixer])) //css autoprefix and simple vars also nested
        .pipe(gulp.dest('./app/temp/styles'));
});


gulp.task('watch', function() {

    browserSync.init({
        notify: false,
        server: {
            baseDir: "app" //telling browserSync where our website lives.
        }
    });

    watch('./app/index.html', function() {
        browserSync.reload(); //reload automatically when saving html.
    });

    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('cssInject'); 
    });
});

//browser sync can inject the latest CSS without refreshing the page.
gulp.task('cssInject',['styles'], function() {//dependency: cssInject won't begin until styles task is completed. 
    return gulp.src('./app/temp/styles/styles.css')//point toward our compiled css
        .pipe(browserSync.stream());
});
