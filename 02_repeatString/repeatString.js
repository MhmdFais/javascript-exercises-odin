const repeatString = function(word, times) {
    let finalWord = '';
    if (times<0){
        return "ERROR";     
    }
    else {
        for ( let i=0; i<times; i++ ){
            finalWord += word;
        }
    }
    return finalWord;
};

// Do not edit below this line
module.exports = repeatString;
