class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        // quick exit,
        // cant be anagrams if they're different lengths
        if (s.length !== t.length) return false;

        const sortedS = [...s].sort();
        const sortedT = [...t].sort();

        for (let i = 0; i < sortedS.length; i++) {
            if (sortedS[i] !== sortedT[i]) {
                return false;
            }
        }

        return true;
    }
}
