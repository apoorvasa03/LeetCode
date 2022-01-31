//When you divide the rotated array into two halves, using mid index, at least one of subarray should remain sorted ALWAYS.
/** time: o(log n)  space: o(1)*/
var search = function(nums, target) {
    let left = 0
    let right = nums.length -1;

    while(left <= right){  // on 3rd lope both L and R become 4 (ex:1)
        let mid = Math.floor((left+right)/2)

        if(nums[mid] === target) return mid

        if(nums[left] <= nums[mid]){  // when there is only 2 nums left will be equal to mid (ex:4)

            if(nums[left] <= target && target < nums[mid]){
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }else{
            if(nums[mid] < target && target <= nums[right]){
                left = mid + 1
            }else{
                right = mid - 1;
            }

        }
    }

    return -1
};

/*example:1 **/ console.log(search([4,5,6,7,0,1,2], 0)) //4
/*example:2 **/console.log(search([4,5,6,7,0,1,2], 3)) // -1
/*example:3 **/console.log(search([1], 0)) // -1
/*example:4 **/console.log(search([3, 1], 1)) // 1