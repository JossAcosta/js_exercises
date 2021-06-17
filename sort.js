function countSwaps(a) {
    var count = 0;
   for(var i=0; i< a.length; i++){
       if(a[i] > [a[i] + 1]){
           count +=1;
       }
       var result = `
       Array is sorted in ${count} swaps.
       First Element: ${Math.min(...a)}
       Last Element: ${Math.max(...a)}
       `;
    
       return result;
   }

}
console.log(countSwaps([3, 2, 1]));