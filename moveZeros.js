var moveZeros = function (arr) {
    var notZeroes = arr.filter(element => element !== 0);
    var zeroes = arr.filter(element => element ===0);

    return notZeroes.concat(zeroes);
}

var moveZeros = function (arr) {
    return arr.filter(notZeroes).concat(arr.filter(zeroes));
}
    function notZeroes(e){
        return  e ? e > 0 : false;
    }

    function zeroes(e){
        return e == 0;
    }
    console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))
//  ([ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ])

var moveZeros = function (arr) {
    var notZeroes =[];
    var zeroes = [];
    for (var i = 0 ;  i < arr.length ; i++) {
        if( arr[i] > 0){
            notZeroes.push(arr[i]);
        }else{
            zeroes.push(arr[i]);
        }
    }
    return notZeroes.concat(zeroes);
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))

var moveZeros = function (a) {
    if (a.length <= 1) { return a; }
    let moved = 0;
    for (let i = 0; i < a.length - 1; i++) {
        if (a[i-moved] === 0) {
            a.splice(i - moved, 1); // if this operation is O(N), then full implementation has O(N^2)
            a.push(0);
            moved++;
        }
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))