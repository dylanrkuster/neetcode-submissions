class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // produce a map of { num: position }
        const numToPos = new Map<number, number>(
            nums.map((num, i) => [num, i])
        );

        // loop nums, looking for the pair to a given entry that produces our target
        for (let i = 0; i < nums.length; i++) {
            const match = target - nums[i];
            const matchPos = numToPos.get(match);

            // if we find it, return it
            if (matchPos) {
                return [i, matchPos];
            }
        }

        // according to our input conditions this should never be possible
        return [];
    }
}
