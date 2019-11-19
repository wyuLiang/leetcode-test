// https://leetcode-cn.com/problems/largest-rectangle-in-histogram/

const largestRectangleArea = heights => {
    let stack = [-1];
    let max = 0;
    for(let i = 0, len = heights.length; i < len; i++){
        const h = heights[i];
        let p = peek(stack);
        if(p !== -1 && heights[p] > h ){
            do{
                let t = stack.pop();
                p = peek(stack);
                let area = heights[t] * (i - p - 1);
                max = Math.max(area, max);
            }while(p !== -1 && heights[p] > h);
        }
        stack.push(i);
    }
    while(peek(stack) !== -1){
        let t = stack.pop();
        let area = heights[t] * (heights.length - peek(stack) - 1);
        max = Math.max(area, max);
    }

    return max;
};

const peek = ary => ary[ary.length - 1];

largestRectangleArea([6, 7, 5, 2, 4, 5, 9, 3]);