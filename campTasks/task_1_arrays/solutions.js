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

console.log(removeDuplicates([1, 3, 7, 1, 3, 9, 8, 7]), 'remove duplicates test_1');
console.log(removeDuplicates([1, 1, 1, 1]), 'remove duplicates test_2');


/*
2. Common values.
    Write a function that returns the common values of two arrays.
    Example:

commonValues([3, 4, 6, 3, 1], [5, 10, 7, 1, 3, 9, 8, 7]);     //  [3, 1]*/

function commonValues(arr1, arr2) {
    let resultedArray = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j] && resultedArray.indexOf(arr1[i]) === -1) {
                resultedArray.push(arr1[i]);
            }
        }
    }
    return resultedArray;
}

console.log(commonValues([3, 4, 6, 3, 1], [5, 10, 7, 1, 3, 9, 8, 7]), 'common values');

function commonValues(arr1, arr2) {
    return arr1.reduce((prev, next) => {
        if (arr2.includes(next) && !prev.includes(next)) {
            return [...prev, next];
        }
        return prev;
    }, [])
}

console.log(commonValues([3, 4, 6, 3, 1, 11, 1, 0], [0, 5, 10, 7, 1, 3, 9, 8, 7, 0]), 'common values - solution 2');
