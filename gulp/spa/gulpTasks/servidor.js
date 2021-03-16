const gulp = require("gulp");
const webserver = require("gulp-webserver");
const { watch,series } = require("gulp");

function monitorarArquivos(cb) {
  watch("src/**/*.html", series("appHTML"));
  watch("src/**/*.scss", series("appCSS"));
  watch("src/**/*.js", series("appJS"));
  watch("src/assets/imgs/**/*.*", series("appIMG"));
  return cb();
}

function servidor() {
  return gulp.src("build").pipe(
    webserver({
      port: 8080,
      open: true,
      livereload: true,
    })
  );
}

module.exports = {
  monitorarArquivos,
  servidor,
};
