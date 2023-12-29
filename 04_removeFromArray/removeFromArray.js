const removeFromArray = function(array, ...removeNumbers) {
    let newArray = [];
    for ( let i=0; i<array.length; i++ ){
        if ( !removeNumbers.includes(array[i]) ){
            newArray.push(array[i]);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
