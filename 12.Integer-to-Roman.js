/**
 * time - o(1)  space o(n)
 * since we know the upper limit on how many time loop interate, which is 15 for MMMDCCCLXXXVIII(38888). therefore we say time complexcity is constant o(1)
 */
var intToRoman = function(num) {
    let result = "";
    if(num <= 0 || num > 3999) return result;
    let symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV","I"];
    let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    
    let i = 0;
    while(num > 0){
        if(num - values[i] >= 0){
            result += symbols[i]
            num -= values[i]
        }else{
            i++
        }
    }
    return result;
};

console.log(intToRoman(3888)) // MMMDCCCLXXXVIII
console.log(intToRoman(3999)) // MMMCMXCIX
console.log(intToRoman(58)) // LVIII
console.log(intToRoman(1994)) // MCMXCIV
console.log(intToRoman(9)) // IX
console.log(intToRoman(4)) // IV