var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins');

gulp.task('styles', function() {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer])) //css autoprefix and simple vars also nested
        .on('error',function (errorInfo) {
            console.log(errorInfo.toString()); //consoles the error info that is readable.
            this.emit('end'); //even with error, watch task won't stop.
        })
        .pipe(gulp.dest('./app/temp/styles'));
});
