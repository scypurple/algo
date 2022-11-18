const longest = (s1, s2) => {
    const n1 = s1.length;
    const n2 = s2.length;
    const dp = Array(n1+1).fill(0).map(_ => Array(n2+1).fill(0));
    let res = 0;
    for (let i = 1; i <= n1; i++) {
        for (let j = 1; j <= n2; j++) {
            if (s1[i-1] === s2[j-1]) dp[i][j] = dp[i-1][j-1] + 1;
            res = Math.max(res, dp[i][j]);
        }
    }
    return res;
}
