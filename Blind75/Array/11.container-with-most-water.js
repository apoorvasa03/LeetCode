/** time: o(n)  space: o(1)
 two pointers
*/
var maxArea = function(height) {
    let mostWater = 0
    let left = 0; 
    let right = height.length -1;

    while(left < right){
        // take the min height between 2, bcz only till the shortest container wall the water can be fill and length of the container
        let currentWater = (right - left) * Math.min(height[left], height[right]); 
        mostWater = Math.max(mostWater, currentWater)
        // move the pointer which is shorter
        if(height[left] < height[right]) left++
        else right--
    }

    return mostWater
}
console.log(maxArea([1,8,6,2,5,4,8,3,7])) // 49