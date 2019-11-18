// https://leetcode-cn.com/problems/edit-distance/

// dp[i][j] 表示 x[0..i] 转变成 y[0...j]所需要的次数
// 当x[i] === y[j]时 dp[i][j] = dp[i - 1][j - 1];
// 否则dp[i][j] = Math.min(dp[i-1][j], dp[i-1][j-1], dp[i][j-1]) + 1

const minDistance = (x, y) => {
    let dp = [];
    if(!x.length || !y.length) return Math.abs(x.length  - y.length);
    for(let i = 0; i < x.length; i++){
        dp[i] = [];
        for(let j = 0; j < y.length; j++){
            if(i === 0 && j === 0){
                dp[i][j] = x[i] === y[j] ? 0 : 1;
            }else if(i === 0){
                dp[i][j] = x[i] === y[j] ? j - i : dp[i][j - 1] + 1;
            }else if(j === 0){
                dp[i][j] = x[i] === y[j] ? i - j : dp[i - 1][j] + 1;
            }else{
                let a = dp[i - 1][j - 1];
                if(x[i] === y[j]) dp[i][j] = a;   // 如果不添加该判断，则['zolo', 'zo']会为1
                else {
                    let b = dp[i - 1][j];
                    let c = dp[i][j - 1];
                    dp[i][j] = Math.min(a, b, c) + 1;
                }
            }
        }
    }
    return dp[x.length - 1][y.length -1];
};

const assert = require('assert');

let tests = [
    ['a', '', 1],
    ['a', 'ab', 1],
    ['', 'a', 1],
    ['sea', 'eat', 2],
    ['intention', 'execution', 5],
    ['horse', 'ros', 3],
    ["zoologicoarchaeologist","zoogeologist", 10],
    ['pneumonoultramicroscopicsilicovolcanoconiosis', 'ultramicroscopically', 27]
];

for(let [a, b, c] of tests){
    assert.equal(minDistance(a, b), c);
}
