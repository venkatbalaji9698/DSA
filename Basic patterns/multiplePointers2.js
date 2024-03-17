function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let i = 0;
  let j = 1;

  while (j < arr.length) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    j++;
  }

  return i + 1;
}

// array should be in ascending order
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
