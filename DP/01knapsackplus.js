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


const knapsack1 = (weight, value, n, w) => {
    let states = new Array(n).fill(-1).map(_ => new Array(w + 1).fill(-1));
    states[0][0] = 0;
    if (weight[0] <= w) {
        states[0][weight[0]] = value[0];
    }
    for (let i = 1; i < n; ++i) { //动态规划，状态转移
        for (let j = 0; j <= w; ++j) { // 不选择第i个物品
            if (states[i - 1][j] >= 0) states[i][j] = states[i - 1][j];
        }
        for (let j = 0; j <= w - weight[i]; ++j) { // 选择第i个物品
            if (states[i - 1][j] >= 0) {
                let v = states[i - 1][j] + value[i];
                if (v > states[i][j + weight[i]]) {
                    states[i][j + weight[i]] = v;
                }
            }
        }
    }
    // 找出最大值
    let maxvalue = -1;
    for (let j = 0; j <= w; ++j) {
        if (states[n - 1][j] > maxvalue) maxvalue = states[n - 1][j];
    }
    return maxvalue;
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

console.log(knapsack2([2, 2, 7, 6, 3], [3, 4, 18, 9, 6], 5, 9));
console.log(knapsack([2, 2, 7, 6, 3], [3, 4, 18, 9, 6], 5, 9));