class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        if (!nums.length) return [];

        const numZeroes = nums.reduce((count, cur) => {
            if (cur === 0) {
                return count + 1;
            }

            return count;
        }, 0);

        if (numZeroes === 0) {
            const cumulativeProduct = nums.reduce((total, cur) => total * cur, 1);
            return nums.map(num => cumulativeProduct / num);
        } else if (numZeroes === 1) {
            const nonZeroCumulativeProduct = nums.reduce((total, cur) => {
                if (cur !== 0) {
                    return total * cur;
                }

                return total;
            }, 1);
            return nums.map(num => num !== 0 ? 0 : nonZeroCumulativeProduct);
        } else {
            return nums.map(_num => 0);
        }
    }
}
