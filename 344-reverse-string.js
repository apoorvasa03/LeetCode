/** time - o(n) space - o(1) */ 
function reverseString(s){
    for(let i=0; i< s.length/2; i++){
        [s[i] , s[s.length -1 -i]] = [s[s.length -1 -i], s[i]]
    }
    return s
}

/** time - o(n) space - o(1) */ 
var reverseString = function(s) {
    let result = []
    let length = s.length 
    for(let i=0; i < length; i++) {
        result.push(s.pop())
    }
    return result
};

/** time - o(n) space - o(1) */ 
var reverseString1 = function(s) {
    let left = 0 
    let right = s.length -1
    while(left < right){
        let temp = s[left]
        s[left] = s[right]
        s[right] = temp
        left++
        right--
    }
    return s
}

/** time - o(n) space - o(1) */ 
var reverseString2 = function(s) {
    for(let i =0, j= s.length-1; i < j; i++, j--){
        [s[i], s[j]] = [s[j], s[i]]
    }
    return s
}

console.log(reverseString(["h","e","l","l"]))