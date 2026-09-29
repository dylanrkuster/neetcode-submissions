class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (!nums.length) return 0;

        // [2,20,4,10,3,4,5]
        const uniqueNums = new Set<number>(nums);
        // [2,20,10,3,4,5]
        const sortedNums = Array.from(uniqueNums).sort((a, b) => a - b);
        // [2,3,4,5,10,20]

        let longestSequence = 1;
        let curLongestSequence = 1;
        for (let i = 1; i < sortedNums.length; i++) {
            if (sortedNums[i] - sortedNums[i - 1] === 1) {
                curLongestSequence++;
                longestSequence = Math.max(curLongestSequence, longestSequence);
            } else {
                curLongestSequence = 1;
            }
        }

        return longestSequence;
    }
}
