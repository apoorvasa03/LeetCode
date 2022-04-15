/** Time: O(N^2)  Space: O(1)*/
var longestPalindrome = function(s) {
    if(!s) return ''
    let count = 0
    for(let i =0; i < s.length; i++){
        count += expandAroundCenter(s, i, i);
        count += expandAroundCenter(s, i , i+1)
    }
    return count
}

function expandAroundCenter(s, left, right){
    let ans = 0 
    while(left >= 0 && right < s.length && s[left] == s[right]){
        left--
        right++
        ans++ // bcz during each expand we can add number of palidendrom 1
    }
    return ans
}

console.log(longestPalindrome("abc")) // 3
console.log(longestPalindrome("aaa")) // 6

