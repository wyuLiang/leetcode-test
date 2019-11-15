// AC https://leetcode-cn.com/problems/word-break/

// 带备忘录的暴力搜索法
const wordBreak = (s, wordDict) => {
    let memo = [];                                      //memo[i][j]表示 s.slice(i, j)能否拆分； undefined时表示未计算；
    for(let i = 0; i <= s.length; i++) memo[i] = [];
    return $wordBreak(s, 0, s.length);

    //这里的i、j、mi、mj 是s的下标，不是sub的下标
    function $wordBreak(sub, i, j) {
        if(i === j) { memo[i][j] = true; return true; } //sub为空，memo[i][j]为true
        if(memo[i][j] !== undefined) { return memo[i][j]; }
        for(let word of wordDict){
            let idx = sub.indexOf(word);
            if(idx === -1) continue;
            let mi = i + idx;
            let mj = mi + word.length;
            memo[mi][mj] = true;
            memo[i][j] = $wordBreak(sub.slice(0, idx), i, mi) && $wordBreak(sub.slice(idx + word.length), mj, j);
            if(memo[i][j]) return true;
        }
        memo[i][j] = false;
        return false;
    }
};

// DP
// dp[i] 表示字符串s(0,i)能否拆分
// s(0, i) = s(0, j) && wordDict.indexOf(sub(i-j)) !== -1 其中 j >= 0 && j < i;
const wordBreak1 = (s, wordDict) => {
    if(!s.length) return true;
    let dp = [true];        //初始化dp[0]
    for(let i = 1; i <= s.length; i++){
        for(let j = 0; j < i; j++){
            if(dp[j] && wordDict.indexOf(s.slice(j, i)) !== -1){
                dp[i] = true;
                break;
            }
            dp[i] = false;
        }
    }
    return dp[dp.length - 1];
};


