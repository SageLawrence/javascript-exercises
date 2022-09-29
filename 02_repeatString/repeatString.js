const repeatString = function(string, num) {

    let newString = ''; // initializes varaible without introducing 'undefined'

    for (let i = 1; i <= num; i++) { // loops from 1 to concatenate the correct amount of strings

        newString += string;

    };

    if (num < 0){ // sets the error message if the number is negative, comes after the first part to replace if it runs

        newString = 'ERROR';

    }

    return(newString);

}
// Do not edit below this line
module.exports = repeatString;
