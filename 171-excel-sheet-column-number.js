/** time - o(n)  space- 0(1) */ 
function titleToNumber(columnTitle){
    let res = 0
    for(let i=0; i< columnTitle.length; i++){
        let ascii = columnTitle.charCodeAt(i) - 64
        res = (res * 26) + ascii
    }
    return res
}

console.log(titleToNumber('A'))  // 1
console.log(titleToNumber('AB')) // 28
console.log(titleToNumber('ZY')) // 701
console.log(titleToNumber('FXSHRXW')) // 2147483647
console.log('a'.charCodeAt(0)) // 97 ascii value
console.log('A'.charCodeAt(0)) // 65 ascii value