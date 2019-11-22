// https://leetcode-cn.com/problems/binary-tree-postorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// 递归算法
const postorderTraversal = function(root, traversal = []) {
    if(!root) return traversal;
    if(root.left) postorderTraversal(root.left, traversal);
    if(root.right) postorderTraversal(root.right, traversal);
    traversal.push(root.val);
    return traversal;
};


const postorderTraversal = root => {
    let traversal = [];
    if(!root) return traversal;
    let stack = [];
    stack.push(root);
    while(stack.length !== 0){
        let cur = stack.pop();
        traversal.push(cur.val);
        stack.push(cur.left);
        stack.push(cur.right);
    }
    return traversal.reverse();
};