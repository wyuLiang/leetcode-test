// https://leetcode-cn.com/problems/binary-tree-preorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {Array} traversal
 * @return {number[]}
 */

//递归算法
const preorderTraversal = (root, traversal = []) => {
    if(!root) return traversal;
    traversal.push(root.val);
    if(root.left) preorderTraversal(root.left, traversal);
    if(root.right) preorderTraversal(root.right, traversal);
    return traversal;
};

//迭代算法

const preorderTraversal1 = root => {
    let traversal = [];
    if(!root) return traversal;
    let stack = [];
    let cur = root;
    while(cur !== null || stack.length !== 0){
        while(cur !== null){
            traversal.push(cur.val);
            stack.push(cur);
            cur = cur.left;
        }
        let node = stack.pop();
        cur = node.right;
    }
    return traversal;
};