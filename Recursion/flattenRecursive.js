function flatten(a) {
    if (a.length === 0) return [];
    if (Array.isArray(a[0])) return flatten(a[0]);
    return [a[0], ...flatten(a.slice(1))];
}

console.log(flatten([1, 2, [3, 4, [5, 6, 7]]]));
