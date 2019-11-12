// AC https://leetcode-cn.com/problems/maximum-subarray/



// 暴力算法 O(n) = n ^ 2
const maxSubArray = nums => {
    let max;
    for(let i = 0, len = nums.length; i < len; i++){
        let sum = nums[i];
        max = max !== undefined ? Math.max(sum, max) : sum;
        for(let j = i + 1; j < len; j++){
            sum += nums[j];
            max = Math.max(sum, max);
        }
    }
    return max;
};

// DP O(n)
// max[i]: 表示以第i个元素结尾且和最大的连续子数组
// max[i] = max(max[i - 1] + a[i], a[i]);

const maxSubArray1 = nums => {
    let dp = [nums[0]];
    let max = nums[0];
    for(let i = 1; i < nums.length; i++){
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
        if(dp[i] > max) max = dp[i];
    }
    return max;
};

// DP 优化，减少内存消耗
const maxSubArray2 = nums => {
    let sum = nums[0];
    let dp = nums[0];
    for(let i = 1, len = nums.length; i < len; i++){
        if(sum > 0) sum += nums[i];
        else sum = nums[i];
        if(dp < sum ) dp = sum;
    }
    return dp;
};

const assert = require('assert');
assert.equal(maxSubArray2([-2,1,-3,4,-1,2,1,-5,4]), 6);
assert.equal(maxSubArray2([-1]), -1 );

