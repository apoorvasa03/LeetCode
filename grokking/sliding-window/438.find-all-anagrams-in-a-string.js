/** time - o(N_s)  space - o(K)
 Time complexity: We perform one pass along each string when N_s >= N_p which costs O(N_s + N_p) time.
  Since we only perform this step when N_s >= N_p, the time complexity simplifies to O(N_s)

Space Complexity:  p and s will contain at most KK elements each. Since K is fixed at 26 for this problem, 
this can be considered as O(1) space
*/
var findAnagrams = function(s, p) {
    let result = []
    let neededChars = {}

    if(s.length < p.length) return result

    for(let char of p ){
        neededChars[char] = (neededChars[char] || 0) + 1;
    }

    let left = 0;
    let right = 0;
    let count = p.length

    while(right < s.length){

        if(neededChars[s[right]] > 0) count--
        neededChars[s[right]] --
        right++

        if(count == 0) result.push(left)

        if(right - left === p.length){
            if(neededChars[s[left]] >= 0) count++
            neededChars[s[left]]++
            left++
        }
    }
    return result
}

// explained
var findAnagrams1 = function(s, p) {
    let result = []
    let neededChars = {}

    // populate every char in p as a key and how many times that char appears in p as its value.
    for(let char of p){
        neededChars[char] = (neededChars[char] || 0) + 1;
    }

    // slidig window approch, which window length equal to the length of p's length
    let left = 0
    let right = 0
    let count = p.length

    while(right < s.length){
        // if we find the char of p in window, decrement the count
        if(neededChars[s[right]] > 0) count--;

        // decrease the needed amount for the current char and move the window's right end one step forward
        neededChars[s[right]]--
        right++

        // if we found all char of p, then push the start index to the result
        if(count === 0) result.push(left)

        // if the window length exceeds the p's length, we need to move the left point by 1
        // before moving, if left points to the char we matched the p, increment the count
        // increment that char's value in the neededChars object (restore the need for that char for the window's future reference).
        if(right - left == p.length) {
            if(neededChars[s[left]] >= 0) count ++
            neededChars[s[left]]++
            left++
        }
    }

    return result
};

console.log(findAnagrams("cbaebabacd", "abc"))
console.log(findAnagrams("abab", "ab"))