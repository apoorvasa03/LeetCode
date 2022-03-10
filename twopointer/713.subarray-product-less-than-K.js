/**time: O(n) space: o(1)
 * time: O(n) => since nums is scanned only 2 time ie O(2n) = O(n)
 * space: O(1) => we havent used any extra space
*/
var numSubarrayProductLessThanK = function(nums, k) {
    let result = 0
    if(k <= 1) return result
    let left = 0, prod = 1
 
    for(let right =0; right < nums.length; right++){
        prod = prod * nums[right]
 
        while(prod >= k){
            prod = prod/ nums[left]
            left++
        }
         /** with each step, x new subarray are generated, where x = right - left +1, ex:  (5,2)  =>  (5,(2,(6)))*/
        result += right - left + 1;
    }
    return result
 };

 /** ex: nums = [10,5,2,6].  k=100
  * left=0  right=0 prod=1  => prod = 1 * 10 (< 100); result +=1 (0 -0 +1)
  * left=0  right=1 prod=10 => prod = 10 * 5 (< 100); result +=3 (1+ (1-0 +1))
  * left=0  right=2 prod=50 => prod = 50*50  !(< 100); prod = 100/10; left=1   result=5 (3 +(2-1+1))
  * left=1  right=3 prod=10 => prod = 10*6  (< 100); result= 8(5+(3-1+1))
  * */
 
 console.log(numSubarrayProductLessThanK([57,44,92,28,66,60,37,33,52,38,29,76,8,75,22], 18)) // 1
 console.log(numSubarrayProductLessThanK([1,2,3], 0))
 console.log(numSubarrayProductLessThanK([10,5,2,6], 100))