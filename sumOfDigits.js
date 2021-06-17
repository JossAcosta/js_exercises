function digital_root(n) {


        let res =  n.toString().split('').map(function(e){return parseInt(e)}).reduce(function(a,b){ return a+b});
        return res >= 10 ? digital_root(res) : res


}


console.log( digital_root(16))
console.log( digital_root(456))