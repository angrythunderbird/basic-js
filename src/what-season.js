const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  const notDate = 'Unable to determine the time of year!';
  const seasonsArr = ['winter', 'spring', 'summer', 'autumn'];
  let month = date.getMonth();

  if (isNaN(date.getTime())) {
    return notDate;
  }

  if (month < 2 || month === 11) {
    return seasonsArr[0];
  } else if (month < 5) {
    return seasonsArr[1];
  } else if (month < 8) {
    return seasonsArr[2];
  } else if (month < 11) {
    return seasonsArr[3];
  }
};