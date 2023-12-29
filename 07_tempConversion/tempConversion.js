const convertToCelsius = function(tempInFar) {
  let tempInCel = Math.round((tempInFar - 32) * (5 / 9) * 10) / 10;
  return tempInCel;
};

const convertToFahrenheit = function(tempInCel) {
  let tempInFar = Math.round(((tempInCel * 9) / 5 + 32) * 10) / 10;
  return tempInFar;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
