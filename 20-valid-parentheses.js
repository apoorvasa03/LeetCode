
// t- o(n)  s - o(n)
function isValid(s){
    let brackets = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    let stack =[]

    for(let i =0; i < s.length; i++){
        if(s[i] === '(' || s[i] === '{' || s[i] === '['){
            stack.push(s[i])
        } else {
            if(brackets[stack.pop()] != s[i]) return false
        }
        // there is no point in going through the entire string, bcz if stack length is greater than the chars left in s which means less closing brackets
        if (stack.length > s.length - i) return false;
    }
    // if stack is not empty then those brackets doesnt have closing brackets hence return false
    return stack.length === 0
}

console.log(isValid("()[]{}")) // true
console.log(isValid("()[}{}")) // false
console.log(isValid("[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]"))  // false