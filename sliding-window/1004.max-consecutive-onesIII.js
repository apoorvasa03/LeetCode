/** time - o(n)  space - o(1)
 * here sliding window length will be same or increment in each loop.
*/
var longestOnes = function(nums, k = 0) {
    let left = 0, right = 0

   for(right = 0; right < nums.length; right++){

        if(nums[right] === 0){
            k--
        }
        if(k < 0){
            if(nums[left] === 0) k++
            left ++
        }
   }
   return right - left;
}

console.log(longestOnes([0,0,0,0], 0))
console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2))
console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3))

/** time - o(n)  space - o() TODO*/
var longestOnes1 = function(nums, k) {
    let map = new Map();
    let left = 0;
    let maxNum = 0
    for(let right =0; right < nums.length; right++){

        map.set(nums[right], (map.get(nums[right]) || 0)+1)
        while((right - left +1) - (map.get(1)|| 0) > k ){
            if(map.get(nums[left]) == 1){
                map.delete(nums[left])
               
            }else{
                map.set(nums[left], map.get(nums[left]) -1)
            }
            left++
        }

        maxNum = Math.max(maxNum, right -left+1)
    }
    return maxNum
};