const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 0;
    let depth = 1;

    arr.map(element => {
      if (Array.isArray(element)) {
        count = this.calculateDepth(element) + 1;
        if (count > depth) {
          depth = count;
        }
      }
    });
    return depth;
  }
};