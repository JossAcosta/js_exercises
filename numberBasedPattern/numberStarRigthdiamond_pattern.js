var l = "hoOola";
var arr = l.toLowerCase().split("");
var result =[];
var myMap = arr.forEach(e =>{
    if(result.indexOf(e) == -1){
        result.push(e);
    }
});

console.log(result.join(""));

var res= new Set(arr);
console.log(...res);
