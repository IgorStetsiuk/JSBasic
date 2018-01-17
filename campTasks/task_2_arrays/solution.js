/*
1. Filter.
    Write your own implementation of Array.prototype.filter() method
*/


Array.prototype.myFilter = function (callback, thisArg) {
    let result = [];
    let array = this;

    for (let i = 0; i < array.length; i++) {
        let args = [array[i], i, array];

        if (callback.apply(thisArg, args)) {
            result[result.length] = array[i];
        }
    }

    return result;
};

/* Tests for myFilter function */

let obj = {
    ownArray: [12, 5, 8, 130, 44, 100],
    checkedValue: 12
};

function filterWithContextMoreThen10(item) {
    return item >= this.checkedValue;

}

function moreThen10(item) {
    return item > 10;
}


function isBigEnough(value) {
    return value >= 10;
}

let filtered = [12, 5, 8, 130, 44].myFilter(isBigEnough);
console.log(filtered);
// filtered is [12, 130, 44]

let resultWithContext = obj.ownArray.myFilter(filterWithContextMoreThen10, obj);

console.log(resultWithContext, 'Filter function with context');

console.log([2, 3, 7, 8, 10, 22, 11].myFilter(moreThen10), 'Filter function without context');

/*

2. Remove Zeros.
    Write a function that takes an array of values and moves all elements that are zero to the end of the array,
    otherwise preserving the order of the array. The zero elements must also maintain the order in which they occurred.
    Example:

[7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]
is transformed into
    [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]
*/
function moveZeros(arr) {
    let countedZeros = 0;
    for (let i in arr) {
        if (arr[i] === 0) countedZeros++;
    }

    while (countedZeros--) {
        arr.push(arr.splice(arr.indexOf(0), 1)[0]);
    }
    return arr;

}

console.log(moveZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]));

function moveZeros2(arr) {
    let length = arr.length - 1;
    let changedArray = arr.slice();

    changedArray.slice().forEach((item) => {
        if (!length) return;
        if (length-- && item === 0) {
            changedArray.push(changedArray.splice(changedArray.indexOf(item), 1)[0]);
        }
    });
    return changedArray;
}

console.log(moveZeros2([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]));

function moveZeros3(arr) {
    return arr.filter(p => p !== 0).concat(arr.filter(p => p === 0));
}

console.log(moveZeros3([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]));