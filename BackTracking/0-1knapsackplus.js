const knapsack = (items, value, n, w) => {
    const f = (i, cw, cv) => {
        if (cw === w || i === n) {
            if (cv > maxV) maxV = cv;
            return;
        }
        f(i + 1, cw, cv);

        if (cw + items[i] <= w) {
            f(i + 1, cw + items[i], cv + value[i]);
        }
    }
    let maxV = 0;
    f(0, 0, 0);
    return maxV;
}

let items = [2, 2, 4, 6, 3];
let value = [3, 4, 8, 9, 6];
let n = 5;
let w = 9;
console.log(knapsack(items, value, n, w));
