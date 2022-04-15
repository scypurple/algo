const minDistBTHasMemo = matrix => {
    const n = matrix.length;
    const mem = new Array(n).fill(0).map(_ => new Array(n).fill(0));
    const minDist = (i, j) => { // 调用minDist(n-1, n-1);
        if (i == 0 && j == 0) return matrix[0][0];
        if (mem[i][j] > 0) return mem[i][j];
        let minLeft = Number.MAX_SAFE_INTEGER;
        if (j - 1 >= 0) {
            minLeft = minDist(i, j - 1);
        }
        let minUp = Number.MAX_SAFE_INTEGER;
        if (i - 1 >= 0) {
            minUp = minDist(i - 1, j);
        }

        let currMinDist = matrix[i][j] + Math.min(minLeft, minUp);
        mem[i][j] = currMinDist;
        return currMinDist;
    }
    return minDist(n-1,n-1);
}



const minDistBT = array => {
    let minDist = Infinity;
    let n = array.length - 1;
    //let memo = new Array(n + 1).fill(false).map(_ => new Array(n + 1).fill(false));
    const f = (i, j, dist, n) => {
        if (i === n && j === n) {
            if (dist < minDist) minDist = dist;
            return;
        }
        //if (memo[i][j]) return;
        //memo[i][j] = true;
        if (i < n) f(i + 1, j, dist + array[i][j], n);
        if (j < n) f(i, j + 1, dist + array[i][j], n);
    }
    f(0, 0, 0, n);

    return minDist + array[n][n];
}

const matrix = [
    [1, 3, 5, 9],
    [2, 1, 3, 4],
    [5, 2, 6, 7],
    [6, 8, 4, 3]
]

console.log(minDistBTHasMemo(matrix));
console.log(minDistBT(matrix));