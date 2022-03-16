var maxArea = function(height) {
    let left = 0;
    let right = height.length;
    let mostWater = 0;
    while(left < right){
            let currentWater = right-left * Math.min(height[left], height[right])
            maxWater = Math.max(currentWater, maxWater)
            if(height[left] > height[right]) right--;
            else left++
    }
    return maxWater
};


console.log(maxArea([1,8,6,2,5,4,8,3,7]))