/**
 * time - o(nm) space o(1)
 * n - total number of items in the array
 * m - lenght of the shortest item in the array
 */
 var longestCommonPrefix = (strs) =>{
    let prefix = "";
    // find the shortest item in the array
    let maxPrefixLength = Math.min(...strs.map(str => str.length))

    for(let i =0; i < maxPrefixLength; i++){
        if(strs.every(str => strs[0][i] === str[i])){
            prefix += strs[0][i]
        }else{
            break;
        }
    }
    return prefix
}

/**
 * time - o(nm) space o(1)
 * n - total number of items in the array
 * m - lenght of first item in the array
 */
var longestCommonPrefix1 = function(strs) {
    let prefix = ""
    for(let i =0; i< strs[0].length; i++){
        for(let j =1; j < strs.length; j++){
            if(strs[0][i] != strs[j][i]){
                return prefix
            }
        }
        prefix += strs[0][i]
    }
    return prefix
};


// time - o(mn)  space - o(1)
// TODO what is the time complexity since we are using slice ?
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


console.log(longestCommonPrefix(["flower","flow","flowers"])) // flow