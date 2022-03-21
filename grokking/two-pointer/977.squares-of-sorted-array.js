/** Time: O(N)  Space: O(N)
 Time: since we scanned array only twice ie O(2N) => O(N)
 Space: result array length is same as nums array 
*/

var sortedSquares = function(nums) {
    let left = 0
    let right = nums.length -1
    let result = new Array(nums.length).fill(0)
    let index = nums.length - 1

    while(left <= right){
        // compare the absolute value of left and right item in the array, sqaure the greater value and assing to the result array
        if(Math.abs(nums[left]) < Math.abs(nums[right])){
            result[index] = nums[right] * nums[right]
            right--
        }else{
            result[index] = nums[left] * nums[left]
            left++
        }
        index--
    }

    return result
}

console.log(sortedSquares([-4,-1,0,3,10]))  // [ 0, 1, 9, 16, 100 ]
console.log(sortedSquares([-7,-3,2,3,11]))  // [ 4, 9, 9, 49, 121 ]
