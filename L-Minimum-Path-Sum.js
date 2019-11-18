// https://leetcode-cn.com/problems/minimum-path-sum/

// dp[i][j] = Math.min(dp[i + 1][j], dp[i][j + 1]) + path[i][j];

const minPathSum = grid => {
    let row = grid.length;
    let col = grid[0].length;
    let dp = [];
    for(let i = 0; i <= row; i++){
        dp[i] = dp[i] || [];
        dp[i][col] = Infinity;
    }

    for(let j = 0; j <= col; j++){
        dp[row][j] = Infinity;
    }

    for(let i = row - 1; i >= 0; i--){
        for(let j = col - 1; j >= 0; j--){
            if( row - 1 === i && col - 1 === j){
                dp[i][j] = grid[i][j];
            }else {
                dp[i][j] = Math.min(dp[i + 1][j], dp[i][j + 1]) + grid[i][j];
            }
        }
    }
    return dp[0][0];
};

minPathSum([
    [1,3,1],
    [1,5,1],
    [4,2,1]
])

