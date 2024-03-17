function power(val, pow) {
    if (pow === 0) return 1;
    return val * power(val, --pow);
}

console.log(power(2, 0));
console.log(power(3, 2));
console.log(power(4, 4));
