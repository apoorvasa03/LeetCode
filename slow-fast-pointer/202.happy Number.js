/** time: o(n)  space: o(1)*/
var isHappy = function(n) {
    let slow = n;
    let fast = n;

    while(true){
        slow = getSum(slow);
        fast = getSum(getSum(fast))
        /** note that non happy number is in loop, and even happy loop bcz 1^2 = 1 => 1^2 = 1 */
        if(slow === fast){ 
            return slow == 1 // if loop and points to 1 the its happy number(true) else non happy(false)
        }
    }
};

function getSum(num){
    let total = 0
    while(num) {
        let lastDigit = num % 10
        num = Math.floor(num/10);
        total += Math.pow(lastDigit, 2) // pow give exponent power of a number
    }

    return total
}