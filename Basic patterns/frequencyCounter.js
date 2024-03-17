function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const obj = {};

  for (const char of str1) {
    obj[char] = (obj[char] || 0) + 1;
  }
  for (const char of str2) {
    if (!obj[char]) {
      return false;
    } else {
      obj[char] -= 1;
    }
  }

  return true;
}

console.log(validAnagram("hello", "lloeh"));
