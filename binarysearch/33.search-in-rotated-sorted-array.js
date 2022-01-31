//When you divide the rotated array into two halves, using mid index, at least one of subarray should remain sorted ALWAYS.
/** time: o(log n)  space: o(1)*/
var search = function(nums, target) {
    let left = 0
    right = nums.length -1;

    while(left <= right){
        let mid = Math.floor((left+right)/2)

        if(nums[mid] === target) return mid

        if(nums[left] <= nums[mid]){

            if(nums[left] <= target && target <= nums[mid]){
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }else{
            if(nums[mid] <= target && taget <= nums[right]){
                left = mid + 1
            }else{
                right = mid - 1;
            }

        }
    }

    return -1
};

console.log(search([4,5,6,7,0,1,2], 0)) //4
console.log(search([4,5,6,7,0,1,2], 3)) // -1
console.log(search([1], 0)) // -1