function titleToNumber(columnTitle){
    let res = 0
    for(let i=0; i< columnTitle.length; i++){
        let ascii = columnTitle.charCodeAt(i) - 64
        res = (res * 26) + ascii
    }
    return res
}

console.log(titleToNumber('ZY'))