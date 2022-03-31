const quickSort = arr => {
    if (arr.length < 2) return arr;
    let greater = [];
    let less = [];
    const pivot = arr.splice(Math.floor(arr.length / 2), 1)[0];
    arr.map(elem => (elem > pivot)? greater.push(elem): less.push(elem));
    return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log(quickSort([3,1,5,6,32,1,6]));