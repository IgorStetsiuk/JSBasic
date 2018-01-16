/*
1. Filter.
    Write your own implementation of Array.prototype.filter() method
*/


Array.prototype.myFilter = function (callback, thisArg) {
    let result = [];
    let array = this;

    let context = thisArg || this;

    for (let i = 0; i < array.length; i++) {
        let currentItem = array[i];

        let args = [currentItem, i, context];

        if (callback.apply(context, args)) {
            result[result.length] = currentItem;
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