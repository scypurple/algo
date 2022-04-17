var canPartition = function(nums) {
    const n = nums.length;
    let sum = nums.reduce((a,b) => a+b);
    if (sum % 2) return false;
    else sum = sum >> 1;
    const dp = new Array(sum+1).fill(false);
    dp[0] = true;
    for (let i = 0; i < n; i++) {
        for (let j = sum; j >=nums[i]; j--) {
            dp[j] = dp[j-nums[i]] || dp[j];
        }
    }
    console.log(dp);
    return dp[sum];
};
console.log(canPartition([1,5,11,7]));