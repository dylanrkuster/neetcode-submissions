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

        const isWindowValid = (): boolean => {
            // console.log(`${maxRepCharFreq + k} >= ${r} - ${l} + 1 = ${(r - l) + 1}`)
            return maxRepCharFreq + k >= (r - l) + 1;
        }

        const updateCharFreq = (): void => {
            const frontier = s[r];
            const frontierFreq = charFreqMap.get(frontier) ?? 0;
            charFreqMap.set(frontier, frontierFreq + 1);
            maxRepCharFreq = Math.max(maxRepCharFreq, frontierFreq + 1);
        }

        updateCharFreq();

        while (r < s.length) {
            // console.log(`currentSubstring: `, s.substring(l, r + 1))

            if (isWindowValid()) {
                // console.log('window is valid')
                longestSubstr = Math.max(longestSubstr, (r - l) + 1);
                // console.log('longest substring ', longestSubstr)
                // console.log('maxCharFreq ', maxRepCharFreq);
                // console.log(`\n`)
                r++;
                updateCharFreq();
            } else {
                // console.log(`window is invalid\n`)
                const leftEdge = s[l];
                const leftEdgeFreq = charFreqMap.get(leftEdge) ?? 0;
                charFreqMap.set(leftEdge, leftEdgeFreq - 1);
                l++;
            }
        }

        return longestSubstr;
    }
}
