/** time: o(n)  space: o(1)
 two pointers
*/
var maxArea = function(height) {
    let mostWater = 0
    let left = 0; 
    let right = height.length -1;

    while(left < right){
        let currentWater = (right - left) * Math.min(height[left], height[right]);
        mostWater = Math.max(mostWater, currentWater)
        if(height[left] < height[right]) left++
        else right--
    }

    return mostWater
}
console.log(maxArea([1,8,6,2,5,4,8,3,7])) // 49