function repeatedString(s, n) {
    var totalString = "";
    var substr = [];
    var  i = 0;
    var count = 0;
    while(i< n){
        totalString += s;
        i++;
    }
    for (let i = 0; i < n; i++) {
        substr.push(totalString[i]);
    }
    substr.forEach(function(e){
        e.includes("a") ? count++ : "";
    })

    return count;
}

console.log(repeatedString("aba", 10));