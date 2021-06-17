function rotLeft(a, d) {
    var arr = [];
    for (var i = 0; i < a.length; i++) {
        arr.push(a[i]);
    };
    for (var j = 1; j <= d; j++) {
        arr.shift(arr.push(arr[0]));
    }
    return arr;

}

function rot(a) {
    var arr = [];
    var valueInit = a.shift();
    for (var i = 0; i < a.length; i++) {
            arr.push(a[i]);
        }
        arr.push(valueInit);
    return arr;

}

function rotLeft(d,a){
    if(d==0) return a;
    var rotated = rot(a);
    return rotLeft(d-1, rotated);
}

console.log(rotLeft(4, [1, 2, 3, 4, 5]));
// console.log(rotLeft([20, 10], [41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51]));