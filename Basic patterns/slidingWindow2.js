function findLongestSubstring(str) {
  let indexObj = {};
  let max = 0;
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    if (indexObj[str[i]]) {
        // store current index
        start = Math.max(start, indexObj[str[i]]);
    }

    max = Math.max(max, i - start + 1);

    indexObj[str[i]] = i + 1;
  }

  return max;
}

console.log(findLongestSubstring(""));
console.log(findLongestSubstring("rithmschool"));
console.log(findLongestSubstring("thisisawesome"));
console.log(findLongestSubstring("thecatinthehat"));
console.log(findLongestSubstring("bbbbbb"));
console.log(findLongestSubstring("longestsubstring"));
console.log(findLongestSubstring("thisishowwedoit"));
