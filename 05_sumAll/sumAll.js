const sumAll = function(numberOne, numberTwo) {
    if( !Number.isInteger(numberOne) || !Number.isInteger(numberTwo) ){
        return "ERROR";
    }
    if( numberOne <0 || numberTwo <0 ){
        return "ERROR";
    }
    if ( numberOne > numberTwo ){
        let temp = numberOne;
        numberOne = numberTwo;
        numberTwo = temp;
    }
    let value = 0;
    let addBy = numberOne;
    for ( let i=numberOne; i <= numberTwo; i++ ){
        value = value + addBy;
        addBy++;
    }
    return value; 
};

// Do not edit below this line
module.exports = sumAll;
