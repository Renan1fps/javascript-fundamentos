const { parallel } = require("gulp");
const gulp = require("gulp");
const series = gulp.series;

const antes1 = (cb) => {
  console.log("tarefa1");
  return cb();
};
const antes2 = (cb) => {
  console.log("tarefa2");
  return cb();
};

function copiar(cb) {
  gulp
    .src(["pastaA/arquivo1.txt", "pastaA/arquivo2.txt"])
    .pipe(gulp.dest("pastaB"));
  return cb();
}

module.exports.default = series(parallel(antes1, antes2), copiar);
