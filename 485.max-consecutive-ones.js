var findMaxConsecutiveOnes = function(nums) {
    let max = 0
    let currentMax = 0

    for(let i = 0; i < nums.length; i++){
        if(nums[i] == 1){
            currentMax += 1
            max = Math.max(currentMax, max)
        }else{
            currentMax = 0
        }
    }

    return max
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1])) // 3
console.log(findMaxConsecutiveOnes([1,0,1,1,0,1])) // 2