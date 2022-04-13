/** time: O(N) Space: O(N)*/
var twoSum = function(nums, target) {
    let map = {};
    for(let i = 0; i < nums.length; i++){
       let remaining = target - nums[i];
       if(map.hasOwnProperty(remaining)) return [map[remaining], i]
       map[nums[i]] = i
    }
 }
 
 
 // nlogn
 function twoSum1(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(j= i+1; j < nums.length; j++){
            if((nums[i] + nums[j]) === target) return [i, j]
        }
    }
 }
 
 console.log(twoSum([3,2,4], 6)) //[1, 2]
 console.log(twoSum([2,7,11,15], 9)) // [0, 1]
 console.log(twoSum([3,3], 6)) // [0, 1]