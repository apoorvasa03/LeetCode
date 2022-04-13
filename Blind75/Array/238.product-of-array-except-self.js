/** Time: O(N)  Space: O(1)*/
var productExceptSelf = function(nums) {
    let answer = []
    let postFix = 1
 
    answer[0] = 1 // get the prefix of the nums
    for(let i = 1; i< nums.length; i++){
       answer[i] = answer[i-1] * nums[i-1]
    }
 
    postFix = 1; // multiple the postfix number to the previously calculate prefix
    for(let i = nums.length - 1; i >=0; i--){
       answer[i] *= postFix;
       postFix *= nums[i]
    }
 
    return answer
 }
 
 /** Time: O(N)  Space: O(N)
  find the prefix and postfix of the number and multiple it
 */
 var productExceptSelf2 = function(nums) {
    let prefix = [];
    let postfix = [];
    let result = [];
 
    prefix[0] = 1; // get prefix product of the number
    for(let i =1; i < nums.length; i++){
       prefix[i] = prefix[i-1] * nums[i-1]
    }
 
    postfix[nums.length-1] = 1 // get postfix product if the number
    for(let i = nums.length - 2; i >= 0; i--){
       postfix[i] = postfix[i+1] * nums[i+1]
    }
 
    // multiple prefix and postfix
    for(let i = 0; i < nums.length; i++){
       result[i] = prefix[i] * postfix[i]
    }
 
    return result
 };
 
 
 console.log(productExceptSelf([1,2,3,4])) // [ 24, 12, 8, 6 ]