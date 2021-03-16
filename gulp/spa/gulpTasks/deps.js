const gulp = require("gulp");
const uglifyCSS = require("gulp-uglifycss");
const concat = require("gulp-concat");

function depsCSS() {
  return gulp
    .src("node_modules/font-awesome/css/font-awesome.css")
    .pipe(uglifyCSS({ uglyComments: false }))
    .pipe(concat("deps.min.css"))
    .pipe(gulp.dest("build/asserts/css"));
}
function depsFonts() {

  return  gulp
  .src("node_modules/font-awesome/fonts/*.*")
  .pipe(gulp.dest('build/asserts/fonts'))
}

module.exports = {
  depsCSS,
  depsFonts,
};
