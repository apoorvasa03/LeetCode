

/** time: o(n)  space: o(1)*/
var findUnsortedSubarray = function(nums) {
    /** if we take start and end 0, when array is sorted, then result gives 1, so make it -1 and -2. its unsorted start and end change */
    let start = -1; end = -2
    let min = nums[nums.length - 1]; max = nums[0]

    /** when we move from left to right in an array, the values should increse, 
     * if value decrese then its unsorted, make note of it */
    for(let i =1; i < nums.length; i++){
        max = Math.max(nums[i], max)
        if(nums[i] < max)  end = i
    }

    for(let i = nums.length - 2; i >= 0; i--){
        min = Math.min(nums[i], min)
        if(nums[i] > min) start = i
    }

    return end - start + 1
}

/** time: O(nlogn) Space: O(n)
 * Time: sorting requires nlogn time
 * Space: O(n) sorting new array
*/
var findUnsortedSubarray1 = function(nums) {
    let sortedNums = nums.slice()
    sortedNums.sort((a,b) => a - b)
    let start = Number.MAX_SAFE_INTEGER; end = Number.MIN_SAFE_INTEGER;

    for(let i =0; i< nums.length; i++){
        if(nums[i] != sortedNums[i]){
            start = Math.min(start, i)
            end = Math.max(end, i)
        }
    }
    if(start === Number.MAX_SAFE_INTEGER && end === Number.MIN_SAFE_INTEGER) return 0
    return end - start + 1
};

console.log(findUnsortedSubarray([2,6,4,8,10,9,15]))
console.log(findUnsortedSubarray([1,2,3,4,5]))
// console.log(findUnsortedSubarray([1]))