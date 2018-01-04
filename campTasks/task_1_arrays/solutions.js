/*
1. Remove duplicates.
    Write a function that removes duplicate values from an array.
    Example:

removeDuplicates([1, 3, 7, 1, 3, 9, 8, 7]);     //  [1, 3, 7, 9, 8]
*/


function removeDuplicates(array) {
    let result = [];
    for (let i = 0, length = array.length; i < length; i++) {
        if (result.indexOf(array[i]) === -1) result.push(array[i]);
    }
    return result

}

console.log(removeDuplicates([1, 3, 7, 1, 3, 9, 8, 7]));
console.log(removeDuplicates([1, 1, 1, 1]));