// https://leetcode-cn.com/problems/unique-binary-search-trees-ii/

/**
 * 递归的思想：要获取n个结点所有的二叉搜索树，先获取n-1结点的所有二叉搜索树。对n-1结点的所有树进行插入操作
 * 思路遍历所有右节点。在所有右节点上插入当前结点(n); 并且在最后的右节点末添加当前结点
 * 例如: 【1】插入2红点 2.left = 1;  末尾添加:  1.right = 2; 记a(1) = 【1】; a(2) = [2.left = 1, 1.right = 2];
 * a(3) 插入：【3.left = 2.left = 1】 末尾添加：【2.left = 1, 2.right = 3】
 *      插入 【3.left = 1.right = 2】， 【1.right = 3.left = 2】(在1.right = 2]中插入3)
 *      末尾添加 【1.right = 2.right = 3】
 * a(n) = 对a(n - 1)的所有元素进行右结点插入（多次插入），及末尾添加
 *
 * 算法复杂度大概为 O(n) = n * 卡特兰数； 因为要生成 卡特兰数 个二叉搜索树，所以这个算法还算高效了。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
const generateTrees = n => {
    if(n === 0) return [];
    let trees = [new TreeNode(1)];
    if(n === 1) return trees;

    for(let i = 2; i <= n; i++){
        let replaceTrees = [];
        for(let tree of trees){
            let node = tree;
            let parent = null;
            while(node !== null){
                let newNode = new TreeNode(i);
                if(parent !== null){
                    parent.right = newNode;
                }
                newNode.left = JSON.parse(JSON.stringify(node));
                replaceTrees.push(parent ? JSON.parse(JSON.stringify(tree)) : newNode);
                if(parent !== null){
                    parent.right = node;    //恢复tree树结构
                }
                parent = node;
                node = node.right;
            }
            parent.right = new TreeNode(i);
            replaceTrees.push(JSON.parse(JSON.stringify(tree)));
        }
        trees = replaceTrees;
    }
    return trees;
};


// 以下两个方法只是用于校验结果

// 二叉搜索树的中序遍历是个有序数组
const inorderTraversal = (root, ary = []) => {
    if(!root) return ary;
    if(root.left) inorderTraversal(root.left, ary);
    ary.push(root.val);
    if(root.right) inorderTraversal(root.right, ary);
    return ary;
};

// 使用队列进行广度搜索
const bfs = root => {
    let traverse = '';
    let queue = [];
    if(!root) return traverse;
    queue.push(root);

    while(queue.length !== 0){
        let top = queue.shift();
        if(top){
            traverse += top.val + ', ';
            queue.push(top.left, top.right);
        }else {
            traverse += 'null, ';
        }
    }
    return traverse;
};

let trees = generateTrees(3);
for(let tree of trees){
    // console.log(inorderTraversal(tree));
    console.log(bfs(tree).toString());
    // console.log(JSON.stringify(tree));
}

console.log(trees.length);
