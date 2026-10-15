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
     * @return {number}
     */
    maxDepth(root: TreeNode | null): number {
        if (!root) return 0;

        const leftDepth = 1 + this.maxDepth(root.left); // probe the left side
        const rightDepth = 1 + this.maxDepth(root.right); // probe the right side
        const maxDepthForNode = Math.max(leftDepth, rightDepth);

        return maxDepthForNode;
    }
}
