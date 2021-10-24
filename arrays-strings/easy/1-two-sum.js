// o(n)
function twoSum(nums, target) {
    let myObject = {}
    for(let i=0; i < nums.length;  i++){
        let difference = target - nums[i]
        if(myObject.hasOwnProperty(difference)){
            return [myObject[difference], i]
        }
        myObject[nums[i]] = i
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

console.log(twoSum([3,2,4], 6))