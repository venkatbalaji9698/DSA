function binarySearch(arr, ele) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    const middle = Math.floor((max + min) / 2);

    if (arr[middle] === ele) {
      return middle;
    } else if (arr[middle] < ele) {
      min = middle + 1;
    } else {
      max = middle - 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 5));
