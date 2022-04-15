// time - o(n) space - o(n)
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false

    let map = new Map()
    for(let char of s){
        map.set(char, (map.get(char) || 0) +1)
    }

    for(let char of t){
        if(!map.has(char)) return false

        if(map.get(char) > 1) map.set(char, map.get(char)-1)
        else map.delete(char)
    }

    return map.size === 0
};
/* Time: O(NlogN) space: O(1) when we sort both the str and compare */



console.log(isAnagram('anagram', 'nagaram')) // true
console.log(isAnagram('rat', 'car'))    // false