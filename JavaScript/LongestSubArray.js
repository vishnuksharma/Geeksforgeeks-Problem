// Problem Statement
// A subarray of array a is defined as a contiguous block of a’s elements having a length that is less than or equal to the length of the array. For example, the subarrays of array a = [1, 2, 3] are [1], [2], [3], [1, 2], [2, 3], and [1, 2, 3]. Given an integer, k = 3, the subarrays having elements that sum to a number ≤ k are [1], [2], and [1, 2]. The longest of these subarrays is [1, 2], which has a length of 2. Given an array, a, determine its longest subarray that sums to less than or equal to a given value k.

// Function Description
// Complete the function maxLength in the editor below. The function must return an integer that represents the length of the longest subarray of a that sums to a number ≤ k.

// maxLength has the following parameter(s):

// a[a[0],…a[n-1]]: an array of integers
// k: an integer

// Constraints
// 1 ≤ n ≤ 105
// 1 ≤ a[i] ≤ 103
// 1 ≤ k ≤ 109

// Sample Input 0      Sample Output 0
// 3                          2
// 1
// 2
// 3
// 4


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

const array1 = [1,2,3];
const k1 = 4;
const maxLen1 = maxLength(array1, k1);
console.log('maxLen1: ', maxLen1);

const array2 = [3,1,2,1];
const k2 = 4;
const maxLen2 = maxLength(array2, k2);
console.log('maxLen2: ', maxLen2);
