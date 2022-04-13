/** Time: O(N)  Space: O(N)*/
var containsDuplicate = function(nums) {
    let set = new Set(nums)
    return set.size < nums.length
 }
 
 /** Time: O(NLogN)  Space: O(1)*/
 var containsDuplicate1 = function(nums) {
    for(let i = 0; i < nums.length; i++){
       for(j = i+1; j < nums.length; j++){
          if(nums[i] === nums[j]) return false
       }
    }
 
    return true
 }
 
 console.log(containsDuplicate([1,2,3,1]))             // true
 console.log(containsDuplicate([1,2,3,4]))             // false
 console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])) // true