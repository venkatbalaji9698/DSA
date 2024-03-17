function searchNumber(arr, num) {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        const middle = Math.floor((max + min) / 2);

        if (arr[middle] === num) {
            return middle;
        } else if (arr[middle] < num) {
            min = middle + 1;
        } else {
            max = middle - 1;
        }
    }

    return -1;
}

// array should be in ascending order
console.log(divideAndConquer([1, 2, 3, 4, 5, 6], 11));
