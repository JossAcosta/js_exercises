function isPalindrome(arr){
    const testStr =arr.toLowerCase().split(' ').join('');
    let comparation  = testStr.split('').reverse().join("");
    return  testStr  == comparation ? 'yes, it is a palindrome' : 'Nope!'
}

console.log(isPalindrome("Anita lava la tina!"));
console.log(isPalindrome("Anita lava la tina"));