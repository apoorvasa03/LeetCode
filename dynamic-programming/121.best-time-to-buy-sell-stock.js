
/* time : o(n)  space: o(1)*/
var maxProfit = function(prices) {
    let maxprofit = 0;
        for (let i = 1; i < prices.length; i++) {
            if (prices[i] > prices[i - 1])
                maxprofit += prices[i] - prices[i - 1];
        }
        return maxprofit;
}

/* time : o(n)  space: o(1)*/
var maxProfit1 = function(prices) {
    let minBuyPrice = Infinity
    let maxProfit = 0

    for(let price of prices){
        if(price < minBuyPrice) minBuyPrice = price
        else{
            maxProfit += price - minBuyPrice
            minBuyPrice = price
        }
    }

    return maxProfit
};




console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([1,2,3,4,5]))
console.log(maxProfit([7,6,4,3,1]))