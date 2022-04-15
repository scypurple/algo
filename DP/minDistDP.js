const minDistDP = metrix => {
    const n = metrix.length;
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < n; j++) {
            metrix[i][j] += Math.min(metrix[i][j-1], metrix[i-1][j])
        }
    }
    return metrix[n-1][n-1] + metrix[0][0];
}
const array = [
    [1,3,5,9],
    [2,1,3,4],
    [5,2,6,7],
    [6,8,4,3]
]
console.log(minDistDP(array));