class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        // define some special char that starts encoding info
        let strLengths = "{"

        // encode length info about the transmitted strs
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

        // parse out the str lengths
        let curStrLength = "";
        for (let i = startStrLengths + 1; i < str.length; i++) {
            if (str[i] === "|") {
                strLengths.push(Number(curStrLength));
                curStrLength = "";
            } else {
                curStrLength += str[i];
            }
        }

        // decode the strs based on the encoded length of each str
        const decoded = [];
        for (const strLength of strLengths) {
            let curStr = "";
            for (let i = 0; i < strLength; i++) {
                curStr += str[i];
            }
            decoded.push(curStr);
            curStr = "";
            str = str.slice(strLength);
        }

        return decoded;
    }
}
