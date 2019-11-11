/*
    AC
    https://leetcode-cn.com/problems/longest-palindromic-substring/
 */

/**
 * Manacher算法；O(n) = n;
 * @param s
 * @returns {string}
 */
const longestPalindrome = s => {
    s = "#" + s.split('').join("#") + "#";  //消除奇偶性
    let rd = [];                            //半径回文长度
    let center = 0;
    let maxRight = 0;
    let maxRdIndex = 0;
    for(let i = 0, len = s.length; i < len; i++){
        rd[i] = 0;                          //初始化
        // 根据对称性，减少搜索次数
        if(i < maxRight){
            rd[i] = Math.min(maxRight - i, rd[2 * center - i]);
        }
        //探索rd[i]的回文半径长度
        let left = i - rd[i] - 1;
        let right = i + rd[i] + 1;
        while(left >= 0 && right < len && s[left--] === s[right++]){
            rd[i]++;
        }
        //更新center 和 maxRight（这里不能直接用right,因为不能判断right++了没有
        if(i+rd[i] >= maxRight){
            center = i;
            maxRight = i + rd[i];
        }
        if(rd[i] >= rd[maxRdIndex]){
            maxRdIndex = i;
        }
    }

    let result = s.slice(maxRdIndex - rd[maxRdIndex], maxRdIndex + rd[maxRdIndex] + 1);
    return result.split('#').join('');
};

/**
 * 动态规则； dp[left][right]表示子字符串(left,right)是否为回文。 O(n) = n^2
 * @param s
 * @returns {Blob|ArrayBuffer|Array.<T>|string}
 */
const longestPalindrome1 = s => {
    let dp = [];
    let maxLeft = 0;
    let maxRight = 0;
    let maxLen = 0;
    for(let right = 0, len = s.length; right < len; right++){
        for(let left = right; left >= 0; left--){
            dp[left] = dp[left] || [];
            dp[left][right] = !!((right - left < 2 || dp[left + 1][right - 1]) && s[left] === s[right]);
            if(dp[left][right] && right - left >= maxLen){
                maxLeft = left;
                maxRight = right;
                maxLen = right - left;
            }
        }
    }
    return s.slice(maxLeft, maxRight + 1);
};

/**
 * 中心扩展法；Manacher算法的低配版，缺少剪枝的过程（寻找对称点） O(n)=n^2
 * @param s
 * @returns {string}
 */
const longestPalindrome2 = s => {
    s = "#" + s.split('').join("#") + "#";  //消除奇偶性
    let maxCenterIdx = 0;
    let maxHalfLen = 0;
    for(let i = 0, len = s.length; i < len; i++){
        let left = i - 1;
        let right = i + 1;
        let halfLen = 0;
        while(left >= 0 && right < len && s[left--] === s[right++]){
            halfLen++;
        }
        if(halfLen >= maxHalfLen){
            maxHalfLen = halfLen;
            maxCenterIdx = i;
        }
    }
    return s.slice(maxCenterIdx - maxHalfLen, maxCenterIdx + maxHalfLen + 1).split('#').join('');
};