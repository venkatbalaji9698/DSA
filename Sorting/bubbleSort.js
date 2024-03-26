function bubbleSort(arr) {
  for (var i = 1; i <= arr.length; i++) {
    let isSwapped = false;
    for (var j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }

    // breaks the loop if no swapping is happened.
    if (!isSwapped) {
        break;
    }
  }

  return arr;
}

// const arr = [];
// for (let i=100000; i>0; i--) {
//   arr.push(i);
// }
const arr = [3, -1, 11, 5, 1, 2, 4, 10];

console.log(bubbleSort(arr));
