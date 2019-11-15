// https://leetcode-cn.com/problems/unique-paths/

/*
    dp[i][j] = dp[i - 1][j] + dp[i][j - 1];     // i >= 0 && i < n && j >=0 && j < m;
 */

/**
 *
 * @param {number} m 长
 * @param {number} n 宽
 * @returns {number} 总共的走法
 */
const uniquePaths = (m, n) => {
    let dp = [];
    for(let i = 0; i < n; i++){
        dp[i] = [];
        for(let j = 0; j < m; j++) {
            dp[i][j] = (i - 1 < 0 || j - 1 < 0) ? 1 : dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[n - 1][m - 1];
};