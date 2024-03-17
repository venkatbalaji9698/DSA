function sameFrequency(num1, num2) {
    let obj = {};

    while (num1 > 0) {
        const val = num1 % 10;
        num1 = Math.floor(num1 / 10);
        obj[val] = (obj[val] || 0) + 1;
    }

    while (num2 > 0) {
        const val = num2 % 10;
        num2 = Math.floor(num2 / 10);

        if (!obj[val]) {
            return false;
        } else {
            obj[val] -= 1;
        }
    }

    return true;
}

console.log(sameFrequency(1232, 3221));
console.log(sameFrequency(12, 321));
