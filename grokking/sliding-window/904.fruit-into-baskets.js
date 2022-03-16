/** time: o(n)  space: o(k)
 time comlexcity:  since we move over fruits only twice, its o(2n) = o(n)
*/

var totalFruit = function(fruits) {
    let maxFruits = 0
    let left = 0
    let basket = new Map();
    for(let right = 0; right < fruits.length; right++){
        basket.set(fruits[right], (basket.get(fruits[right]) || 0)+1)

        while(basket.size > 2){
            if(basket.get(fruits[left]) === 1){
                basket.delete(fruits[left])
            }else{
                basket.set(fruits[left], basket.get(fruits[left]) -1)
            }
            left++
        }

        maxFruits = Math.max(maxFruits, right - left +1)
    }
    return maxFruits
};

console.log(totalFruit([1,2,1]))
console.log(totalFruit([0,1,2,2]))
console.log(totalFruit([1,2,3,2,2]))