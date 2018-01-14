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


/*
3. Distinct values.
    Write a function that returns the distinct values of two arrays.
    Example:

distinctValues([3, 4, 6, 3, 1], [5, 10, 7, 1, 3, 9, 8, 7]);     //  [4, 6, 5, 10, 7, 9, 8]*/


function distinctValues(arr1, arr2) {
    let result = [];

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) === -1 && !result.includes(arr1[i])) {
            result.push(arr1[i]);
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) === -1 && !result.includes(arr2[i])) {
            result.push(arr2[i]);
        }
    }

    return result;

}

console.log(distinctValues([3, 4, 6, 3, 1], [5, 10, 7, 1, 3, 9, 8, 7]));


function distinctValues(arr1, arr2) {

    function getUnique(a, b) {
        a = Array.from(new Set(a));
        b = Array.from(new Set(b));

        return a.filter(item => {
            return !b.includes(item)
        });

    }

    return [...getUnique(arr1, arr2), ...getUnique(arr2, arr1)];

}

console.log(distinctValues([3, 4, 6, 3, 1], [5, 10, 7, 1, 3, 9, 8, 7]));

//
// function distinctValues(arr1, arr2) {
//     let concatArray = arr1.concat(arr2);
//
//     let result = [];
//     for (let i = 0; i < concatArray.length; i++) {
//         if (concatArray.indexOf(concatArray[i], concatArray.indexOf(concatArray[i]) + 1) === -1) {
//             result.push(concatArray[i])
//         }
//     }
//     return result;
// }
//
// console.log(distinctValues([3, 4, 6, 3, 1], [5, 10, 7, 1, 3, 9, 8, 7]));


/*4. Random.
    Write a function which creates an array with defined size and fills it with random values

function generateArr(arrSize) {...};*/


function generateArr(arrSize) {
    let randomArray = [];

    for (let i = 0; i < arrSize; i++) {
        randomArray.push(Math.floor(Math.random() * arrSize))
    }
    return randomArray;
}

console.log(generateArr(25), 'random array');

function generateArr2(arrSize) {
    return new Array(arrSize).fill(0).map(() => Math.floor(Math.random() * arrSize));
}

console.log(generateArr2(25), 'random array solution 2');

/*

5. Includes.
    Write your own implementation of Array.prototype.includes() method.*/

function myOwnIncludes(element, fromIndex) {
    let length = this.length;
    let from = 0;

    if (fromIndex && fromIndex > 0) {
        from = fromIndex
    } else if (fromIndex && fromIndex < 0) {
        from = length + fromIndex;
    }

    for (let i = from; i < length; i++) {

        if (this[i] !== this[i]) return true;

        if (this[i] === element) return true;

    }

    return false;
}

/* Tests */

console.log(myOwnIncludes.call([7, 15, 4, 0], 4, 3), 'expect false');
console.log(myOwnIncludes.call([7, 15, 4, 0], 4, 2), 'expect true');
console.log(myOwnIncludes.call([7, 15, 4, 0], 4), 'expect true');
console.log(myOwnIncludes.call([7, 15, 4, 0], 0, -1), 'expect true');

console.log(myOwnIncludes.call([null, undefined, [], NaN, 0], 0,), 'expect true , here NaN');

Array.prototype.myOwnIncludes = myOwnIncludes;

console.log(['cat', 'dog', 'bat'].myOwnIncludes('cat'), 'expect true --- ');

console.log([1, 2, 3].myOwnIncludes(2));     // true
console.log([1, 2, 3].myOwnIncludes(4));     // false
console.log([1, 2, 3].myOwnIncludes(3, 3));  // false
console.log([1, 2, 3].myOwnIncludes(3, -1)); // true
console.log([1, 2, NaN].myOwnIncludes(NaN)); // true