function isIsogram(str){
    word = str.toLowerCase().split("").sort();
    for (var i=0;i<word.length-1;i++){
      if (word[i]==word[i+1]) return false;
      }
    return true;
}
console.log ( isIsogram("aba") );
console.log ( isIsogram("Dermatoglyphics") );
console.log ( isIsogram("isogram") );
console.log ( isIsogram("moOse") );
console.log ( isIsogram("isIsogram"));
console.log ( isIsogram(""));