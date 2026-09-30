class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const leftToRightMates = {
            '{': '}',
            '[': ']',
            '(': ')',
        };

        const expectations = [];
        for (let i = 0; i < s.length; i++) {
            if (leftToRightMates[s[i]]) { // process the left brackets to form a stack of expectations
                expectations.push(leftToRightMates[s[i]]);
            } else { // given we expect perfect symmetry, the expected right bracket lies at the top of our stack
                const expectation = expectations.pop();
                if (s[i] !== expectation) {
                    return false;
                }
            }
        }

        // any leftover expectations indicates imperfect symmetry
        return expectations.length === 0;
    }
}
