class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        // while i process left brackets, i could throw the expected right bracket into a stack
        // then while i process the right brackets, i know that what i expect lies on the top of the stack
        // if the comparison fails between what im currently reading and what i expect, i can return false early

        const leftToRightBrackets = {
            '{': '}',
            '[': ']',
            '(': ')',
        };

        // process the left brackets to form a stack of expectations
        const expectations = [];
        for (let i = 0; i < s.length; i++) {
            if (leftToRightBrackets[s[i]]) {
                expectations.push(leftToRightBrackets[s[i]]);
            } else {
                const expectation = expectations.pop();
                if (s[i] !== expectation) {
                    return false;
                }
            }
        }

        return expectations.length === 0;
    }
}
