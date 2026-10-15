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
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        if (!root) return [];

        const levelOrderedArray = [[root.val]];

        // each visited node should be aware of the level it is in
        const visitQueue = [{ node: root, level: 0 }];

        while (visitQueue.length > 0) {
            // note this is o(n), a more performant solution would implement a custom queue
            const { node, level } = visitQueue.shift(); 
            
            // add left node to the visited queue and document its value in the level aware array
            if (node.left) {
                const nextLevel = level + 1;

                if (levelOrderedArray.length <= nextLevel) {
                    levelOrderedArray.push([]);
                }

                levelOrderedArray[nextLevel].push(node.left.val);
                visitQueue.push({ node: node.left, level: nextLevel });
            }

            // add right node to the visited queue and document its value in the level aware array
            if (node.right) {
                const nextLevel = level + 1;
                
                if (levelOrderedArray.length <= nextLevel) {
                    levelOrderedArray.push([]);
                }

                levelOrderedArray[nextLevel].push(node.right.val);
                visitQueue.push({ node: node.right, level: level + 1 });
            }
        }

        return levelOrderedArray;
    }
}
