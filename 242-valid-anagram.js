// time - o(n) space - o(n)
function isAnagram(s, t){
    let map = {};
    if(s.length != t.length) return false

    for(let i =0; i< s.length; i++){
        if(!map[s[i]]){
            map[s[i]] = 1
        } else map[s[i]] ++
    }
    console.log(map)
    for(let i =0; i < t.length; i++){
        console.log(map[t[i]])
        if(map[t[i]]) map[t[i]] --
        else return false;
    }
    return true
}

console.log(isAnagram('anagram', 'nagaram'))
console.log(isAnagram('rat', 'car'))