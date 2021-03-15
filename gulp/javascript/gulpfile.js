const { series } = require("gulp");
const gulp = require("gulp");
const uglyfy = require("gulp-uglify");
const concat = require("gulp-concat");
const babel = require("gulp-babel");

function padrao(cb) {
  return gulp
    .src("src/**/*.js")
    .pipe(
      babel({
        comments: false,
        presets: ["env"],
      })
    )
    .pipe(uglyfy())
    .pipe(concat("codigo.min.js"))
    .pipe(gulp.dest("build")); 
}

exports.default = series(padrao);
