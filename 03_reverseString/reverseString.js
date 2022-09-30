const reverseString = function(string) {

    stringArray = string.split(''); //moves to array of characters

    let reverseArray = []; //initialize before loop

    for (let i = 0; i < string.length; i++) { //<length as indices start from zero

       reverseArray[i] = stringArray.pop(); //moves last from original string to i position

    }
    
    stringReverse = reverseArray.join(''); //recombination without adding commas inbetween

    return(stringReverse);

};

// Do not edit below this line
module.exports = reverseString;
