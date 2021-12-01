// TODO KMP algorithm

/* time - o(nm)  space - o(1) */
function strStr(haystack, needle){
    if(!needle) return 0
    for(let i =0; i < haystack.length; i++){
        if(needle === haystack.substring(i, i + needle.length)){
            return i
        }
    }
    return -1
}

// without using any inbuilt javascript junctions
var strStr1 = function(haystack, needle) {
    if(!needle) return 0;
    for(let i =0; i < haystack.length - needle.length+1; i++){
        if(haystack[i] === needle[0]){
            let matching = true
            for(let j = 1; j < needle.length; j++){
                if(haystack[i+j] != needle[j]) matching = false

            }
            if(matching) return i
        }
    }
    return -1;
};

console.log(strStr1("hello",  "ll"))

// note that substring will exchange the index if 1st index is grater than 2nd  ex: h.substring(4,1) => h.substring(1,4)