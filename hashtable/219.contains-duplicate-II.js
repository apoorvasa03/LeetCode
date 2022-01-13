
/* time : o(n)  space: o(n)*/
var containsNearbyDuplicate = function(nums, k) {
    let set = {}

    for(let i=0; i< nums.length; i++){
        if(set.hasOwnProperty(nums[i])){
            if(i - set[nums[i]] <= k) return true
        }
        set[nums[i]] = i
    }

    return false
};

console.log(containsNearbyDuplicate([1,2,3,1], 3))
console.log(containsNearbyDuplicate([1,0,1,1], 1))
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2))