// time - o(n)  space- 0(1)
function isPalindrome(s){
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    console.log(s)
    for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
        if (s.charAt(i) !== s.charAt(j)) return false;
      }
    return true
}

// time - o(n)  space- 0(n)
function isPalindrome1(s){
    s = s.replace(/[^a-z]/ig, '').toLowerCase()
    
    let set = new Set()
    for(let i =0; i< s.length; i++){
        if(set.has(s[i])){
            set.delete(s[i])
        }else{
            set.add(s[i])
        }
    }

    return set.size <= 1 ? true: false
}

console.log(isPalindrome("Damosel, a poem? A carol? Or a cameo pale? (So mad!)"))