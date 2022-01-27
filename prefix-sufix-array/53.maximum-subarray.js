var maxSubArray = function(nums) {
    let currentMax = nums[0]
    let globalMax = nums[0]

    for(let i =1; i < nums.length; i++){
        currentMax = Math.max(nums[i] , currentMax+nums[i])
        globalMax = Math.max(currentMax, globalMax)
    }

    return globalMax
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArray([1]))
console.log(maxSubArray([5,4,-1,7,8]))
