const leapYears = function(year) {

    let isLeapYear = true;

    if (year % 4 !== 0          // not leap year if not divisible by 4
        || year % 100 === 0     // not leap year if divisible by 100 but not 400
        && year % 400 !== 0) {

        isLeapYear = false;

    }

    return(isLeapYear);

};

// Do not edit below this line
module.exports = leapYears;
