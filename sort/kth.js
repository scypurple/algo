function kth(q,n,k) {
  const qsort = (l, r, k) => {
    if (l >= r) return q[r];
    const p = q[Math.floor(Math.random()*(r-l+1)+l)];
    let i = l - 1;
    let j = r + 1;
    while (i < j) {
      do i++; while (q[i] < p);
      do j--; while (q[j] > p);
      if (i < j) [q[i], q[j]] = [q[j], q[i]];
    }
    const sl = j - l + 1;
    if (k <= sl) return qsort(l, j, k);
    return qsort(j+1, r, k-sl);
  }
  return qsort(0, n-1, k);
}

const q = [2,4,1,5,3];
const n = q.length;
const k = 3;
console.log(kth(q,n,k));
