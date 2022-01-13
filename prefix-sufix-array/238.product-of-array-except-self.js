/* time : o(n)  space: o(1)*/
var productExceptSelf = function(nums) {
    let answer = [];
    let right;
    answer[0] = 1

    //prefixProduct
    for(let i = 1; i< nums.length; i++){
        answer[i] = answer[i-1] * nums[i-1]
    }

    // store num at given point and multiple by answer array to get the sufix product
    right = 1
    for(let i = nums.length -1 ; i>= 0; i++){
        answer[i] = right * answer[i]
        right *= nums[i]
    }
    return answer
}

/* time : o(n)  space: o(n)*/
var productExceptSelf1 = function(nums) {
    let left = []
    let right = []
    let answer = []
    let length =  nums.length

    // prefixProfuct
    left[0] = 1
    for(let i =1; i< length; i++){
        left[i] = nums[i-1] * left[i-1]
    }

    // sufixproduct
    right[length -1] = 1
    for(let i = length-2; i >= 0; i--){
        right[i] = nums[i+1] * right[i+1]
    }

    for(let i=0;i< length; i++){
        answer[i] = left[i] * right[i]
    }

    return answer
};

console.log(productExceptSelf([1,2,3,4]))