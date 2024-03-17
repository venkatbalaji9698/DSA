function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    const currentValue = arr[i];

    // for (var j = i - 1; j >= 0; j--) {
    //   if (currentValue < arr[j]) {
    //     arr[j + 1] = arr[j];
    //   } else {
    //     break;
    //   }
    // }

    // combine above code in for loop
    for (var j = i - 1; j >= 0 && currentValue < arr[j]; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = currentValue;
  }

  return arr;
}

const ab = [];
for (let i=100000; i>0; i--) {
  ab.push(i);
}

console.log(insertionSort(ab));
// console.log(insertionSort([1, 2, 3, 5, 4]));
