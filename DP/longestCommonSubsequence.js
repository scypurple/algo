/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
 var longestCommonSubsequence = function(text1, text2) {
    const f = (i,j,n) => {
        if (i === text1.length || j === text2.length) {
            if (max < n) max = n;
            return;
        }
       // if (memo[i][j]) return ;
        
        if (text1[i] === text2[j]) f(i+1, j+1, n+1);
        else {
            f(i+1, j, n);
            f(i, j+1, n);
        }
    }
    let max = 0;
    //let memo = new Array(text1.length).fill(0).map(_ => new Array(text2.length).fill(0));
    f(0,0,0);
    return max;
};
let a = "mhunuzqrkzsnidwbun"
let b = "szulspmhwpazoxijwbq"
console.log(longestCommonSubsequence(a,b));