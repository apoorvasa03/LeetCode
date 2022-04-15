
/** Time: O(n^2) space: O(1) */
var longestPalindrome = function(s) {
    if(!s) return ''
    let longest = ''
    for(let i =0; i < s.length; i++){
        let oddPalindrom = expandAroundCenter(s, i, i);
        let evenPalindrom = expandAroundCenter(s, i , i+1)
        if(oddPalindrom.length > longest.length) longest = oddPalindrom
        if(evenPalindrom.length > longest.length) longest = evenPalindrom
        
    }
    return longest
}

function expandAroundCenter(s, left, right){
    while(left >= 0 && right < s.length && s[left] === s[right]){
        left--
        right++
    }
    // since left is move backward and right is move forward once before while, we need to balance it
    return s.slice(left +1 , right)
}

console.log(longestPalindrome('a')) //a
console.log(longestPalindrome('babad')) // bab
console.log(longestPalindrome('cbbd')) // bb
console.log(longestPalindrome('ac')) // a

