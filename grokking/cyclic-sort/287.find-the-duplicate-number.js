/** Time: O(n) Space: O(1)
 * Note: nums array contains """"n + 1""" integers where each integer is in the range """"[1, n]"""" inclusive.
 * the array interger are between 1 - n but array count is n+1, here that one extra interger is reference(linked list)
*/
var findDuplicate = function(nums) {
    let slow = nums[0], fast = nums[nums[0]]

    while(slow !== fast){
        slow = nums[slow];
        fast = nums[nums[fast]]
    }
    console.log(slow, fast)

    slow = 0
    while(slow !== fast){
        slow = nums[slow];
        fast = nums[fast]
    }

    return slow
};

console.log(findDuplicate([1,3,4,2,2]))