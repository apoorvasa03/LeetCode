/** time: O(n^2)  space: O(1)*/
var threeSumSmaller = function(nums, target) {
    let result = 0
    if(nums.length < 2) return result

    nums.sort((a,b) => a -b)

    for(let i = 0; i< nums.length; i++){
        let left = i+1, right = nums.length - 1

        while(left < right){
            let sum = nums[i] + nums[left] + nums[right]
            if(sum < target){
                /** since nums are in asc order, once the sum is less then given target then all the element between pointer(left and right) will be result less than target */
                result += right - left
                left++
            }else{
                right--
            } 
        }
    }
    return result
};

console.log(threeSumSmaller([-3,-1,-4,-4,0,2,-2], -8)) // 5
console.log(threeSumSmaller([-2,0,1,3], 2)) // -1
console.log(threeSumSmaller([], 0))    // 2
console.log(threeSumSmaller([0], 0))        // 0