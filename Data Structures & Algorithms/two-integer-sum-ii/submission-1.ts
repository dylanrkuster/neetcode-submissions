class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let l = 0, r = numbers.length - 1;
        let sum = numbers[l] + numbers[r];

        while (sum !== target) {
            if (sum < target) {
                l++
            } else {
                r--;
            }

            sum = numbers[l] + numbers[r];
        }

        return [l + 1, r + 1];
    }
}
