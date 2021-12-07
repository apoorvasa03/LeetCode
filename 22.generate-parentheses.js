//to do backtracking
const generateParenthesis = function(n) {
    if(n === 1) return ["()"]

    let WithOutFirst = generateParenthesis(n-1);

    let withFirst = new Set()
    WithOutFirst.forEach(bracket=> {
        for(let i =0; i <= bracket.length; i++){
            let str = bracket.slice(0, i) + '()' + bracket.slice(i)
            withFirst.add(str)
        }
    })
    
    return [...withFirst]
};

console.log(generateParenthesis(3))


// function parens(nums){
    //     let set = new Set();
    //     if(!nums) {
    //         set.add('')
    //     }else{
    //     let remainingParens = parens(nums -1)
    //     remainingParens.forEach(paren => {
    //         for(let i=0; i<= paren.length; i++){
    //             let withFirstNum = paren.slice(0, i) + '()' + paren.slice(i);
    //             set.add(withFirstNum) 
    //         }
    //     })
    //     }
    //     return [...set]
    // }