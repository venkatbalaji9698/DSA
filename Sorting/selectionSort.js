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

const ab = [];
for (let i=100000; i>0; i--) {
  ab.push(i);
}

console.log(selectionSort(ab));
// console.log(selectionSort([1, 2, 3, 5, 4]));
