class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let strLengths = "{"

        for (const str of strs) {
            strLengths += `${str.length}|`;
        }

        // "HelloWorld{5|5|"
        return strs.join("") + strLengths;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const strLengths = [];

        // find where the encoding begins
        let startStrLengths = str.length - 1;
        while (str[startStrLengths] !== "{") {
            startStrLengths--;
        }

        let curStrLength = "";
        for (let i = startStrLengths + 1; i < str.length; i++) {
            if (str[i] === "|") {
                strLengths.push(Number(curStrLength));
                curStrLength = "";
            } else {
                curStrLength += str[i];
            }
        }

        const decoded = [];
        for (const strLength of strLengths) {
            let curStr = "";
            const start = decoded.length ? decoded[decoded.length - 1].length : 0;
            for (let i = start; i < start + strLength; i++) {
                curStr += str[i];
            }
            decoded.push(curStr);
            curStr = "";
        }

        return decoded;
    }
}
