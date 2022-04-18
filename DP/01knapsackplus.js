const knapsack = (wt, val, n, W) => {
    const dp = new Array(n).fill(0).map(_ => new Array(W+1).fill(0));
    for (let j = 0; j <= W-wt[0]; j++) {
        if (wt[0] <= W) {
            dp[0][j+wt[0]] = val[0];
        }
    }
    for (let i = 1; i < n; i++) {
        for (let j = 0; j <= W; j++) {
            dp[i][j] = dp[i-1][j];
            if (j >= wt[i]) {
                dp[i][j] = Math.max(dp[i][j], dp[i-1][j-wt[i]]+ val[i]);
            }
        }
    }
    return dp[n-1][W];
}


const knapsack1 = (wt, val, n, W) => {
    const dp = new Array(n+1).fill(0).map(_ => new Array(W+1).fill(0));
    for(let i = 1; i <= n; i++) {
        for (let j = 0; j <= W; j++) {
            dp[i][j] = dp[i-1][j];
            if (j >= wt[i-1]) {
                dp[i][j] = Math.max(dp[i][j], dp[i-1][j-wt[i-1]] + val[i-1]);
            }
        }
    }
    return dp[n][W];
}

const knapsack2 = (items, v, n, w) => {
    const dp = new Array(w+1).fill(0);
    for (let i = 0; i < n; i++) {
        for (let j = w; j >= items[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - items[i]] + v[i]);
        }
    }
    return dp[w];
}

console.log(knapsack1([2, 2, 7, 6, 3], [3, 4, 18, 9, 6], 5, 9));
console.log(knapsack([2, 2, 7, 6, 3], [3, 4, 18, 9, 6], 5, 9));