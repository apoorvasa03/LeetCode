/** Time: O(N) Space: O(1)*/
var maxProfit = function(prices) {
    let minBuyPrice = Infinity;
    let maxProfit = 0;
 
    for(let price of prices){
       if(price < minBuyPrice) minBuyPrice = price;
       else if(maxProfit < (price - minBuyPrice)) maxProfit = (price - minBuyPrice)
    }
 
    return maxProfit
 }
 
 /** Time: O(N^2) Space: O(1) */
 var maxProfit1 = (prices) => {
    let maxProfit = 0
    for(let i = 0; i < prices.length; i++){
       for(let j = i+1; j < prices.length; j++){
          if(maxProfit < prices[j] - prices[i]) maxProfit = prices[j] - prices[i]
       }
    }
    return maxProfit
 }
 
 console.log(maxProfit([7,1,5,3,6,4]))     // 5
 console.log(maxProfit([7,6,4,3,1]))       // 0