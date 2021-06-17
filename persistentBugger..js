function persistence(num) {
    var arr = num.toString().split('');
    var count = 0;

    while (arr.length > 1) {
        var product = arr.reduce(function(a, b) {
        return a * b;
        });
    count++;
    arr = product.toString().split("");
    }
    return count;
}
console.log(persistence(39));
console.log(persistence(25));
console.log(persistence(999));
console.log(persistence(4));


function persistence(num) {
    var times = 0;
    num = num.toString();
    while (num.length > 1) {
        times++;
        num = num.split('').map(Number).reduce((a, b) => a * b).toString();
    }
    return times;
}
console.log(persistence(39));
console.log(persistence(25));
console.log(persistence(999));
console.log(persistence(4));