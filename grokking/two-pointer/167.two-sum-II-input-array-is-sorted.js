/**Time: O(n)   space: O(1) 
 * TIme: O(n) since the numbers are scanned only onces, its o(n)
 * Space: O(1) since we havnt used any extra space
*/
var twoSum = function(numbers, target) {
    let left = 0
    let right = numbers.length - 1
    // since numbers are in acs order, we can use 2pointers which can be increment/decrement based on the sum lesser/greater than target
    while(left < right){
        let sum = numbers[left] + numbers[right]
        if(sum == target){
            return [left+1, right+1]
        } else if (sum > target){
            right--
        }else{
            left++
        }
    }
};

console.log(twoSum([2,7,11,15], 9)) // [1, 2]
console.log(twoSum([2,3,4], 6))     // [1, 3]
console.log(twoSum([-1,0], -1))     // [1, 2]