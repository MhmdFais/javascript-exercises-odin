const add = function(a, b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  return arr.reduce((tot, item)=> tot + item ,0);
};

const multiply = function(arr) {
  return arr.reduce((multiply, item) => multiply*item, 1);
};

const power = function(a,b) {
  return Math.pow(a,b);
};

const factorial = function(arr) {
	let fact = 1;
  if ( arr === 0 ){
    return 1;
  }
  else{
    for ( let i=1; i<=arr; i++ ){
      fact *= i;
    }
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
