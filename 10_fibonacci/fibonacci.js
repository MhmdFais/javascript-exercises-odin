const fibonacci = function(number) {

    let numberWeLook;
    if ( typeof number !== 'number' ){
        numberWeLook = parseInt(number);
    }
    else{
        numberWeLook = number;
    }

    if(numberWeLook === 0){
        return 0;
    }

    if ( numberWeLook < 0 ){
        return 'OOPS';
    }

    let first = 1;
    let second = 0;

    for (let i = 2; i <= numberWeLook; i++) {
        let current = first + second;
        second = first;
        first = current;
    }

    return first;
};

// Do not edit below this line
module.exports = fibonacci;