let tests = [
    ['leetcodes', ['ee', 'e', 'lt', 'code', 's'], false]
    ,['catsandogaaasss', ["cats", "dog", "sand", "and", "cat", 'a', 's'], false]
    ,['catsandogaaasss', ["cats", "og", "sand", "and", "cat", 'a', 's'], true]
    ,['applepenapple', ["apple", "pen"], true]
    ,["bccdbacdbdacddabbaaaadababadad", ["cbc","bcda","adb","ddca","bad","bbb","dad","dac","ba","aa","bd","abab","bb","dbda","cb","caccc","d","dd","aadb","cc","b","bcc","bcd","cd","cbca","bbd","ddd","dabb","ab","acd","a","bbcc","cdcbd","cada","dbca","ac","abacd","cba","cdb","dbac","aada","cdcda","cdc","dbc","dbcb","bdb","ddbdd","cadaa","ddbc","babb"], true]
    ,['fohhemkkaecojceoaejkkoedkofhmohkcjmkggcmnamixxFF', ["kfomka","hecagbngambii","anobmnikj","c","nnkmfelneemfgcl",'xxF',"ah","bgomgohl","lcbjbg","ebjfoiddndih","hjknoamjbfhckb","eioldlijmmla","nbekmcnakif","fgahmihodolmhbi","gnjfe","hk","b","jbfgm","ecojceoaejkkoed","cemodhmbcmgl","j","gdcnjj","kolaijoicbc","liibjjcini","lmbenj","eklingemgdjncaa","m","hkh","fblb","fk","nnfkfanaga","eldjml","iejn","gbmjfdooeeko","jafogijka","ngnfggojmhclkjd","bfagnfclg","imkeobcdidiifbm","ogeo","gicjog","cjnibenelm","ogoloc","edciifkaff","kbeeg","nebn","jdd","aeojhclmdn","dilbhl","dkk","bgmck","ohgkefkadonafg","labem","fheoglj","gkcanacfjfhogjc","eglkcddd","lelelihakeh","hhjijfiodfi","enehbibnhfjd","gkm","ggj","ag","hhhjogk","lllicdhihn","goakjjnk","lhbn","fhheedadamlnedh","bin","cl","ggjljjjf","fdcdaobhlhgj","nijlf","i","gaemagobjfc","dg","g","jhlelodgeekj","hcimohlni","fdoiohikhacgb","k","doiaigclm","bdfaoncbhfkdbjd","f","jaikbciac","cjgadmfoodmba","molokllh","gfkngeebnggo","lahd","n","ehfngoc","lejfcee","kofhmoh","cgda","de","kljnicikjeh","edomdbibhif","jehdkgmmofihdi","hifcjkloebel","gcghgbemjege","kobhhefbbb","aaikgaolhllhlm","akg","kmmikgkhnn","dnamfhaf","mjhj","ifadcgmgjaa","acnjehgkflgkd","bjj","maihjn","ojakklhl","ign","jhd","kndkhbebgh","amljjfeahcdlfdg","fnboolobch","gcclgcoaojc","kfokbbkllmcd","fec","dljma","noa","cfjie","fohhemkka","bfaldajf","nbk","kmbnjoalnhki","ccieabbnlhbjmj","nmacelialookal","hdlefnbmgklo","bfbblofk","doohocnadd","klmed","e","hkkcmbljlojkghm","jjiadlgf","ogadjhambjikce","bglghjndlk","gackokkbhj","oofohdogb","leiolllnjj","edekdnibja","gjhglilocif","ccfnfjalchc","gl","ihee","cfgccdmecem","mdmcdgjelhgk","laboglchdhbk","ajmiim","cebhalkngloae","hgohednmkahdi","ddiecjnkmgbbei","ajaengmcdlbk","kgg","ndchkjdn","heklaamafiomea","ehg","imelcifnhkae","hcgadilb","elndjcodnhcc","nkjd","gjnfkogkjeobo","eolega","lm","jddfkfbbbhia","cddmfeckheeo","bfnmaalmjdb","fbcg","ko","mojfj","kk","bbljjnnikdhg","l","calbc","mkekn","ejlhdk","hkebdiebecf","emhelbbda","mlba","ckjmih","odfacclfl","lgfjjbgookmnoe","begnkogf","gakojeblk","bfflcmdko","cfdclljcg","ho","fo","acmi","oemknmffgcio","mlkhk","kfhkndmdojhidg","ckfcibmnikn","dgoecamdliaeeoa","ocealkbbec","kbmmihb","ncikad","hi","nccjbnldneijc","hgiccigeehmdl","dlfmjhmioa","kmff","gfhkd","okiamg","ekdbamm","fc","neg","cfmo","ccgahikbbl","khhoc","elbg","cbghbacjbfm","jkagbmfgemjfg","ijceidhhajmja","imibemhdg","ja","idkfd","ndogdkjjkf","fhic","ooajkki","fdnjhh","ba","jdlnidngkfffbmi","jddjfnnjoidcnm","kghljjikbacd","idllbbn","d","mgkajbnjedeiee","fbllleanknmoomb","lom","kofjmmjm","mcdlbglonin","gcnboanh","fggii","fdkbmic","bbiln","cdjcjhonjgiagkb","kooenbeoongcle","cecnlfbaanckdkj","fejlmog","fanekdneoaammb","maojbcegdamn","bcmanmjdeabdo","amloj","adgoej","jh","fhf","cogdljlgek","o","joeiajlioggj","oncal","lbgg","elainnbffk","hbdi","femcanllndoh","ke","hmib","nagfahhljh","ibifdlfeechcbal","knec","oegfcghlgalcnno","abiefmjldmln","mlfglgni","jkofhjeb","ifjbneblfldjel","nahhcimkjhjgb","cdgkbn","nnklfbeecgedie","gmllmjbodhgllc","hogollongjo","fmoinacebll","fkngbganmh","jgdblmhlmfij","fkkdjknahamcfb","aieakdokibj","hddlcdiailhd","iajhmg","jenocgo","embdib","dghbmljjogka","bahcggjgmlf","fb","jldkcfom","mfi","kdkke","odhbl","jin","kcjmkggcmnami","kofig","bid","ohnohi","fcbojdgoaoa","dj","ifkbmbod","dhdedohlghk","nmkeakohicfdjf","ahbifnnoaldgbj","egldeibiinoac","iehfhjjjmil","bmeimi","ombngooicknel","lfdkngobmik","ifjcjkfnmgjcnmi","fmf","aoeaa","an","ffgddcjblehhggo","hijfdcchdilcl","hacbaamkhblnkk","najefebghcbkjfl","hcnnlogjfmmjcma","njgcogemlnohl","ihejh","ej","ofn","ggcklj","omah","hg","obk","giig","cklna","lihaiollfnem","ionlnlhjckf","cfdlijnmgjoebl","dloehimen","acggkacahfhkdne","iecd","gn","odgbnalk","ahfhcd","dghlag","bchfe","dldblmnbifnmlo","cffhbijal","dbddifnojfibha","mhh","cjjol","fed","bhcnf","ciiibbedklnnk","ikniooicmm","ejf","ammeennkcdgbjco","jmhmd","cek","bjbhcmda","kfjmhbf","chjmmnea","ifccifn","naedmco","iohchafbega","kjejfhbco","anlhhhhg"], false]
];

const assert = require('assert');
for(let [s, wordDict, res] of tests){
    assert.equal(wordBreak(s, wordDict), res);
    assert.equal(wordBreak1(s, wordDict), res);
}


console.log(new Date(1545622932713));
console.log(1545622932713 + 3600 * 24 * 30 * 1000);
console.log(new Date(1545622932713 + 3600 * 24 * 30 * 1000));
console.log(130000 + 1000000 + 49992384 +38000000 + 9878534 + 24914750 + 31736500);
console.log(1548064698839 > 1548063551017)
154652168