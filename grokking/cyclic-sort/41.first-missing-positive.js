var firstMissingPositive = function(nums) {
    for(let i =0; i< nums.length; i++){
        if(nums[i] < 0) nums[i] = 0
    }

    for(let i =0; i< nums.length; i++){
        let val = Math.abs(nums[i])
        if(1 <= val <= nums.length){
            if(nums[val -1] > 0){
                nums[val -1] *= -1
            }else if(nums[val -1] == 0){
                nums[val -1] = -1 * (nums.length +1)
            }
        }
    }

    for(let i =0; i< nums.length; i++){
        if(nums[i] >= 0) return i + 1
    }

    return nums.length + 1
}

console.log(firstMissingPositive([1,2,0]))      //3
console.log(firstMissingPositive([2147483647])) //1
console.log(firstMissingPositive([1]))          //2
console.log(firstMissingPositive([3,4,-1,1]))   //2
console.log(firstMissingPositive([1,2,0]))      //3