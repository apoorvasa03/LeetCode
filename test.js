var productExceptSelf = function(nums) {
    let answer = []

    //prefix
    answer[0] = 1
    for(let i =1; i< nums.length; i++){
        answer[i] = answer[i-1]* nums[i-1]
    }

    //siffix
    let right = 1;
    for(let i = nums.length-1; i >= 0; i--){
        answer[i] = right * answer[i]
        right *= nums[i] 
    }

    return answer
}


var productExceptSelf1 = function(nums) {
   let left = []
   let right = []
   let answer = []

   //prefix
   left[0] = 1
   for(let i = 1; i< nums.length;i++){
       left[i] = left[i-1] * nums[i-1]
   }

   // suffix 
   right[nums.length-1] = 1
   for(let i = nums.length- 2; i >=0; i--){
       right[i] = right[i+1] * nums[i+1]
   }

   for(let i=0; i< nums.length; i++){
       answer[i] = left[i]* right[i]
   }

   return answer
};

console.log(productExceptSelf([1,2,3,4]))