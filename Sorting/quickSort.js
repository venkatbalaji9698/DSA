function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function pivot(arr, startIndex, endIndex) {
  let pivotIndex = startIndex;

  for (var i = startIndex + 1; i <= endIndex; i++) {
    if (arr[startIndex] > arr[i]) {
      pivotIndex++;
      swap(arr, i, pivotIndex);
    }
  }

  swap(arr, startIndex, pivotIndex);

  return pivotIndex;
}

function quickSort(arr, startIndex, endIndex) {
  if (startIndex < endIndex) {
    const pivotIndex = pivot(arr, startIndex, endIndex);

    quickSort(arr, startIndex, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, endIndex);
  }

  return arr;
}

// below to test big data
// const arr = [];
// for (let i = 8299; i > 0; i--) {
//   arr.push(i);
// }

const arr = [3, -1, 11, 5, 1, 2, 4, 10];
console.log(quickSort(arr, 0, arr.length - 1));
