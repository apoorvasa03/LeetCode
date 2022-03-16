


/** nums is the array with 0 to n number. length will be n bcz array index starts with 0.
 * if we add all the array item and add all the index, we shld sum up same,  if not same, then a number be missing in nums
 * we can substract indexSum - arrayValueNumber to give the missing number
 */
/** time: o(n) space: o(1)*/
var missingNumber = function(nums) {
    let totalSum = 0; missingSum = 0
    for(let i =0; i < nums.length; i++){
        missingSum += nums[i]
        totalSum += i + 1
    }

    return totalSum - missingSum;
};

console.log(missingNumber([3,0,1]))             // 2
console.log(missingNumber([0,1]))               // 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])) //8