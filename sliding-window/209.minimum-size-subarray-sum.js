/** time - o(n)  space - o(1)
 time complexity : since n is only visited twice its o(2n) => o(n)
*/
var minSubArrayLen = function(target, nums) {
    let minArrLength = Number.MAX_SAFE_INTEGER
    let left = 0;
    let sum = 0

    for(let right = 0; right < nums.length; right++){
        sum += nums[right]

        while(sum >= target){
            minArrLength = Math.min(minArrLength, (right - left +1))
            sum -= nums[left]
            left++
        }
    }

    return minArrLength == Number.MAX_SAFE_INTEGER ? 0 : minArrLength
};

console.log(minSubArrayLen(7, [2,3,1,2,4,3])) // 2
console.log(minSubArrayLen(4, [1,4,4])) // 1