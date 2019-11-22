// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/

const maxProfit = prices => {
    if(!prices || !prices.length) return 0;
    let max = 0;
    let buyPrice = prices[0];
    for(let price of prices){
        max = Math.max(price - buyPrice, max);
        buyPrice = Math.min(buyPrice, price);
    }
    return max;
};


