/** time: O(N)  space: O(1)*/
var myAtoi = function(s) {
    let result = 0;
    let i =0
    let isNegative = false

    while(s[i] === ' ') i += 1

    if(s[i] === '+' || s[i] === '-'){
      isNegative = s[i] === '-'
      i += 1
    }
   
    for(; i < s.length; i++){
      const code = s.charCodeAt(i) - 48
      if(code < 0 ||  code > 9 ){
        break;
      }
      result *= 10;
      result += code
    }

    if(isNegative) result *= -1
    return Math.max(-(2**31), Math.min((2**31 -1), result))
};


console.log(myAtoi("42"))
console.log(myAtoi("   -42"))
console.log(myAtoi("4193 with words"))
console.log(myAtoi("words and 987"))
console.log(myAtoi("-91283472332"))