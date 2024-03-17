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

const ab = [];
for (let i=100000; i>0; i--) {
  ab.push(i);
}

console.log(bubbleSort(ab));
// console.log(bubbleSort([1, 2, 3, 5, 4]));
