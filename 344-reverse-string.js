// time - o(n) space - o(1)
function reverseString(s){
    for(let i=0; i< s.length/2; i++){
        [s[i] , s[s.length -1 -i]] = [s[s.length -1 -i], s[i]]
    }
    return s
}

// time - o(n) space - o(1)
function reverseString1(s){
    return s.reverse()
}

console.log(reverseString(["h","e","l","l"]))