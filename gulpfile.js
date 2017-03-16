var gulp = require('gulp');
var del = require('del');
var autoprefixer = require('gulp-autoprefixer');
var usemin = require('gulp-usemin');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var sass = require('gulp-sass');

gulp.task('oi', function(){
    console.log('ola, gulp!');
});

gulp.task('limpa', function(){
    return del('build');

});

gulp.task('copia', ['limpa'], function(){
    //retorna todos arquivo e diretorios dentro do src
    //depois copia para a pasta build
    return gulp.src('src/**/*') 
                .pipe(gulp.dest('build'));

});

gulp.task('prefixar', ['copia'], function(){
    return gulp.src('build/css/*.css')
                .pipe(autoprefixer({
                    browsers:[
                        'Chrome>=21',
                        'Firefox>=29',
                        'IE 10'
                    ]
                }))
                .pipe(gulp.dest('build/css'));

});

gulp.task('minifica', ['prefixar'], function(){
    return gulp.src('build/*.html')
            .pipe(usemin({
                css: [minifyCss()],
                js: [uglify()]
            }))
            .pipe(gulp.dest('build'));
});

gulp.task('default', function(){
    gulp.start('minifica');
});

gulp.task('sass', ['copia'], function(){
        return gulp.src('build/scss/*.scss')
                .pipe(sass())
                .pipe(gulp.dest('build/css'))
});

gulp.task('observa', ['sass'], function(){
    watch('src/**/*', function(){
        gulp.start('minifica');
    })
});