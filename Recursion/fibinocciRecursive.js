function fibinocci(n) {
    if (n <= 2) return 1;
    return fibinocci(n - 1) + fibinocci(n - 2);
}

console.log(fibinocci(4));

