function mergeTwoSortedArrays(arr1, arr2) {
  const newArr = [];
  let index1 = 0;
  let index2 = 0;

  while (index1 < arr1.length && index2 < arr2.length) {
    if (arr1[index1] < arr2[index2]) {
      newArr.push(arr1[index1]);
      index1++;
    } else {
      newArr.push(arr2[index2]);
      index2++;
    }
  }

  while (index1 < arr1.length) {
    newArr.push(arr1[index1]);
    index1++;
  }

  while (index2 < arr2.length) {
    newArr.push(arr2[index2]);
    index2++;
  }

  return newArr;
}

// function getUniqueValueArray(arr) {
//   if (arr.length === 1) {
//     return [arr];
//   }

//   return getUniqueValueArray(arr.slice(0, arr.length / 2)).concat(
//     getUniqueValueArray(arr.slice(arr.length / 2, arr.length))
//   );
// }

// function mergeUniqueArray(arr) {
//   if (arr.length === 1) {
//     return arr[0];
//   }

//   let result = [];

//   for (var i = 0; i < arr.length; i = i + 2) {
//     result = result.concat([mergeTwoSortedArrays(arr[i], arr[i + 1] || [])]);
//   }

//   return mergeUniqueArray(result);
// }

// function mergeSort(arr) {
//   const newArr = getUniqueValueArray(arr);
//   return mergeUniqueArray(newArr);
// }

function simplifiedMergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  return mergeTwoSortedArrays(
    simplifiedMergeSort(arr.slice(0, arr.length / 2)),
    simplifiedMergeSort(arr.slice(arr.length / 2, arr.length))
  );
}

// below to test big data
// const arr = [];
// for (let i = 100000; i > 0; i--) {
//   arr.push(i);
// }
const arr = [1, 2, 3, -1, 5, 4];

console.log(simplifiedMergeSort(arr));
// console.log(mergeSort(arr));
