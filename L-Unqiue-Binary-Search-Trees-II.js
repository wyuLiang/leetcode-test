// https://leetcode-cn.com/problems/unique-binary-search-trees-ii/


// dp[n] = dp[n - 1] + null + n
// dp[n] = n + dp[n - 1]
const generateTrees = n => {
    if(n === 1) return [1];

};