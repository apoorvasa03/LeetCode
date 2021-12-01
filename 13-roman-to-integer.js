// time - o(n)  space - o(1)
function romanToInteger(s){
    const symbols = {
		"I": 1,
		"V": 5,
		"X": 10,
		"L": 50,
		"C": 100,
		"D": 500,
		"M": 1000
	}
    let result = 0

    for(i =0; i < s.length; i++){
        if(symbols[s[i]] < symbols[s[i+1]]){
            result -= symbols[s[i]]
        }else{
            result += symbols[s[i]]
        }
    }
    return result
}

console.log(romanToInteger("MMMDCCCLXXXVIII")) // 3888
console.log(romanToInteger("MCMXCIV")) // 1994
console.log(romanToInteger("IX")) // 9
console.log(romanToInteger("IV")) // 4
console.log(romanToInteger("III")) // 3