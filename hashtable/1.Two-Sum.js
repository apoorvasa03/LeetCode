var twoSum = function(nums, target) {
    let set = new Set();

    for(let i in nums){
        let remaining = nums[i] - target;
        if(set.has(remaining)) return [set.get(remaining), i]
        else set.add(nums[i], i)
    }

    return -1
};


console.log(twoSum([2,7,11,15], 9))