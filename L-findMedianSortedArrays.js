// https://leetcode-cn.com/problems/median-of-two-sorted-arrays/

// 寻找两个有序数组的中位数。要求时间复杂度为O(log(m + n))，其中m和n分别为数组长度

/*
const assert = require('assert');

const findMedianOfOneArray = (arr, start, end) => {
    let idx = Math.floor((start + end) / 2);
    if((end - start) % 2 === 1) return arr[idx];
    else return (arr[idx] + arr[idx - 1]) / 2;
};

const findMedianOfOneArrayAndNumber = (arr, start, end, value) => {
    let idx = Math.floor((start + end) / 2);
    let middle = arr[idx];
    let right = end === idx + 1 ? Infinity : arr[idx + 1];
    let left = start === idx ? -Infinity : arr[idx - 1];
    if(value >= middle){
        if( (end - start) % 2 === 0 ) return middle;
        return (middle + Math.min(value, right)) / 2;
    } else {
        if( (end - start ) % 2 === 0) return Math.max(value, left);
        return (middle + Math.max(value, left)) / 2;
    }
};

const findMedianSortedArrays = (nums1, nums2) => {
    // 为了避免修改nums1和nums2, 所以这里使用了start 和 end来表示数组下标
    let start1 = 0, end1 = nums1.length;
    let start2 = 0, end2 = nums2.length;
    while(true) {
        console.log(start1, end1, start2, end2);
        assert.equal(end2 >= start2 && end1 >= start1, true);
        if(start1 === end1){
            return findMedianOfOneArray(nums2, start2, end2);
        } else if(start2 === end2){
            return findMedianOfOneArray(nums1, start1, end1);
        } else if(end1 - start1 === 1) {
            return findMedianOfOneArrayAndNumber(nums2, start2, end2, nums1[start1]);
        } else if(end2 - start2 === 1){
            return findMedianOfOneArrayAndNumber(nums1, start1, end1, nums2[start2]);
        }

        let middle1 = Math.floor((start1 + end1) / 2);
        let middle2 = Math.floor((start2 + end2) / 2);
        console.log("#####", nums1[middle1], nums2[middle2], "$$$$$");
        if(nums1[middle1] > nums2[middle2]){
            let removeCnt = Math.min(middle2 - start2, end1 - middle1);
            start2 += removeCnt;
            end1 -= removeCnt;
        } else {
            let removeCnt = Math.min(middle1 - start1, end2 - middle2);
            start1 += removeCnt;
            end2 -= removeCnt;
        }
    }
};
*/




let tests = [];
// tests.push([ [1, 2, 3], [4, 5, 6], 3.5]);
// tests.push([ [1, 3], [2], 2 ]);
// tests.push([ [1, 3], [2, 4], 2.5]);
// tests.push([ [1,2,3], [], 2]);
// tests.push([ [], [1,2,3], 2]);
// tests.push([ [1], [1,2,3,4], 2]);
// tests.push([ [1,1], [1,2,3,4], 1.5]);
// tests.push([ [4], [1,2,3,4], 3]);
// tests.push([[1], [1], 1]);
tests.push([[1,2],[-1, 3], 1.5]);
for(let [a, b, c] of tests){
    assert.equal(findMedianSortedArrays(a, b), c);
}
