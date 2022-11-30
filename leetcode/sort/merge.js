
/**
 * @param  {} q 
 * 1. 确定分界点 m = (l + r) >> 1
 * 2. 递归排序 L, R 
 * 3. 归并
 */
const mergeSort = (q) => {
  const temp = [];
  const msort = (l, r) => {
    if (l >= r) return ;
    const m = l + r >> 1;
    msort(l, m);
    msort(m+1, r);
    let k = 0;
    let i = l;
    let j = m + 1;
    while (i <= m && j <= r) {
      if (q[i] <= q[j]) temp[k++] = q[i++];
      else temp[k++] = q[j++];
    }
    while (i <= m) temp[k++] = q[i++];
    while (j <= r) temp[k++] = q[j++];
    for (let i = l, j = 0; i <= r; i++, j++) q[i] = temp[j];
  }
  msort(0, q.length - 1);
}

const q = [1,3,5,7,9,2,4,5,6,7];
mergeSort(q);
console.log(q);