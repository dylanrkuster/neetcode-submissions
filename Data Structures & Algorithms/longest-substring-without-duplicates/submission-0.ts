class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        // guarantee s.length >= 1
        if (!s.length) return 0;

        let longestSubstr = 1;

        // 2 pointers representing the ends of each window
        let l = 0, r = 0;

        // set of the characters we've seen
        const seenChars = new Set<string>();

        // slide our window until it hits the end
        while (r < s.length) {
            if (!seenChars.has(s[r])) { // we know our window contains all unique
                longestSubstr = Math.max(longestSubstr, (r - l) + 1);
                seenChars.add(s[r]);
                r++; // expand the window until this fails
            } else { // we've reached a char duped within the substr
                seenChars.delete(s[l]);
                l++; // slide left until the right edge of the window is no longer seen
            }
        }

        return longestSubstr;
    }
}
