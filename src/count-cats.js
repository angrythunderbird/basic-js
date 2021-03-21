const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let cats = matrix.flat().filter(i => i === '^^');
  return cats.length;
};
