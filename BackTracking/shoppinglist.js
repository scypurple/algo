// 未解决
const shoppingList = (v, p, q, m) => {
    const n = v.length;
    const f = (i, cv, cp) => {
        if (cv === v || i === n) {
            if (cp > maxP) {
                maxP = cp;
            }
            return;
        }
        f(i+1, cv, cp);
        if (cv + v[i] <= m) {
            if (q[i] === 0 || state[q[i]-1]) {
               
                f(i+1, cv + v[i], cp + v[i]*p[i]);
                state[i] += 1;
              //  state[i] = false;
            }
        }
       // state[i] = false;
    }
    let maxP = 0;
    let state = new Array(n).fill(0);
    f(0,0,0);
    console.log(state);
    return maxP;
}

let v = [20,20,10,10,10];
let p = [3,3,3,2,1];
let q = [5,5,0,0,0];
let money = 50;
console.log(shoppingList(v,p,q,money));