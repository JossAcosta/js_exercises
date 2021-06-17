function arrayDiff(a, b) {
    let _difference = new Set(a)
    if (a.length === 0) return a;
    for (let elem of b) {
        if (_difference.has(elem)) {
            _difference.delete(elem)
        } else {
            _difference.add(elem)
        }
    }
    // let difference = arrA.filter(x => !arrB.includes(x));
    let diff = a.filter(x => !b.includes(x));
    return diff;
    // return Array.from(_difference);

}

    console.log(arrayDiff([], [4,5]));
    console.log(arrayDiff([3,4], [3]));
    console.log(arrayDiff([1,8,2], []));
    console.log(arrayDiff([1,2,3], [1,2]))
