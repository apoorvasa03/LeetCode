/** time - o(n)  space- 0(1) */ 
function isPalindrome(s){
    s = s.replace(/\W|_/ig, '').toUpperCase() // s.toLowerCase().replace(/[^a-z0-9]/ig, '')
    for(let i =0; i < s.length/2; i++){
        if(s[i] !== s[s.length-1-i]) return false
    }
    return true
}

console.log(isPalindrome1("A man, a plan, a canal: Panama")) // true
console.log(isPalindrome("race a car")) // false
console.log(isPalindrome(" ")) // true
console.log(isPalindrome("Damosel, a poem? A carol? Or a cameo pale? (So mad!)")) // true