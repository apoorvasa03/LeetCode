var fourSum = function(nums, target) {
    nums.sort((a,b) => a -b)
    let result = []
    if(nums.length < 4) return result

    for(let i = 0; i < nums.length - 3; i++) {
            for(let j =i+1; j < nums.length-2; j++){
                let left = j+1, right = nums.length -1
                while(left < right){
                    let sum = nums[i] + nums[j] + nums[left] + nums[right]

                    if(sum == target){
                        result.push([nums[i], nums[j], nums[left], nums[right]])
                        left++
                        while(nums[left] === nums[left -1]) left++
                    }

                    if(sum < target){
                        left++
                    }else{
                        right--
                    }
                }
                while(nums[j] === nums[j+1]) j++ //  if(j == 1 || nums[j] !== nums[j -1]) => 1st line inside 2st for
            }
            while(nums[i] === nums[i+1]) i++ // same as if(i == 0 || nums[i] !== nums[i -1]) => 1st line inside 1st for
    }
    return result
}

console.log(fourSum([-3,-1,0,2,4,5], 2)) // [ [ -3, -1, 2, 4 ] ]
console.log(fourSum([2,2,2,2,2], 8)) // [[2,2,2,2]]
console.log(fourSum([1,0,-1,0,-2,2], 0)) // [ [ -2, -1, 1, 2 ], [ -2, 0, 0, 2 ], [ -1, 0, 0, 1 ] ]