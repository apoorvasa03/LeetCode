
/** Time: O(n^2) space: O(1) */
var longestPalindrome = function(s) {
    let count= 0; let start = 0; end = 0

    for(let i =0; i < s.length; i++){
        let oddPalindrom = expandAroundCenter(s, i, i);
        let evenPalindrom = expandAroundCenter(s, i, i+1)
        let len = Math.max(oddPalindrom, evenPalindrom)
        // we got len of substring and we know the center of string ie "i" now calculate start and end
        if(len > end - start){
            start = i - Math.floor((len-1)/2)
            end = i + Math.floor(len/2)
        }
    }

    return s.slice(start, end+1)
}

function expandAroundCenter(s, left, right){
    while(left >= 0 && right < s.length && s[left] === s[right]){
        left--
        right++
    }
    // since left move back -1 and right move +1, it will nullify
    return right - left - 1 // send the length of the substring
}


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

