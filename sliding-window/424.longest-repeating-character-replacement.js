
var characterReplacement = function(s, k) {
    let left = 0; right = 0
    let visited = {}
    let maxCharCount = 0
    let result = 0

    while(right < s.length){

        visited[s[right]] =  visited[s[right]] + 1 || 1;
        maxCharCount = Math.max(maxCharCount, visited[s[right]])

        if((right - left + 1 - maxCharCount > k)){
            visited[s[left]] = visited[s[left]] - 1;
            left++
        } else {
            right++
        }
        result = Math.max(right - left, result)
    }

    return result
};

console.log(characterReplacement("ABAB", 2))
console.log(characterReplacement("AABABBA", 1))