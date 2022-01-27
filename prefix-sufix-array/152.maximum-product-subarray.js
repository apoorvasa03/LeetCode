/** time: o(n)  space: o(1)*/
var maxProduct = function(nums) {
    let currentMax = nums[0];
    let currentMin = nums[0]
    let globalMax = nums[0]

    for(let i=1; i < nums.length; i++){
        let temp = currentMax
        currentMax = Math.max(nums[i], currentMax* nums[i], currentMin* nums[i])
        currentMin = Math.min(nums[i], temp* nums[i], currentMin* nums[i])
        globalMax = Math.max(currentMax, globalMax)
    }
    return globalMax
};
console.log(maxProduct([-2,3,-4])) //24
console.log(maxProduct([2,3,-2,4])) // 6
console.log(maxProduct([-2,0,-1])) //0
