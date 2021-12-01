
var reverseString = function(s) {
    let result = []
    let length = s.length 
    for(let i=0; i < length; i++) {
        result.push(s.pop())
    }
    return result
};

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

var reverseString2 = function(s) {
    for(let i =0, j= s.length-1; i < j; i++, j--){
        [s[i], s[j]] = [s[j], s[i]]
    }
    return s
}

console.log(reverseString2(["h","e","l","l","o"]))