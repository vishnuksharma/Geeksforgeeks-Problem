function maxLength(a, k) {
  let maxLen = -1;
  let sum = 0;
  let start = 0;
  let end = 0;

  for(let i = 0; i < a.length; i++){
      sum = sum + a[i];
      end = i;
      while(sum > k) {
          sum -= a[start];
          start++;
      }
      maxLen = Math.max(maxLen, end - start+1);
  }

  return maxLen;
}