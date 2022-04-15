const minDistBT = array => {
    let minDist = Infinity;
    let n = array.length-1;
    //let memo = new Array(n+1).fill(false).map(_ => new Array(n+1).fill(false));
    const f = (i, j, dist, n) => {
        if (i === n && j === n) {
            if (dist < minDist) minDist = dist;
            return;
        }
        //if (memo[i][j]) return;
        //memo[i][j] = true;
        if (i < n) f(i+1, j, dist+array[i][j], n);
        if (j < n) f(i, j+1, dist+array[i][j], n);
    }
    f(0,0,0,n);
    
    return minDist+array[n][n];
}

const array = [
    [1,3,5,9],
    [2,1,3,4],
    [5,2,6,7],
    [6,8,4,3]
]
console.log(minDistBT(array));