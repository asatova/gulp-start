const {src, dest} = require('gulp');

const scss = require('gulp-sass')(require('sass'));
// const concat = require('gulp-concat')
// const uglify = require('gulp-uglify-es').default;
// const browserSync = require('browser-sync').create();



function  styles(){
    return src('app/scss/style.scss')
          .pipe(scss())
          .pipe(dest('app/css'))

}



// function scripts(){
//     return src([
//         'node_modules/swiper/swiper-bundle.js',
//         'app/js/main.js'
//     ])
//         .pipe(concat('main.min.js'))
//         .pipe(uglify())
//         .pipe(dest('app/js'))
//         .pipe(browserSync.stream())
// }


exports.styles = styles;
// exports.scripts = scripts;