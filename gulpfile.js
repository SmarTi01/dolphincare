'use strict';
const gulp = require('gulp'),
    babel = require('gulp-babel'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename');

const config = {
    basePath: 'dolphincare/',
    sassDevOutput: 'dolphincare/content/css/'
}

const globs = {
    sass: [
        './dolphincare/**/*.scss',
        './dolphincare/libs/**/*.scss',
    ],
    js: [
        './dolphincare/**/*.ts',
        '!./dolphincare/libs/**/*.ts'
    ]
}



gulp.task('dev_sass', () => {
    return gulp.src(globs.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(config.basePath));
});

gulp.task('babelwatch', () => {
    return gulp.watch(globs.js, function (obj) {
        console.log(obj.path);
        if (obj.type === 'changed') {
            gulp.src(obj.path, { base: './' })
                .pipe(babel())
                .pipe(gulp.dest('.'))
        }
    });
});

gulp.task('babel', () => {
    gulp.src(globs.js, { base: './' })
        .pipe(babel())
        .pipe(gulp.dest('.'))
});

gulp.task('sasquatch', () => {
    gulp.watch(globs.sass, ['dev_sass']);
})