// https://leetcode-cn.com/problems/validate-binary-search-tree/


function TreeNode(val){
    this.val = val;
    this.left = this.right = null;
}

/*
    检测二叉树是否为二叉搜索树(BST)
    方法1： 中序遍历(如果有序则为true，否则为false),而且并不需要保留整个遍历序列，只需保留最后一个遍历元素即可
*/
const isValidBST = root => {
    let stack = [];
    let last = null;
    if(!root) return true;
    let cur = root;
    while(cur !== null || stack.length !== 0){
        while(cur !== null){
            stack.push(cur);
            cur = cur.left;
        }
        let node = stack.pop();
        if(last !== null && last >= node.val) return false;
        last = node.val;
        cur = node.right;
    }
    return true;
};