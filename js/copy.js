/**
 * @param  {} obj
 */
const deepClone = (obj) => {
  if (typeof obj !== 'object' || obj === null) return obj;
  const newObj = obj instanceof Array ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key]);
    }
  }
}
/**
 * @param  {} obj
 * @param  {} hash=newWeakMap(
 */
const deepCopy = (obj, hash = new WeakMap()) => {
  if (obj === null) return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  if (typeof obj !== 'object') return obj;
  if (hash.has(obj)) return hash.get(obj);
  let cloneObj = new obj.constructor();
  hash.set(obj, cloneObj);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepCopy(obj[key], hash);
    }
  }
  return cloneObj;
}

// shallow copy
const newObj = Object.assign({}, obj);