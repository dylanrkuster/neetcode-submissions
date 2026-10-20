class Solution {
    alphaNumerics = new Set([
        "a", "b", "c", "d", "e", "f", "g", "h",
        "i", "j", "k", "l", "m", "n", "o", "p",
        "q", "r", "s", "t", "u", "v", "w", "x",
        "y", "z", "0", "1", "2", "3", "4", "5",
        "6", "7", "8", "9"
    ]);

    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let i = 0, j = s.length - 1;

        while (i < s.length && j >= 0) {
            const left = s[i].toLowerCase();
            if (!this.alphaNumerics.has(left)) {
                 i++;
                 continue;
            };

            const right = s[j].toLowerCase();
            if (!this.alphaNumerics.has(right)) {
                 j--;
                 continue;
            };

            if (left !== right) {
                return false;
            }

            i++;
            j--;
        }

        return true;
    }
}
