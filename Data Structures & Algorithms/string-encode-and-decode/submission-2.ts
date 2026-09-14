class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        console.log(strs);
        let breakPositions = "|";
        
        for (const str of strs) {
            breakPositions += `${str.length}`;
        }
        console.log(strs.join("") + breakPositions)
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

        breakPositions = breakPositions.reverse(); // see if i can maybe get rid of this later

        let message = str.slice(0, i);
        const finalResult: string[] = [];

        for (const breakPosition of breakPositions) {
            let curStr = "";
            for (let i = 0; i < breakPosition; i++) {
                curStr += message[i];
            }
            finalResult.push(curStr);
            message = message.slice(breakPosition);
        }

        return finalResult;
    }
}
