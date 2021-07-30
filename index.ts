function selectionSort(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        const minIndex = findMinIndex(arr, i);
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];  // swap
    }
}

function findMinIndex(arr: number[], startIndex: number) {
    let minValue = arr[startIndex];
    let minIndex = startIndex;
    for (let i = startIndex + 1; i < arr.length; i++) {
        const currentValue = arr[i]; // i is next element
        if (currentValue < minValue) {
            minValue = currentValue;
            minIndex = i;
        }
    }

    return minIndex;
}

const arr = [4, 2, 6, 3, 1, 5];
console.log('arr before:', arr);
selectionSort(arr);
console.log('arr after:', arr);