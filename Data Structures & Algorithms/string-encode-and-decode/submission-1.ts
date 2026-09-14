class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let breakPositions = "|";
        
        for (const str of strs) {
            breakPositions += `${str.length}`;
        }

        return strs.join("") + breakPositions;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let breakPositions: number[] = [];

        let i = str.length - 1;
        while (str[i] !== "|") {
            breakPositions.push(Number(str[i]));
            i--;
        }

        const message = str.slice(0, i);
        const finalResult: string[] = [];

        let curStr = "";
        for (let i = 0; i < message.length; i++) {
            if (i === breakPositions[breakPositions.length - 1]) {
                finalResult.push(curStr);
                curStr = "";
                breakPositions.pop();
            }

            curStr += message[i];
        }
        finalResult.push(curStr);

        return finalResult;
    }
}
