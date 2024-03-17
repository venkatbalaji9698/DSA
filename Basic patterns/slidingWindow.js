function findMaxSum(arr, num) {
    let tempSum = 0;
    let maxSum = 0;

    for (let i=0; i<num; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;

    for(let i=num; i<arr.length; i++) {
        tempSum = tempSum + arr[i] - arr[i - num];
        maxSum = Math.max(tempSum, maxSum);
    }

    return maxSum;
}

console.log(findMaxSum([2, 6, 9, 2, 1, 8, 5, 6], 3));
