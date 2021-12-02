/** time - o(n)  space - o(1)
 * space is o(1) bcz total nunmber of alphabets in english is 26
*/
let firstUniqChar1 = function(s) {
    if(!s) return -1
    let map = {};
    for(let i=0; i< s.length; i++){
        if(map[s[i]]){
            map[s[i]].count++
        }else{
            map[s[i]] = {index : i, count : 1}
        }
    }

    for(let [keys, values] of Object.entries(map)){
       if(values.count === 1){
           return values.index
       }
    }

    return -1
};

/** time - o(n)  space - o(1)
 * space is o(1) bcz total nunmber of alphabets in english is 26
*/

let firstUniqChar = function(s) {
    let map = {}
    for (let char of s) { 
       map[char] = map[char] ? map[char] + 1 : 1
    } 

    for(let i=0; i< s.length; i++){
        if(map[s[i]] === 1) return i
    }

    return -1
}


console.log(firstUniqChar('loveleetcode')) // 2
console.log(firstUniqChar('aabb')) // -1