/** time: O(n)  Space: O(n) */
var twoSum = function(nums, target) {
    let map = new Map()
    for(let i = 0; i < nums.length; i++){
       let remaining = target - nums[i];
       if(map.has(remaining)) return [map.get(remaining), i]
       else map.set(nums[i], i)
    }
}

var twoSum1 = function(nums, target) {
    let map = {}
    for(let i = 0; i < nums.length; i++){
       let remaining = target - nums[i];
       if(map.hasOwnProperty(remaining)) return [map[remaining], i]
       else map[nums[i]] = i
    }
}

console.log(twoSum([2,7,11,15], 9))     // [0, 1]
console.log(twoSum([3,2,4], 6))         // [1, 2]
console.log(twoSum([3,3], 6))           // [0, 1]