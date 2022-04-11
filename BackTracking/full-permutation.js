/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    const res = [];
    const len = nums.length;
    const dfs = (depth, path, visited) => {
        if (depth === len) return res.push([...path]);
        for (let i = 0; i < len; i++) {
            if (visited[i]) continue;
            path.push(nums[i]);
           // console.log(path);
            visited[i] = true;
            dfs(depth + 1, path, visited);
            visited[i] = false;
            path.pop();
        }
    }
    const visited = new Array(len).fill(false);
    dfs(0, [], visited);
    return res;
};

console.log(permute([1,2,3]));