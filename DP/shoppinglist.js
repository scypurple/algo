const shoppingList = (v, p, q, m) => {
    const n = v.length;
    const dp = new Array(n).fill(0).map(_ => new Array(m+1).fill(0));
    const isq = new Array(n).fill(false);
    for (let i = 0; i < n; i++) {
        if (!q[i]) isq[i] = true;
    }
    dp[0][0] = 0;
    if (v[0] <= m && isq[0]) {
        dp[0][v[0]] = v[0];
    }
    console.log(dp);
    for (i = 1; i < n; i++) {

    }
}

let v = [20,20,10,10,10];
let p = [3,3,3,2,1];
let q = [0,5,0,0,0];
let m = 50;
console.log(shoppingList(v,p,q,m));