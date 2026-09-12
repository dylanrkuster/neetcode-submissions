class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const groupedAnagrams = new Map<string, string[]>();

        for (const str of strs) {
            // build a key that represents the string's length and char freq,
            // for ex "dog" => "3d1g1o1"
            const charFreq = new Map<string, number>();
            for (const char of str) {
                const freq = charFreq.get(char) ?? 0;
                charFreq.set(char, freq + 1);
            }

            let strKey = `${str.length}`;
            for (const key of Array.from(charFreq.keys()).sort()) {
                strKey += `${key}${charFreq.get(key)}`;
            }

            const anagramGroup = groupedAnagrams.get(strKey) ?? [];
            groupedAnagrams.set(strKey, [...anagramGroup, str]);
        }

        return [...groupedAnagrams.values()];
    }
}
