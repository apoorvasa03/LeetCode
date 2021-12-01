var isPalindrome1 = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '')
    
    for(let i=0, j = s.length -1 ; i <= j; i++, j--){
        if(s[i] !== s[j]) return false
    }
    return true;
};

var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '')
    let set = new Set();
    for(let i =0; i< s.length; i++){
        if(set.has(s[i])){
            set.delete(s[i])
        }else{
            set.add(s[i])
        }
    }
    console.log(set.values())
    return set.size <= 1
}

console.log(isPalindrome1('A man, a plan, a canal: Panama'))
