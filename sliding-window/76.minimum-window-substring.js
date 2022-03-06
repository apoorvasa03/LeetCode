/** time: O(n) space: o(1)*/
// check 438. this problem will become easy
var minWindow = function(s, t) {
    let minStr = ""
    let needChars = {}

    for(let char of t){
        needChars[char] = (needChars[char] || 0) + 1
    }

    let right = 0
    let left = 0
    let count = t.length

    while(right < s.length){

        if(needChars[s[right]] > 0) count--
        needChars[s[right]]--
        right++

        while(count === 0){
            if(minStr == "" || minStr.length > right - left){
                minStr = s.slice(left, right)
            }
            if(needChars[s[left]] >= 0) count++
            needChars[s[left]]++
            left++
        }
    }
    return minStr
};

console.log(minWindow("ADOBECODEBANC", "ABC"))
console.log(minWindow("a", "a"))
console.log(minWindow("a", "aa"))