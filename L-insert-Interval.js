//AC https://leetcode-cn.com/problems/insert-interval/

//TODO: 可以尝试使用二分查找法，进行插入|合并 intervals
const insert = (intervals, [start, end]) => {
    let index;

    for(let len = intervals.length, i = len - 1; i >= 0; i--){
        let [s, e] = intervals[i];
        if(start > e){
            intervals.splice(i + 1, 0, [start, end]);
            return intervals;
        }
        if(end >= s && start <= e){
            intervals[i][0] = Math.min(s, start);
            intervals[i][1] = Math.max(e, end);
            index = i;
            break;
        }
    }
    if(index === undefined){
        intervals.unshift([start, end]);
        return intervals;
    }

    start = intervals[index][0];
    end = intervals[index][1];

    for(let i = 0; i < index; i++){
        let [s, e] = intervals[i];
        if(e >= start){
            intervals[i][0] = Math.min(s, start);
            intervals[i][1] = Math.max(e, end);
            intervals.splice(i + 1, index - i);
            break;
        }
    }
    return intervals;
};

const assert = require('assert');
let res = insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4, 8]);
assert.deepEqual(res, [[1,2],[3,10],[12,16]]);

res = insert( [[1,3],[6,9]], [2, 5]);
assert.deepEqual(res, [[1, 5], [6, 9]]);

res = insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [18, 19]);
assert.deepEqual(res, [[1,2],[3,5],[6,7],[8,10],[12,16], [18, 19]]);

res = insert([[3,5],[6,7],[8,10],[12,16]], [1, 3]);

assert.deepEqual(res, [[1, 5],[6,7],[8,10],[12,16]]);