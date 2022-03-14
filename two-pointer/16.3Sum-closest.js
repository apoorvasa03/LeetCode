/**time: o(n2) space 0(1)
 * time: looping nums (o(n)) and twoSumII(while loop o(n)). ie O(N*N)
*/
var threeSumClosest = function(nums, target) {
    let result = Infinity

    nums.sort((a, b) => a - b)
    
    for(let i =0; i < nums.length; i++){
        let left = i+1
        let right = nums.length - 1

        while(left < right){
            const sum = nums[i] + nums[left] + nums[right]
            if(Math.abs(sum - target) < Math.abs(result - target)){
                result = sum;
            }
            if(sum < target){
                left++
            }else{
                right--
            }
        }
    }
    return result;
};

console.log(threeSumClosest([1,1,-1,-1,3], -1)) // -1
console.log(threeSumClosest([-1,2,1,-4], 1))    // 2
console.log(threeSumClosest([0,0,0], 1))        // 0