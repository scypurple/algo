function test(arr1, arr2) {
    if (!arr1.length) return;
    arr2.push(arr1[0]);
    test(arr1, arr2);
    
}

let arr1 = [1,2,3,4,5];
let arr2 = [];
test(arr1, arr2);
console.log(arr2);