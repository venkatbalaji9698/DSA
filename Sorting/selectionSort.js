function selectionSort(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        const temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }

  return arr;
}

// const arr = [];
// for (let i=100000; i>0; i--) {
//   arr.push(i);
// }
const arr = [3, -1, 11, 5, 1, 2, 4, 10];

console.log(selectionSort(arr));
