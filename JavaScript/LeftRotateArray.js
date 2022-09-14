const LeftRotate = (a, k) => {
  const rotattion = k > a.length ? k % a.length : k;
  for(let i = rotattion; i > 0; i--) {
    a.push(a.shift())
  }
  return a;
}

console.log(LeftRotate([1,2,3,4,5], 6))

/**
 * 
 * @param {Array} arr 
 * @param {Array.length} n 
 */
const leftRotateFunc = (arr, n) => {
  const tmp = arr[0];
  for (let i = 0; i < n; i++) {
    arr[i] = arr[i+1];
  }
  arr[n-1] = tmp;
  return arr;
}

/**
 * 
 * @param {Array} arr 
 * @param {Array number of rotation} d 
 * @param {Array.length} n 
 */
const rotateArray = (arr, d, n) => {
  for (let i = 0; i < d; i++) {
    leftRotateFunc(arr, n);
  }
  return arr;
}

const arr = [1,2,3,4,5,6,7,8];
const d = 2;
console.log(rotateArray(arr, d, arr.length))


/**
 * Calculate GCD => Greatest common divisor
 */
const calculateGCD = (a, b) => {
  if (b === 0) return a;
  return calculateGCD(b, a%b);
}
console.log(calculateGCD(d, arr.length))
