const knapsack = (weight, n, w) => {
    // weight:物品重量，n:物品个数，w:背包可承载重量
    let states = new Array(n).fill(0).map(_ => new Array(w).fill(0));
    states[0][0] = true;  // 第一行的数据要特殊处理，可以利用哨兵优化
    if (weight[0] <= w) {
        states[0][weight[0]] = true;
    }
    for (let i = 1; i < n; ++i) { // 动态规划状态转移
        for (let j = 0; j <= w; ++j) {// 不把第i个物品放入背包
            if (states[i - 1][j] == true) states[i][j] = states[i - 1][j];
        }
        for (let j = 0; j <= w - weight[i]; ++j) {//把第i个物品放入背包
            if (states[i - 1][j] == true) states[i][j + weight[i]] = true;
        }
    }
    for (let i = w; i >= 0; --i) { // 输出结果
        if (states[n - 1][i] == true) return i;
    }
    return 0;
}

console.log(knapsack([2, 2, 4, 6, 3], 5, 9));