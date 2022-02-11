/** Given a string s, return the longest palindromic substring in s. */

/** time -  o(n^2) space - o(1) */
function longestPalindrome(s){
    if(s.length < 1 || s === null) return ''
    let longest = ''

    for(let i=0; i < s.length; i++){
        let oddPalindrom = expandAroundCenter(s, i, i);
        let evenPalindrom = expandAroundCenter(s, i-1, i)
        if(oddPalindrom.length > longest.length) longest = oddPalindrom
        if(evenPalindrom.length > longest.length) longest = evenPalindrom
    }

    return longest
}

function expandAroundCenter(str, left, right){
    let i =0;
    while(left -i >= 0 && right+i <= str.length && str[left -i] === str[right+i]){
        i++
    }
    i--;

    return str.slice(left - i , right+i+1)
}

console.log(longestPalindrome('a')) //a
console.log(longestPalindrome('babad')) // bab
console.log(longestPalindrome('cbbd')) // bb
console.log(longestPalindrome('ac')) // a