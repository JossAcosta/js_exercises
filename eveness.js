function iqTest(numbers){
    var res = [];
     numbers.split(' ').filter(e =>{  
       if( e%2 == 1 ){
         res.push('odd');
        }else{
           res.push('even');
       }
       
    })
   return res.filter(e=> res.indexOf(e))
  }

console.log(iqTest("2 4 7 8 10"));
console.log(iqTest("1 2 2"));
