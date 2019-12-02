// row, col只有一种选择时
const check_1 = (arr, row, col) => {
    if(arr[row][col] > 0 && arr[row][col] < 10) return arr[row][col];
    if(arr[row][col].length === 1) {
        arr[row][col] = arr[row][col][0];
        return arr[row][col];
    }
   let tmp = [];
   for(let i = 0; i < 9; i++){
       let rowNum = arr[row][i];
       if(rowNum > 0 && rowNum < 10) tmp[rowNum] = true;

       let colNum = arr[i][col];
       if(colNum > 0 && colNum < 10) tmp[colNum] = true;
   }

   for(let i = 0; i < 3; i++){
       for(let j = 0; j < 3; j++){
           let boxNum = arr[Math.floor(row / 3) * 3 + i][Math.floor(col / 3) * 3 + j];
           if(boxNum > 0 && boxNum < 10) tmp[boxNum] = true;
       }
   }

   let result = [];
   for(let i = 1; i < 10; i++){
       if(!tmp[i]) result.push(i);
   }
   if(result.length === 1) { arr[row][col] = result[0]; return arr[row][col]; }
   if(result.length === 0) {
        console.log("#######################", row, col);
        show(arr);
       throw new Error('Error: ');
   }
   arr[row][col] = result;
   return arr[row][col];
};

const check_2 = (arr, row, col) => {
    check_1(arr, row, col);
    let ele = arr[row][col];
    for(let x = ele.length - 1; x >= 0; x--) {
        let num = ele[x];
        let flag = true;
        let isExist = false;
        for (let i = 0; i < 9; i++) {
            if(i === col) continue;
            let rowNum = arr[row][i];
            if (rowNum === 0) { rowNum = check_1(arr, row, i); }
            if(rowNum === num){ flag = false; ele.splice(x, 1); isExist = true; break; }
            if (rowNum > 0 && rowNum < 10) continue;
            if (rowNum.indexOf(num) !== -1) {
                flag = false;
                break;
            }
        }
        if(isExist) continue;
        if (flag) {
            arr[row][col] = num;
            return true;
        }
        flag = true;
        for (let i = 0; i < 9; i++) {
            if(i === row) continue;
            let colNum = arr[i][col];
            if (colNum === 0) { colNum = check_1(arr, i, col); }
            if(colNum === num){ flag = false; ele.splice(x, 1); isExist = true; break;}
            if (colNum > 0 && colNum < 10) continue;
            if (colNum.indexOf(num) !== -1) {
                flag = false;
                break;
            }
        }
        if(isExist) continue;
        if (flag) {
            arr[row][col] = num;
            return true;
        }
        flag = true;
        for (let i = 0; i < 3; i++) {
            let goto = true;
            for (let j = 0; j < 3; j++) {
                if(i === row && col === j) continue;
                let boxNum = arr[Math.floor(row / 3) * 3 + i][Math.floor(col / 3) * 3 + j];
                if (boxNum === 0) {boxNum = check_1(arr, Math.floor(row / 3) * 3 + i, Math.floor(col / 3) * 3 + j)}
                if(boxNum === num){ flag = false; goto = false; ele.splice(x, 1); isExist = true; break;}
                if (boxNum > 0 && boxNum < 10) continue;
                if (boxNum.indexOf(num) !== -1) {
                    flag = false;
                    break;
                }
            }
            if(!goto) break;
        }
        if(isExist) continue;
        if (flag) {
            arr[row][col] = num;
            return true;
        }
    }
    return false;
};
const test = (arr) => {
    let MAX = 10;
    while(MAX--){
        for(let i = 0; i < 9; i++){
            for(let j = 0; j < 9; j++){
                if(arr[i][j] === 0 || typeof arr[i][j] === 'object'){
                    check_2(arr, i, j)
                }
            }
        }
    }

};

const show = arr => {
    for(let i = 0; i < 9; i++){
        const col = arr[i];
        console.log('| '+col[0]+' | '+col[1]+' | '+ col[2] + ' | ' + col[3] + ' | ' + col[4] + ' | ' + col[5] + ' | ' + col[6] + ' | ' + col[7] + ' | ' + col[8] + ' |')
        if(i % 3 === 2){
            console.log('=====================================')
        }else {
            console.log('-------------------------------------')
        }
    }

};

module.exports = { show, test };
