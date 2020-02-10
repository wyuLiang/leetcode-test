// https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/

// PS： 坑爹的js，Math.floor( 4 / -12 ) === -1; 所以对于正数需要Math.floor()负数则需要Math.ceil();

// 逆波兰表达式

const evalRPN = tokens => {
    let stack = [];
    for(let token of tokens){
        switch(token){
            case '+': stack.push(stack.pop() + stack.pop()); break;
            case '-': stack.push(0 - (stack.pop() - stack.pop())); break;
            case '*': stack.push(stack.pop() * stack.pop()); break;
            case '/':
                let right = stack.pop();
                let result = stack.pop() / right;
                stack.push(result > 0 ? Math.floor(result) : Math.ceil(result));
                break;
            default:
                stack.push(Number(token));
        }
    }
    return stack[0];
};

// evalRPN(["2", "1", "+", "3", "*"]); //9
// evalRPN(["4", "13", "5", "/", "+"]); //6
// evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]);
// evalRPN(["4","-2","/","2","-3","-","-"]);

