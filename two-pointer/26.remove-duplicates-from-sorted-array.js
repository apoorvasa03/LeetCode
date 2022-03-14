// we used two pointer, here right pointer loops through nums and left point moves only when we get unique value
// time: O(n) => since nums is scanned only 2 time ie O(2n) = O(n)
// space: O(1) => we havent used any extra space

/** Time: O(n)  space : O(1)*/
var removeDuplicates = function(nums) {
    let left = 0
    for(let right = 1; right < nums.length; right++){
        if(nums[left] !== nums[right]){
            left++
            nums[left] = nums[right]
        }
    }
    return left+1
};

console.log(removeDuplicates([1,1,2]))
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))

