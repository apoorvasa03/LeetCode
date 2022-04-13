/** Time: O(N) Space: O(1)*/
var maxSubArray = function(nums) {
    let maxSum = nums[0]
    let currentSum = nums[0];
 
    for(let i = 1; i < nums.length; i++){
       currentSum = Math.max(nums[i], currentSum+ nums[i])
       maxSum = Math.max(currentSum, maxSum)
    }
    return maxSum
 }
 
 console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  // 6
 console.log(maxSubArray([1]))                      // 1
 console.log(maxSubArray([5,4,-1,7,8]))             // 23