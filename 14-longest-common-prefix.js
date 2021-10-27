// time - o(mn)  space - o(1)
function longestCommonPrefix(strs){
    for(let i=0; i < strs[0].length; i++){
        for(let j =1; j < strs.length; j++){
            if(strs[0][i] !== strs[j][i]){
                return strs[0].slice(0,i)
            }
        }
    }
    return strs[0]
}

// time - o(mn)  space - o(1)
function longestCommonPrefix1(strs){
    let prefix = ''; let current = '';
    for(let i=0; i < strs[0].length; i++){
        let current = strs[0][i]
        for(let j =1; j < strs.length; j++){
            if(strs[0][i] !== strs[j][i]){
                return prefix
            }
        }
        prefix += current
    }
    return prefix
}


console.log(longestCommonPrefix(["flower","flow","flowers"]))