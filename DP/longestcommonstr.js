const longest = (str1, str2) => {
    const n1 = str1.length;
    const n2 = str2.length;
    const dp = new Array(n1).fill(0).map(_ => new Array(n2).fill(0));
    let res = 0;
    for (let j = 0; j < n2; j++) {
        if (str1[0] === str2[j]) dp[0][j] = 1;
        else if (j) dp[0][j] = dp[0][j-1];
        else dp[0][j] = 0;
    }
    for (let i = 0; i < n1; i++) {
        if (str1[i] === str2[0]) dp[i][0] = 1;
        else if (i) dp[i][0] = dp[i-1][0];
        else dp[i][0] = 0;
    }
    for (let i = 1; i < n1; i++) {
        for (let j = 1; j < n2; j++) {
            if (str1[i] === str2[j]) {
                dp[i][j] = dp[i-1][j-1] + 1;
            }
            else dp[i][j] = 0;
            res = Math.max(res, dp[i][j]);
        }
    }
    return dp[n1-1][n2-1];
}



const longest1 = (str1, str2) => {
    const n1 = str1.length;
    const n2 = str2.length;
    let max = 0;
    const f = (i, j, n) => {
        if (i === n1-1 || j === n2-1) {
            if (n > max) max = n;
            return ;
        }
        if (str1[i] === str2[j]) f(i+1, j+1, n+1);
        else {
            f(i+1, j, n);
            f(i, j+1, n);
    }
    }
    f(0,0,0);
    return max;
}
//console.log(longest(str1, str2));
const str1 = "abcd";
const str2 = "axxd";
console.log(longest(str1, str2));