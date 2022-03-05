var maxPower = function(s) {
    let prevChar;
    let count = 0
    let maxCount = 0

    for(let char of s){
        if(char === prevChar){
            count++
        }else{
            prevChar = char
            count = 1
        }
        maxCount = Math.max(count, maxCount)
    }
    return maxCount 
};


console.log(maxPower("tourist")) // 1
console.log(maxPower("leetcode")) // 2
console.log(maxPower("abbcccddddeeeeedcba")) // 5