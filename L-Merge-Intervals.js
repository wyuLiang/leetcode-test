//AC https://leetcode.com/problems/merge-intervals/

/*
    @param {number[][]} intervals
    @return {number[][]}
 */
const merge = ary => {
    ary.sort((l, r) => l[1] - r[1]);
    for(let i = ary.length - 1; i > 0; i--){
        let left = ary[i - 1];
        let right = ary[i];
        if(right[0] > left[1]) continue;
        if(right[0] > left[0]) right[0] = left[0];
        ary.splice(i - 1, 1);
    }
    return ary;
};