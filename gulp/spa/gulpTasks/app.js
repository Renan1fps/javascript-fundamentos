const gulp = require("gulp");
const { series, parallel } = require("gulp");

function appHTML(cb) {
  return cb();
}
function appCSS(cb) {
  return cb();
}
function appJS(cb) {
  return cb();
}
function appIMG(cb) {
  return cb();
}

module.exports = { appHTML, appCSS, appIMG, appJS };
