const merge = (a, b) => {
    let result = [];
    while (a.length && b.length) {
        if (a[0] > b[0]) result.push(b.shift());
        else result.push(a.shift());
    }
    return [...result, ...a, ...b];
}
let a = [1,3,5,6,7];
let b = [2,4,8,9];
console.log(merge(a,b));//O(n)
