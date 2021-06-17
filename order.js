function order(words){
    if(words.length === 0) return '';
    var splited =  words.split(' ').sort((a,b) =>{
        return (Number(a.match(/\d/)) - Number(b.match(/\d/)));
    });

   return splited.join(' ');
    // return words.length === 0 ? "" : words.split(' ').sort((a, b) => {
    //     return (Number(a.match(/\d/)) - Number(b.match(/\d/)));
    //   }).join(' ');
}

console.log(order("is2 Thi1s T4est 3a"));
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
console.log(order(""));