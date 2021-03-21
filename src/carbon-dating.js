const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity === 'string' && sampleActivity < MODERN_ACTIVITY && sampleActivity > 0) {
    return Math.ceil(Math.log(sampleActivity / MODERN_ACTIVITY)* (-HALF_LIFE_PERIOD) / 0.693 );
  } else return false;
};
