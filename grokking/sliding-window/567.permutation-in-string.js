/** time: O(N_s2)  space: O(1) 
 Time Complexity :  since we scan s1 and s2 once and s2 is larger than s1 O(N_s1 + N_s2) => O(N_s2)
 Space Complexity :
*/
var checkInclusion = function(s1, s2) {
    
    let neededChars = {}

    for(let char of s1){
        neededChars[char] = (neededChars[char] || 0) + 1
    }

    let left = 0
    let right = 0
    let count = s1.length

    while(right < s2.length){

        if(neededChars[s2[right]] > 0) count--
        neededChars[s2[right]]--
        right++

        if(count === 0) {
            return true
        }

        if(right - left == s1.length){
            if(neededChars[s2[left]] >= 0) count++
            neededChars[s2[left]]++
            left++
        }
    }

    return false
};


var checkInclusion = function(s1, s2) {
    
    let neededChars = {}
    // populate every char in s1 as a key and how many times that char appears in s1 as its value.
    for(let char of s1){
        neededChars[char] = (neededChars[char] || 0) + 1
    }

    // slidig window approch, with length of window equal to the length of s1 length
    let left = 0
    let right = 0
    let count = s1.length

    while(right < s2.length){
        // if we find the char of s2 in window, decrement the count
        // decrease the needed amount for the current char and move the window's right end one step forward
        if(neededChars[s2[right]] > 0) count--
        neededChars[s2[right]]--
        right++

        // if we found all char of s1, then return true
        if(count === 0) {
            return true
        }

        // if the window length exceeds the s1 length, we need to move the left point by 1
        // before moving, if left points to the char we matched with s1, increment the count
        // increment that char's value in the neededChars object (restore the need for that char for the window's future reference).
        if(right - left == s1.length){
            if(neededChars[s2[left]] >= 0) count++
            neededChars[s2[left]]++
            left++
        }
    }

    return false
};


console.log(checkInclusion("ab", "eidbaooo"))
console.log(checkInclusion("ab", "eidboaoo"))