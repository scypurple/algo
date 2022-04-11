let maxW = 0;
const f = (i, cw, items, n, w) => {
    // cw表示当前已经装进去的物品的重量和；i表示考察到哪个物品了；
    // w背包重量；items表示每个物品的重量；n表示物品个数
    // 假设背包可承受重量100，物品个数10，物品重量存储在数组a中，那可以这样调用函数：
    // f(0, 0, a, 10, 100)
    if (cw === w || i === n) {
        maxW = Math.max(cw, maxW);
        return;
    }
    f(i + 1, cw, items, n, w);
    if (cw + items[i] <= w) {
     f(i + 1, cw + items[i], items, n, w);   
    }
}
f(0,0,[11,7,9,3,5],5,10);
console.log(maxW);
