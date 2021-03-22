const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let moveCount = 2 ** disksNumber - 1;
  let movesTime = Math.floor(moveCount * 3600 / turnsSpeed);
  let hanoiObj = { turns: moveCount, seconds: movesTime };
  return hanoiObj;
};
