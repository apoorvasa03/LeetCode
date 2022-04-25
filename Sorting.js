/** later number will be bubbled up to last and in next i interation 'i' items from the ;ast is not considered */
function bubbleSort(nums){
    for(let i =0; i < nums.length-1; i++){
        for(let j =0; j < nums.length-1-i; j++){
            if(nums[j] > nums[j+1]){
                [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
            }
        }
    }

    return nums
}
/** the smallest number is selted to be in the front of the nums */
function selectionSort (nums){
    for(let i =0; i < nums.length; i++){
        minIndex = i
        for(j = i+1; j < nums.length; j++){
            if(nums[j] < nums[i]){
                minIndex = j
            }
        }
        [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]]
    }

    return nums
}

/** imagain an array with nums 1st values, j will compare with container last value, if last value is bigger then it is swapped with j value.  */
function insertionSort (nums){
    for(let i =1; i < nums.length; i++){
        for(j = i; j > 0; j--){
            if(nums[j] < nums[j-1]){
                [nums[j-1], nums[j]] = [nums[j], nums[j-1]]
            }else{
                break;
            }
        }
    }
    return nums
}

console.log(bubbleSort([1,3,2,9, 8, 6]))