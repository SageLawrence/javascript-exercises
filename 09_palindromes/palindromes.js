const palindromes = function (input) {

    let array = input.split(''); // converts the string to an array

    for (i = 0; i < array.length; i++) { // loops through array items

        if (array[i] === '.' // selects spaces and punctuation
        || array[i] === '!'
        || array[i] === ','
        || array[i] === '?'
        || array[i] === ' ') {

            index = array.indexOf(array[i]); // finds the index of the first index of the selected punctuation

            array.splice(index, 1); // removes punctuation

            i--; // sets i back by one if something is removed so that nothing is skipped
        } else {

            array[i] = array[i].toLowerCase(); // sets all letters in the array to lowercase

        }

    };

    let result = true; // initialized as true, only takes one fail to make false

    for (i = 0; i <= (array.length)/2 - 1; i++) { // counts halfway through values in array, skips center value if count is odd

        if (array[i] !== array[array.length - i - 1]) { // compares last to first and moves inward

            result = false; // sets result false if values don't match

            break; // stops loop if set to false

        }

    }

    return(result);

};

// Do not edit below this line
module.exports = palindromes;
