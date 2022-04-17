const knapsack = (items, v, n, w) => {
    let states = new Array(n).fill(-1).map(_ => new Array(w + 1).fill(-1));
    states[0][0] = 0;
    if (items[0] <= w) {
        states[0][items[0]] = v[0];
    }
    for (let i = 1; i < n; i++) {
        for (let j = 0; j <= w; j++) {
            if (states[i - 1][j] >= 0) states[i][j] = states[i - 1][j];
        }
        for (let j = 0; j <= w - items[i]; j++) {
            const val = states[i - 1][j] + v[i];
            if (val > states[i][j + items[i]]) states[i][j + items[i]] = val;
        }
    }
    let max = -1;
    for (let j = 0; j <= w; j++) {
        if (states[n - 1][j] > max) max = states[n - 1][j];
    }
    return max;

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
    if (items[0] <= w) {
        dp[items[0]] = v[0];
    }
    for (let i = 1; i < n; i++) {
        for (let j = w - items[i]; j >= 0; j--) {
            dp[j + items[i]] = dp[j] + v[i];
        }
    }
    return dp[w];
}

console.log(knapsack([2, 2, 7, 6, 3], [3, 4, 18, 9, 6], 5, 9));
console.log(knapsack([2, 2, 7, 6, 3], [3, 4, 18, 9, 6], 5, 9));