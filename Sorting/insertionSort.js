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

// const arr = [];
// for (let i=100000; i>0; i--) {
//   arr.push(i);
// }
const arr = [3, -1, 11, 5, 1, 2, 4, 10];

console.log(insertionSort(arr));
