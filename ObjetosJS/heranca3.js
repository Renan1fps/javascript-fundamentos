String.prototype.reverse = function () {
  //adiciono funçoes em meu prototype de string
  return this.split("").reverse().join("");
};

console.log("renan".reverse());

Array.prototype.first = function () {
  return this[0];
};

console.log([1, 2, 3, 5, 6, 7].first());
