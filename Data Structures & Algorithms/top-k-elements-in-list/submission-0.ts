class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const numFreq = new Map<number, number>();

        // build a freq map like { 1: 1, 2: 5, 3: 2 }
        for (const num of nums) {
            const entry = numFreq.get(num) ?? 0;
            numFreq.set(num, entry + 1);
        }

        // { 1: 1, 2: 5, 3: 2 } => [[1, 1], [2, 5], [3, 2]]
        // then sort desc => [[2, 5], [3, 2], [1, 1]]
        const sortedFreq = [...numFreq.entries()].sort((a, b) => b[1] - a[1]);

        const res = [];
        for (let i = 0; i < k; i++) {
            res.push(sortedFreq[i][0]);
        }

        return res;
    }
}
