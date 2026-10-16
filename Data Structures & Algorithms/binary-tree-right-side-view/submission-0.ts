/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root: TreeNode | null): number[] {
        if (!root) return [];

        const rightSideVis = [[]];
        const toVisit = [{ node: root, level: 0}];

        while (toVisit.length) {
            const { node, level } = toVisit.shift();
            const newLevel = level + 1;

            rightSideVis[level].push(node.val);

            if (node.right) {
                if (rightSideVis.length <= newLevel) {
                    rightSideVis.push([]);
                }
                toVisit.push({ node: node.right, level: newLevel });
            }

            if (node.left) {
                if (rightSideVis.length <= newLevel) {
                    rightSideVis.push([]);
                }
                toVisit.push({ node: node.left, level: newLevel });
            }
        }

        return rightSideVis.map(level => level[0]);
    }
}
