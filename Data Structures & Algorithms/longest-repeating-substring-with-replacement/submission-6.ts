class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const charFreqMap = new Map<string, number>();
        let maxRepCharFreq = 0;
        let longestSubstr = 0;

        let l = 0, r = 0;
        
        /**
         * decrease the charFreqMap based on the window contracting
         */
        const decrementCharFreq = (): void => {
            const leftEdge = s[l];
            const leftEdgeFreq = charFreqMap.get(leftEdge);
            charFreqMap.set(leftEdge, leftEdgeFreq - 1);
        }

        /**
         * increase the charFreqMap based on the window expanding
         */
        const incrementCharFreq = (): void => {
            const frontier = s[r];
            const frontierFreq = charFreqMap.get(frontier) ?? 0;
            charFreqMap.set(frontier, frontierFreq + 1);
            maxRepCharFreq = Math.max(maxRepCharFreq, frontierFreq + 1);
        }

        /**
         * the window is valid when the maximum number of repeating characters
         * inside of it + the number of characters we're allowed to replace
         * is >= the length of the window
         */
        const isWindowValid = (): boolean => {
            return maxRepCharFreq + k >= (r - l) + 1;
        }

        // we start on the first character, so update the charFreqMap to include that
        incrementCharFreq();

        while (r < s.length) {
            if (isWindowValid()) {
                // record potential new max
                longestSubstr = Math.max(longestSubstr, (r - l) + 1);

                // expand frontier and look to reestablish validity
                r++;
                incrementCharFreq();
            } else {
                // contract window in an effort to reestablish validity
                decrementCharFreq();
                l++;
            }
        }

        return longestSubstr;
    }
}
