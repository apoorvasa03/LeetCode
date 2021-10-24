function plusOne(digits) {
    let len = digits.length
    let last = digits[len]
    
    if((last +1) < 10) {
        digits[len] = last +1
    }else{
        handleCarry(digits, len)
    } 
};

function handleCarry(digits, length){
    if(digits.length )
}

console.log(plusOne([9, 9]))