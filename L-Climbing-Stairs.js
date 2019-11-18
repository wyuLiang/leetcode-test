// https://leetcode-cn.com/problems/climbing-stairs/

/*
    这是个斐波那契数列，由于一次可以走1步或2步，所以step(n) = step(n - 1) 走一步 + step(n - 2) 走两步
 */

const climbStairs = n => {
    if(n === 1) return 1;
    let pre = 1;
    let cur = 2;
    for(let i = 0; i < n - 2; i++){
        let tmp = cur;
        cur += pre;
        pre = tmp;
    }
    return cur;
};