"use strict";
function selectionSort(arr) {
    var _a;
    for (var i = 0; i < arr.length; i++) {
        var minIndex = findMinIndex(arr, i);
        _a = [arr[minIndex], arr[i]], arr[i] = _a[0], arr[minIndex] = _a[1]; // swap
    }
}
function findMinIndex(arr, startIndex) {
    var minValue = arr[startIndex];
    var minIndex = startIndex;
    for (var i = startIndex + 1; i < arr.length; i++) {
        var currentValue = arr[i]; // i is next element
        if (currentValue < minValue) {
            minValue = currentValue;
            minIndex = i;
        }
    }
    return minIndex;
}
var arr = [4, 2, 6, 3, 1, 5];
console.log('arr before:', arr);
selectionSort(arr);
console.log('arr after:', arr);
