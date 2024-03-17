function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] + arr[right] === 0) {
      return [arr[left], arr[right]];
    }
    if (arr[left] + arr[right] > 0) {
      right--;
    } else {
      left++;
    }
  }

  return null;
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5, 6]));
