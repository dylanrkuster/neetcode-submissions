class Solution {
    toTripletKey(num1: number, num2: number, num3: number): string {
        const sorted = [num1, num2, num3].sort();
        return `${sorted[0]},${sorted[1]},${sorted[2]}`;
    }

    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const result: number[][] = [];
        const sorted: number[] = nums.sort((a, b) => a - b);
        // console.log(sorted);
        const seen: Set<string> = new Set<string>();

        for (let i = 0; i < sorted.length; i++) {
            let l = i + 1, r = sorted.length - 1;
            let sum = sorted[i] + sorted[l] + sorted[r];

            while (l < r) {
                if (sum === 0) {
                    const tripletKey = this.toTripletKey(sorted[i], sorted[l], sorted[r]);
                    if (!seen.has(tripletKey)) {
                        result.push([sorted[i], sorted[l], sorted[r]]);
                        seen.add(tripletKey);
                    }
                }

                if (sum < 0) {
                    l++
                } else {
                    r--;
                }
                
                sum = sorted[i] + sorted[l] + sorted[r];
            }

            // if (sum === 0 && l < r) {
            //     const tripletKey = this.toTripletKey(sorted[i], sorted[l], sorted[r]);
            //     if (!seen.has(tripletKey)) {
            //         result.push([sorted[i], sorted[l], sorted[r]]);
            //         seen.add(tripletKey);
            //     }
            // }
        }

        return result;
    }

    // [-2, 0, 1, 1, 2]
    // [-4, -1, -1, 0, 1, 2]
}
