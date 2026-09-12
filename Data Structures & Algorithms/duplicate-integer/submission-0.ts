class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const uniqueNums = new Set<number>();

        // just track the unique nums we've seen with a set
        for (const num of nums) {
            // as soon as the set contains a num we're looking at,
            // we know we've found a dupe
            if (uniqueNums.has(num)) {
                return true;
            }

            uniqueNums.add(num);
        }

        // must not be any dupes
        return false;
    }
}
