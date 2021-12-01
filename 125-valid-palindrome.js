/** time - o(n)  space- 0(1) */ 
function isPalindrome(s){
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
        if (s.charAt(i) !== s.charAt(j)) return false;
      }
    return true
}

/** time - o(n)  space- 0(1) */ 
function isPalindrome1(s){
    // /W = /[0-9A-Za-z_]/
    s = s.replace(/\W|_/ig, '').toLowerCase()
    
    let set = new Set()
    for(let i =0; i< s.length; i++){
        if(set.has(s[i])){
            set.delete(s[i])
        }else{
            set.add(s[i])
        }
    }

    return set.size <= 1 
}

console.log(isPalindrome1("A man, a plan, a canal: Panama")) // true
console.log(isPalindrome("race a car")) // false
console.log(isPalindrome(" ")) // true
console.log(isPalindrome("Damosel, a poem? A carol? Or a cameo pale? (So mad!)")) // true