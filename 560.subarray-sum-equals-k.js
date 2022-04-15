/** Time: O(N)  Space: O(N)
hold the prefix of the sum in hash and loop through nums, check if diff is there in prefix,
if present it means we can remove the prefix to sum the given value
*/
var subarraySum = function(nums, k) {
    let result = 0
    let currentSum = 0
    /**consider 1st example, after 2nd iteration diff is 0, but 0 will not be in prefix hence result wont updated
    to resolve this edge case we need to add 0: 1 to prefix*/
    let prefix = {0:1} 
    for(let num of nums){
        currentSum += num;
        let diff = currentSum - k
        result += prefix[diff] || 0;
        prefix[currentSum] = (prefix[currentSum] || 0)+ 1;
    }

    return result
};


console.log(subarraySum([1,1,1], 2))    // 2
console.log(subarraySum([1,2, 3], 3))   // 2
console.log(subarraySum([4,5,0,-2,-3,1], 5)) // 3
