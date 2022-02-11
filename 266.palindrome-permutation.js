/** time: o(n)  space; o(1)
 * 1) space complexcity : The set can grow up to a maximum number of all distinct elements. 
 * However, the number of distinct characters are bounded, so as the space complexity.
 * 2) space complexcity : Any methods that use map or set should have space complexity O(1)
 *  as the char number should be less than 256 as the assumption in the O(128) or O(256)
*/
var canPermutePalindrome = function(s) {
    let set = new Set()

    for(let char of s){

        if(set.has(char)){
            set.delete(char)
        }else{
            set.add(char)
        }
    }

    return set.size <= 1
};


console.log(canPermutePalindrome("code"))
console.log(canPermutePalindrome("aab"))
console.log(canPermutePalindrome("carerac"))