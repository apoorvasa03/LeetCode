var largestSubarray = function(nums, k) {
    let maxIndex = 0
    for(let i = 1; i < nums.length - k + 1; i++){ 
       if(nums[i] > nums[maxIndex]) maxIndex = i // find the largest number
    }

    return nums.slice(maxIndex, maxIndex+k) // get the array from largest number to till the k items
};

console.log(largestSubarray([1,4,5,2,3], 3))
console.log(largestSubarray([1,4,5,2,3], 4))