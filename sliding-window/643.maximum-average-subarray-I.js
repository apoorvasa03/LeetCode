/** time : o(n)  space: o(1)*/

var findMaxAverage = function(nums, k) {
    let left = 0
    let maxAvg = -Infinity
    let sum = 0

    for(let right = 0 ; right < nums.length ; right++){
        sum += nums[right]
        if(right - left === k -1){  // when the length of the array is equal to k, then find the avg and increment left side
            let avg = sum/k
            maxAvg = Math.max(maxAvg, avg)
            sum -= nums[left]
            left++
        }
    }
    return maxAvg
};

console.log(findMaxAverage([1,12,-5,-6,50,3], 4)) // 12.75
console.log(findMaxAverage([5], 1))
console.log(findMaxAverage([5, 3], 1))