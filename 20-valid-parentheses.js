
// t- o(n)  s - o(n)
function isValid(s){
    let bracketCollection = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    let strCollection =[]
    for(let i =0; i < s.length; i++){
        if(s[i] === '(' || s[i] === '{' || s[i] === '['){
            console.log(s[i])
            strCollection.push(s[i])
        } else {
            let pop = strCollection.pop()
            let closingBracket = bracketCollection[pop]
            if(closingBracket != s[i]){
                return false
            }
        }
    }
    // if strCollection is not empty then those brackets doesnt have closing brackets hence return false
    return strCollection.length === 0
}

console.log(isValid("()[]{}"))