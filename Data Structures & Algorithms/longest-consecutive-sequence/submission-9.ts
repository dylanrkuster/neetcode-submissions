class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        // { a given boundry: its sequence length }
        const boundMap = new Map<number, number>();
        let maxSeq = 0;

        for (const num of nums) {
            if (!boundMap.has(num)) { // if it sits outside a boundary
                const seqBefore = boundMap.get(num - 1) ?? 0;
                const seqAfter = boundMap.get(num + 1) ?? 0;
                const curSeq = seqBefore + 1 + seqAfter;

                // update the length of the starting boundary of the sequence
                if (seqBefore > 0) {
                    boundMap.set(num - boundMap.get(num - 1), curSeq);
                }

                // update the length of the ending boundary of the sequence
                if (seqAfter > 0) {
                    boundMap.set(num + boundMap.get(num + 1), curSeq);
                }

                // this might be a starting or ending boundary of a sequence, so set its length
                boundMap.set(num, curSeq);
                maxSeq = Math.max(maxSeq, curSeq);
            }
        }

        return maxSeq;
    }
}
