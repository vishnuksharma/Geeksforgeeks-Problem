// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(U, L, C) {
    const len = C.length;
    const row1 = new Array(len).fill(0);
    const row2 = new Array(len).fill(0);
    let count = 0;

    for(let i = 0; i< len; i++ ) {
        if (C[i] === 2) {
            row1[i] = 1;
            row2[i] = 1;
            U--;
            L--;
        } else if (C[i] === 1){
            count++;
        }
    }
    
    if (U < 0 || L < 0 || (count !== U+L)) {
        return "IMPOSSIBLE";
    }

    let index = 0
    while(U + L > 0) {
        while (U > 0) {
            if (C[index] === 1) {
                row1[index] = 1;
                U--;
            }
            index++;
        }
        
        while(L > 0) {
            if (C[index] === 1) {
                row2[index] = 1;
                L--;
            }
            index++;
        }
    }
    
    return row1.join("") + ',' +row2.join("");
}



/*
Write a function that returns whether the given string, ignoring punctuation
and capitalization, is a palindrome. 
An example of palindrome is:
   "Race car!"     -  returns TRUE
   "A man, a plan, a canal, Panama!"  - returns TRUE

A palindrome is text that is the same backwards and forwards, again, ignoring punctuation and capitalization.
*/

// "34534**" or "a" or ""   "$$$$$"

// racecar! => [r, a c ... !] => 
const ispalindrom = (str) => {
    const isChar = (c) => {
     return c >= 'a' && c <= 'z';
    }
    let originStr = str.toLowerCase().replace(/s/g, '');
    originStrArr = [];
    for (let i = 0; i < originStr.length; i++) {
      if(isChar(originStr[i])) {
        originStrArr.push(originStr[i])
      }
    }
  
    originStr = originStrArr.join(''); // [r, a, c, e, c, a, r]
    if (!originStr) return false;
    const revStr = originStrArr.reverse().join('');
    return originStr === revStr;
  }
  
  
//   Complexity = O(n)2
  
  
  
  
  
  // Implement the power function that computes a to the power of b using basic arithmetic operations (+, -, *, /).
  
  // example: a = 2, b = 4, a^b = 2 * 2 * 2 * 2 = 16
  
  const computePower = (a, b) => {
    let power = 1;
    for (let i = 1; i <= b; i++) {
      power *= a;
    }
  
    return power;
  }
  
//   Complexity = O(n)



/***
 * 
 * Merge sorted array
 * A = [1, 2, 3, _, _, _, _]
 * B = [2, 4, 6, 100]
 * Expected output:
 * A = [1, 2, 2, 3, 4, 6, 100]
 * 
 */

 const mergeArr = (a1, a2) => {
    const sortedAr = [];
    const len1 = a1.length; // M
    const len2 = a2.length; // N
    let i = 0, j=0;
    while(i < len1 && j < len2) {
      if (a1[i] <= a2[j]) {
        sortedAr.push(a1[i]);
        i++;
      } else if (a2[j] < a1[i]) {
        sortedAr.push(a2[j]);
        j++;
      }
    }
  
    while (i < len1) {
      sortedAr.push(a1[i]);
        i++;
    }
  
    while (j < len2) {
      sortedAr.push(a2[i]);
      j++;
    }
  
    return sortedAr;
  }
  
  T => O(M+N)
  
  
  /**
  CD Command
  | cwd      | cd (arg)       | output
  | -------- | -------------- | ------
  | /        | foo            | /foo
  | /        | foo/../bar     | /bar
  | /baz     | /bar           | /bar
  | /foo/bar | ../../../../.. | /
  | /x/y     | ../p/../q      | /x/q
  | /x/y     | /p/./q         | /p/q
  */
  
  
  const cmd = (currPath = "/", arg) => {
    const cur = currPath.split("/");
    ar = arg.split("/");
    if (!arr.includes('/')) {
      return `${cur}/${arg}`;
    } else if (arr.includes('/')) {
      return `${cur}/${arg}`;
    }
  }
  
  /**
   * 
   * 
  input:
  {[1,2], [3,9]}
  {[4,6], [8. 10], [11,12]}
  
  
  {[1,2], [4,10], [11,12]}
  
  0   1   2   3   4   5   6   7   8   9  10  11  12
      [---]   [-----------------------]
                  [-------]       [------]   [----]
      [---]   [--------------------------]   [----]
  */
  
  const j = [
    [1,2]
    [1,2]
    [1,2]
  ]
  
  
  const findoutInterval = (arr) => {
      let min = 0;
      let max = 0;
      let j = 0
      for (let i=0; i < arr.length i++) {
        if (arr[j][0] < arr[i+1][0] && arr[j][1] < arr[i+1][1]) {
  
          if (arr[j][0] < arr[i+1][0]) {
            min = arr[j][0];
          } else {
            min = arr[i+1][0];
          }
  
          if (arr[j][1] < arr[i+1][1]) {
            max = arr[j][1];
          } else {
            max = arr[i+1][1];
          }
  
          let tm = arr[i][0] = min;
          let tm = arr[i][1] = max;
          arrTmp.push(tm);
          j++;
        }
      }
  
      return arrTmp;
  }
  
//   T = O(N) + 