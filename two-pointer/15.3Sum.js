/** Time : O(N^2)  space: O(n)
 * Time: we the looping nums (o(n)) and for each number we are doing twoSum(o(n)). ie O(N*N)
 * Space: space complexity for sorting in js is o(1). For the purpose of complexity analysis, we ignore the memory required for the output.
*/
var threeSum = function(nums) {
    let result = []
    if(nums.length < 3) return result
    nums.sort((a, b) => a -b)

    for(let i = 0; i< nums.length; i++){
        /** since the solution set must not contain duplicate triplets, we will sort nums and do the twoSumII for unique element */
        if(i == 0 || nums[i -1] != nums[i]){
            twoSumII(nums, i, result)
        }
    }
    return result
}

function twoSumII(nums, i, res){
    let left = i+1, right = nums.length -1

    while(left < right){
        let sum = nums[i] + nums[left] + nums[right]

        // since numbers are in acs order, we can use 2pointers which can be increment/decrement based on the sum lesser/greater than target
        if(sum == 0){
            res.push([nums[i], nums[left], nums[right]])
            // note: once we get a set, we should not terminate the while loop, bcz we can have other set which may give 0.
            // just increment the left pointer until we find uniqie element
            left++
            while(nums[left] == nums[left-1] && left < right){
                left++
            }
        }else if(sum < 0){
            left++
        }else{
            right--
        }
    }
}

console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(twoSum([]))
console.log(twoSum([0]))