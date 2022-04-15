/**
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = function(triangle) {
    let n = triangle.length;

    for (let i = n-1; i >= 1; i--) {
        for (let j = 0; j < triangle[i].length-1; j++) {
            triangle[i-1][j] += Math.min(triangle[i][j], triangle[i][j+1]);
        }    
    }

    return triangle[0][0];
};

let triangle = [[2],[3,4],[6,5,7],[4,1,8,3]];
minimumTotal(triangle);
console.log(triangle);