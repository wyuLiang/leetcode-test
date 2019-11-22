// https://leetcode-cn.com/problems/triangle/


// 自底向上
// triangle[i][j] 的子节点为  triangle[i + 1][ j ] 和 triangle[i + 1][j + 1];
// dp[i][j] = min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j]
const minimumTotal = triangle => {
    if(!triangle || !triangle.length) return 0;
    let dp = [];
    for(let len = triangle.length, i = len - 1; i >= 0; i-- ){
        dp[i] = [];
        for(let j = 0; j < triangle[i].length; j++){
            if(i === len - 1){
                dp[i][j] = triangle[i][j];
            }else {
                dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j];
            }
        }
    }
    return dp[0][0];
};

// 空间复杂度O(n) = n
const minimumTotal1 = triangle => {
    if(!triangle || !triangle.length) return 0;
    let dp = [];
    for(let i = triangle.length - 1; i >= 0; i--){
        for(let j = 0; j < triangle[i].length; j++){
            if(i === triangle.length - 1){
                dp[j] = triangle[i][j];
            }else {
                dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
            }
        }
    }
    return dp[0];
};