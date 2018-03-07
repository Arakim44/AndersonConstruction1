var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();


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

    watch('./app/about.html', function() {
        browserSync.reload(); //reload automatically when saving html.
    });

    watch('./app/work.html', function() {
        browserSync.reload(); //reload automatically when saving html.
    });
    
    watch('./app/contact.html', function() {
        browserSync.reload(); //reload automatically when saving html.
    });

    watch('./app/thanks.html', function() {
        browserSync.reload(); //reload automatically when saving html.
    });
    
    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('cssInject'); 
    });

    watch('./app/assets/scripts/**/*.js', function() {
        gulp.start('scriptsRefresh');
    })

});


//browser sync can inject the latest CSS without refreshing the page.
gulp.task('cssInject',['styles'], function() {//dependency: cssInject won't begin until styles task is completed. 
    return gulp.src('./app/temp/styles/styles.css')//point toward our compiled css
        .pipe(browserSync.stream());
});


gulp.task('scriptsRefresh',['scripts'], function() {
    browserSync.reload();
})
