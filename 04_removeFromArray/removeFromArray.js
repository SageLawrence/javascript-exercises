const removeFromArray = function(array, ...args) { // ...args accepts multiple inputs for removal

    const removedValues = Array.from(args); // converts removed into an actual array with ALL array properties

    for (const removed of removedValues) { // moves through the array of what you'd like to remove

        for (const index of array) { // for each removed, iterates through the array

            if (removed === index) { // checks equality for removal

                array.splice((array.indexOf(index)),1); // removes value at the index of each value that matches a removed value

            }
        }
    }

    return(array); // returns the edited array

};

// Do not edit below this line
module.exports = removeFromArray;
