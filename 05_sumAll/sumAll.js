const sumAll = function(lowInt, highInt) {

    let sum = 0;

    if (lowInt <= 0
        || highInt <= 0
        || typeof(lowInt) !== 'number'
        || typeof(highInt) !== 'number') {

        sum = 'ERROR';

    } else if (lowInt <= highInt) {

        for (i = lowInt; i <= highInt; i++) {

            sum += i;

        }
    } else {

        for (i = highInt; i <= lowInt; i++)
        sum += i;

    }

    return(sum);

};

// Do not edit below this line
module.exports = sumAll;
