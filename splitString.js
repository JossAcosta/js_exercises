function solution(str){
   var chunck = str.split('').chunk(2);
   return chunck;
}

console.log(solution("abcdef"));
console.log(solution("abcdefg"));
console.log(solution(""), []);