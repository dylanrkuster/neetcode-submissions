class Solution {
    computeArea(height1: number, height2: number, distance: number): number {
        const limit = Math.min(height1, height2);
        return limit * distance;
    }

    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let i = 0, j = heights.length - 1;
        let max = 0;

        while (i < j) {
            max = Math.max(this.computeArea(heights[i], heights[j], j - i), max);
            // console.log(`max: ${max}`);
            // console.log(`i: ${i}`);
            // console.log(`j: ${j}`);

            if (heights[i] < heights[j]) {
                i++;
            } else {
                j--;
            }
        }

        return max;
    }
}
