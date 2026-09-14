class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        return strs.join(",")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        console.log(str)
        let decodedStr = []
        let singleElement = "";
        for (const char of str) {
            if (char === ",") {
                decodedStr.push(singleElement);
                singleElement = "";
            } else {
                singleElement += char;
            }
        }
        decodedStr.push(singleElement);
        return decodedStr;
    }
}
