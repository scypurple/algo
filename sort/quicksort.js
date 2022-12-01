const quickSort = arr => {
    if (arr.length < 2) return arr;
    let greater = [];
    let less = [];
    const pivot = arr.splice(Math.floor(arr.length / 2), 1)[0];
    arr.map(elem => (elem > pivot)? greater.push(elem): less.push(elem));
    return [...quickSort(less), pivot, ...quickSort(greater)];
}

const qsort = (q, l, r) => {
  if (l >= r) return;
  const p = q[Math.floor(Math.random()*(r-l)+l)];
  let i = l - 1;
  let j = r + 1;
  while (i < j) {
    do i++; while (q[i] < p);
    do j--; while (q[j] > p);
    if (i < j) [q[i], q[j]] = [q[j], q[i]];
  }
  qsort(q, l, j);
  qsort(q, j+1, r);
}
const a = [0,2,2,2,2,2,5];
qsort(a, 0, 6)
console.log(a);
