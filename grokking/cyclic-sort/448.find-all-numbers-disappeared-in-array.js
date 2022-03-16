/** Time: O(n) space: O(1)
 * facts: all the numbers in array are positive, if array length is 3 then array will be [1,2,3]
 * take the value at the i minus 1, which give the index of that number if sorted. make is negative number.
 * in-place marking is done.
 * now loop through nums array, if value is not negative, that index+1 is missing number 
*/
var findDisappearedNumbers = function(nums) {
    for(let i = 0; i < nums.length; i++){
        let index = Math.abs(nums[i]) - 1;
        nums[index] = -1 * Math.abs(nums[index])
    }
    let res = []
    for(let i = 0; i< nums.length; i++){
        if(nums[i] > 0){
            res.push(i+1)
        }
    }
    return res
};

/** Time: O(n)  space: O(n)
 * assign nums to set, which will hold unique number of nums
 * loop through nums, since nums[0] shld be 1,  if "loop index+1" is not present in set, then that number is missing
*/
var findDisappearedNumbers1 = function(nums) {
    let set = new Set(nums);
    let res = []

    for(let i =0; i < nums.length; i++){
        let num = i+1
        if(!set.has(num)){
            res.push(num)
        }
    }
    return res
}

console.log(findDisappearedNumbers1([4,3,2,7,8,2,3,1]))