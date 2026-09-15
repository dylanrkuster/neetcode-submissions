class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        // quick exit if nothing in the array
        if (!nums.length) return [];

        // we can derive the cumulative product excluding [i] by:
        // multiplying the cumulative product of everything before [i] * cumulative product of everthing after [i]

        // cumulative product to the left of i
        const leftCumulatives = [1]; // start with 1 because there is nothing to the left of the first entry
        for (let i = 1; i < nums.length; i++) {
            const leftCumulative = leftCumulatives[i - 1];
            const leftNum = nums[i - 1];
            leftCumulatives.push(leftCumulative * leftNum);
        }

        // cumulative products to the right of i
        const rightCumulatives = nums.map(_num => 0);
        rightCumulatives[rightCumulatives.length - 1] = 1; // end with 1 because there is nothing to the right of the last entry
        for (let i = rightCumulatives.length - 2; i >= 0; i--) {
            const rightCumulative = rightCumulatives[i + 1];
            const rightNum = nums[i + 1];
            rightCumulatives[i] = rightCumulative * rightNum;
        }

        const cumulatives = [];
        for (let i = 0; i < leftCumulatives.length; i++) cumulatives.push(leftCumulatives[i] * rightCumulatives[i]);

        return cumulatives;
    }
}
