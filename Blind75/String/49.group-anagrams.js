/** time: O(NKlog(K)) space : o(KN)
 * Time Complexity: O(NKlogK), where N is the length of strs, and K is the maximum length of a string in strs. 
 * The outer loop has complexity O(N) as we iterate through each string. 
 * Then, we sort each string in O(NKlog(K)) time.
 * 
 * Space Complexity: we store N strings of size K at most. So Space Complexity is O(K*N)
 * 
*/
var groupAnagrams1 = function(strs) {
    let map = {}

    for(let str of strs){
        let sortedStr = str.split('').sort().join('')
        if(!map[sortedStr]) map[sortedStr] = []
        map[sortedStr].push(str)
    }
    return Object.values(map)
};

/** time: O(NK) space : O(KN) */
var groupAnagrams = function(strs) {
    let map = {}
    for(let str of strs){
        let charCount = new Array(26).fill(0)
        for(let char of str){
            charCount[char.charAt(0) - 'a'.charAt(0)]++
        } 
        if(!map[charCount]) map[charCount] = []
        map[charCount].push(str)
    }
    return Object.values(map)
}


console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])) // [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
console.log(groupAnagrams([""])) // [ [ '' ] ]
console.log(groupAnagrams(["a"])) // [ [ 'a' ] ]