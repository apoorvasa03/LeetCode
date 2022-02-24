var climbStairs = function(n) {

    function helper(n, memo = {}){
        if(n === 0) return 1
        if(n < 0) return 0
        if(memo[n]) return memo[n]
        memo[n] = helper(n-1, memo) + helper(n-2, memo)
        return memo[n]
    }
    
    return helper(n)
};


console.log(climbStairs(1))
console.log(climbStairs(2))
console.log(climbStairs(3))
console.log(climbStairs(38))