/** Time: O(N)  Space: O(1)
 * n is the char in the list of str
*/
function encode(strs){
    let res = ''
    for(let str of strs){
        // add length of str and # as a marker
        res += `${str.length}#${str}`
    }
    return res
}

function decode(str){
    let i =0, res = []
    while(i < str.length){
        let j = i;
        while(str[j] !== '#'){
            j++
        }
        // find # which is marker and before that will be the length of the str
        let length = Number(str.slice(i, j))
        let s = str.slice(j+1, j+1+length) // since str is present after #(j) 
        res.push(s)
        i = j+1+length
    }
    return res
}

console.log(encode(["Hello","World"]))
console.log(decode("5#Hello5#World"))