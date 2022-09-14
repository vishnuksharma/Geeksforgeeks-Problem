

// // # What's the value of num?
// const num = parseInt('7*6', 10);
//     A: 42
//     B: "42"
//     C: 7
//     D: NaN


// // Answer : 7
// // Only the first numbers in the string is returned. Based on the radix (the second argument is for base 10)


const twoSumLessThanK = (A, K) => {
    A = A.sort((a, b) => { if (a < b) return -1; else if (a > b) return 1; else 0});
    console.log(A)
    let i = 0;
    let j = A.length - 1;
    let ans = -1;
    while (i < j) {
        if (A[i] + A[j] >= K) {
            j--;
        } else {
            ans = Math.max(ans, A[i] + A[j]);
            i++;
        }
    }
    return ans;
}

// console.log(twoSumLessThanK([34,23,1,24,75,33,54,8], 60))



// arr=["one", "one", "two", "two", "three"] ===> "three"
// arr=["one", "one", "two", "two", "three", "three", "three"] ===> "three"



const countOddNumber = (A) => {
    const count = {};
    let oddVal = '';
    for (let i = 0; i < A.length; i++) {
        if (count[A[i]]) {
            count[A[i]] = count[A[i]] + 1;
        } else {
            count[A[i]] = 1;
        }
    }
   
    for (k in count) {
        if (count[k]%2 != 0){
            oddVal = k;
        }
    }

    return oddVal;

}

// console.log(countOddNumber(["one", "one", "two", "two", "two", "three", "three"]))



// arr=[2,1,7,11,15] T=9 ===> [0,2] because 2+7=9
// write a function to find the indices of the two numbers which when added equal to T
// arr[i] is unique

// arr=[2,5,7,1] T=9

// arr=[2,3,1] T=4 ==> [1,2]
// arr=[5,2,3,1] T=4 ==> [2,3]

const addingTwoNum = (A, T) => {
    const sum = null
    const indexs = [];
    for (let i = 0; i < A.length; i++) {
        
        for (let j = i+1; j < A.length; j++){
            if (A[i] + A[j] === T) {
               indexs.push(i);
               indexs.push(j);
               break;
            }
        }
    }
    
    
   return indexs;
    
}

console.log(addingTwoNum([5,2,3,1], 4))



// Animation code
const AnimationRight = (domEle, ms, distancePx) => {
    var pos = 0;
    domEle.style.position = 'absolute';
    const time = setInterval(frame, ms/60);
    function frame() {
        if (pos === distancePx){
            clearInterval(time);
         } else {
             pos++;
             console.log(pos);
             domEle.style.left = pos+'px';
         }
    }
}

AnimationRight({style: {left: 0}}, 1000, 200);


/// Travel problem Ticketing system.
// TripTimeTracker ttt;

// ttt.swipeIn( "GCT",  1, 1000500);
// ttt.swipeOut("14th", 1, 1000800); // --> 300

// ttt.swipeIn( "GCT",  2, 1001000);
// ttt.swipeOut("14th", 2, 1001500); // --> 500

// ttt.getAverageTripTime("GCT", "14th"); // 400

class TripTimeTracker {
    trackerObject = new Map();
    avgTimeObj = {};
    swipeIn(stationName, id, time) {
        trackerObject.set(id, {stationName, id, time});
    }
    
    swipeOut(endStation, id, endTIme) {
        const currentData = trackerObject.get(id);
        if (!avgTimeObj[`${currentData.stationName}-${endStation}`]) {
            avgTimeObj[`${currentData.stationName}-${endStation}`] = `${endTIme - currentData.time}-1`;
        } else {
            const prevTime = avgTimeObj[`${currentData.stationName}-${endStation}`].split('-')[0];
            const count  = avgTimeObj[`${currentData.stationName}-${endStation}`].split('-')[1] + 1;
            avgTimeObj[`${currentData.stationName}-${endStation}`] = `${endTIme - currentData.time}+${prevTime}-${count}`;
        }
        
        
        trackerObject.remove(id);
        
    }
    
    getAverageTripTime (startStation, endStation) {
       const obj = avgTimeObj[`${startStation}-${endStation}`].split('-');
        return +obj[0]/+obj[1];
    }
    
    
}

const isStringPalindrome = (str) => {
    str = str.replace(/\s/g, '');
     const revStr = str.split('').reverse().join('');
  
    if (str === revStr) {
      return true
    }
    return false;
  }
  
  console.log(isStringPalindrome('certificate hero'));
  console.log(isStringPalindrome('racecar'));
  console.log(isStringPalindrome('taco cat'));
  console.log(isStringPalindrome('no lemon, no melon'));
  console.log(isStringPalindrome('jake'));
  
  const revArray = (arr) => {
    // arr.reverse();
    const revArray = [];
    const l = arr.length;
    let j = 0
    let a = 0;
    let b = 0;
  
    for (i = (l-1); i>=0 && (j + 1)<= l/2; i--) {
      a = arr[i];
      b = arr[j];
      arr[j] = a;
      arr[i] = b;
      j++
    }
  
    return arr;
  }
  
  console.log(revArray([1,2,3,4]));  

/**
 * ============================================================================
 * @param {*} char a-z, A-z
 * @returns  boolean
 */
  const isChar = (char) => {
    return char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z';
   }
   /**
    * 
    * @param {*} str "dsd!df$@%dfndf%^#cfgd"
    * @returns 
    */
   const reverseStrwithoutSpecialChar = (str)=> {
     const org = str.split("");
     let l = 0, r=org.length-1;
     while (l<r) {
       if (!isChar(org[l])) {
         l++;
       } else if (!isChar(org[r])) {
         r--;
       } else {
         const tmp = org[l];
          org[l] = org[r];
          org[r] = tmp;
         l++;
         r--;
       }
     }
     return org.join("");
   }
   console.log(reverseStrwithoutSpecialChar('dd#f!f$%gdfe'));
   
//    ================================================================


// 

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// Example 2
// Input: n = 1
// Output: ["()"]

/**
 * @param {number} n
 * @return {string[]}
 */
 function generateParenthesis(n) {
    const result = [];
    const addPara = (current, open, close) => {
      if (current.length === n*2) {
        result.push(current);
        return;
      }
  
      if (open < n) {
        addPara(`${current}(`, open + 1, close);
      }
      if (close < open) {
        addPara(`${current})`, open, close + 1);
      }
    }
  
    
    addPara("", 0, 0);
  
    return result;
  }
  //console.log(generateParenthesis(1))
  console.log(generateParenthesis(2))