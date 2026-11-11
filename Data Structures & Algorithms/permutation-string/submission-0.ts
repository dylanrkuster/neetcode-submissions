const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if (s1.length > s2.length) return false;

        // slide a window of size s1.length across s2
        // compare a given window against s1 and compare equality
        // the window and s1 are equal when the char frequency of the window === the char frequency of s1
        // ^ doing the above in o(1) size and time will require a clever solution ^

        // something like { "a": 1, "b": 1, "c": 1 }
        const s1CharFreq= new Map<string, number>();
        for (const char of s1) {
            const freq = s1CharFreq.get(char) ?? 0;
            s1CharFreq.set(char, freq + 1);
        }

        const windowCharFreq = new Map<string, number>();
        for (let i = 0; i < s1.length; i++) {
            const freq = windowCharFreq.get(s2[i]) ?? 0;
            windowCharFreq.set(s2[i], freq + 1);
        }

        // if the character frequency for every letter matches then the two strings are equivalent
        let matches = 0;

        // console.log('hello?')

        // build the initial # of matches
        for (const letter of alphabet) {
            if (s1CharFreq.get(letter) === windowCharFreq.get(letter)) {
                matches++;
            }
        }

        let i = 0, j = s1.length - 1;
        while (j < s2.length - 1) {
            // if the window is a permutation of s1, return early
            if (matches === 26) return true;

            // console.log(`for ${s2[i]}${s2[j]}`);
            // console.log(windowCharFreq);
            // console.log(s1CharFreq);
            // console.log(matches);

            // did we align on the charFreq?
            const leftEdgeFreq = windowCharFreq.get(s2[i]);
            if (leftEdgeFreq === (s1CharFreq.get(s2[i]) ?? 0)) {
                matches--;
            }

            // console.log(`still for ${s2[i]}${s2[j]}`);
            // console.log(windowCharFreq);
            // console.log(s1CharFreq);
            // console.log(matches);
            // console.log(`\n\n`)

            windowCharFreq.set(s2[i], leftEdgeFreq - 1);
            if (windowCharFreq.get(s2[i]) === (s1CharFreq.get(s2[i]) ?? 0)) {
                matches++;
            }
            i++;

            j++;
            const rightEdgeFreq = windowCharFreq.get(s2[j]) ?? 0;
            if (rightEdgeFreq === (s1CharFreq.get(s2[j]) ?? 0)) {
                matches--;
            }

            windowCharFreq.set(s2[j], rightEdgeFreq + 1);
            if (windowCharFreq.get(s2[j]) === (s1CharFreq.get(s2[j]) ?? 0)) {
                matches++;
            }
        }

        return matches === 26;
    }
}
