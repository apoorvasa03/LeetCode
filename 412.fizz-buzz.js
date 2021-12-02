
/** time - o(n)  space - o(1) */
function fizzBuzz(n){
    return new Array(n).fill(0).map((a, i) =>{
        let result = ''
        if((i+1) % 3 === 0) result = "Fizz"
        if((i+1) % 5 === 0) result += "Buzz"
        if(result === "") result = i+1
        return result
    })
}

function fizzBuzz(n){
    return new Array(n).fill(0).map((a, i) => (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || '' + i);
}
console.log(fizzBuzz(15))