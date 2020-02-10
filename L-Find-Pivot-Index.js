// https://leetcode-cn.com/problems/find-pivot-index/

/*
    给定数组,找到下标pivot其左边元素之和等于右边元素之和,没有则返回-1,多个返回最左边一个
 */

const pivotIndex = nums => {
    let sum = nums.reduce((total, num) => total + num);
    let leftSum = 0;
    for(let i = 0; i < nums.length; i++){
        let rightSum = sum - leftSum - nums[i];
        if(rightSum === leftSum){
            return i;
        }
        leftSum += nums[i];
    }
    return -1;
};