class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let buyingPrice = prices[0];
        let maxProfit = 0;

        for (let i = 1; i < prices.length; i++) {
            buyingPrice = Math.min(prices[i - 1], buyingPrice);
            maxProfit = Math.max(prices[i] - buyingPrice, maxProfit);
        }

        return Math.max(maxProfit, 0);
    }
}
