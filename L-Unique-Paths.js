// https://leetcode-cn.com/problems/unique-paths/
// 升级版 https://leetcode-cn.com/problems/unique-paths-ii/

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

/**
 *
 * @param {number[][]} grid
 * @return {number}
 */

// dp[i][j] = grid[i][j] ? 0 : dp[i + 1][j] + dp[i][j + 1]
// 可以在最外层设置为dp[n][0~m] = 0; dp[0~n][m] = 0;
const uniquePathsWithObstacles = grid => {
    let n = grid.length;
    let m = grid[0].length;
    let dp = [];
    for(let i = n - 1; i >= 0; i--){
        dp[i] = [];
        for(let j = m - 1; j >= 0; j--){
            if(grid[i][j]) dp[i][j] = 0;
            else if(i + 1 === n && j + 1 === m) dp[i][j] = 1;
            else {
                if(j + 1 === m){
                    dp[i][j] = dp[i + 1][j];
                } else if(i + 1 === n){
                    dp[i][j] = dp[i][j + 1];
                } else {
                    dp[i][j] = dp[i][j + 1] + dp[i + 1][j];
                }
            }
        }
    }
    return dp[0][0];
};