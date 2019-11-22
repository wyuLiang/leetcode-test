// https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
// 二叉树的中序遍历


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// 递归做法
const inorderTraversal = (root, ary = []) => {
    if(!root) return ary;
    if(root.left) inorderTraversal(root.left, ary);
    ary.push(root.val);
    if(root.right) inorderTraversal(root.right, ary);
    return ary;
};

// 迭代做法

const inorderTraversal1 = root => {
    let stack = [];
    let traversal = [];
    if(!root) return traversal;
    let cur = root;
    while(cur !== null || stack.length !== 0){
        while(cur !== null){
            stack.push(cur);
            cur = cur.left;
        }
        let node = stack.pop();
        traversal.push(node.val);
        cur = node.right;
    }
    return traversal;
};

