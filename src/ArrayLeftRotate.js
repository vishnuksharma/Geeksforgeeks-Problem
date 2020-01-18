// A left rotation operation on an array shifts each of the array's elements  unit to the left. For example, if  left rotations are performed on array , then the array would become .

// Given an array  of  integers and a number, , perform  left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

// Function Description

// Complete the function rotLeft in the editor below. It should return the resulting array of integers.

// rotLeft has the following parameter(s):

// An array of integers .
// An integer , the number of rotations.

// When we perform  left rotations, the array undergoes the following sequence of changes:
// Sample Input
// 5 4
// 1 2 3 4 5
// Sample Output
// 5 1 2 3 4

// [1,2,3,4,5] => [2,3,4,5,1] => [3,4,5,1,2] => [4,5,1,2,3] => [5,1,2,3,4]

function rotLeft(a, d) {
    const len = a.length;
    const rotateTime = d>len ? len%d : d;
    let temp = 0;
    for (let i = 0; i<d; i++){
        // for (let i = 0; i<rotateTime; i++){
        a.push(a.shift())
        // a.unshift(a.pop())
    // console.log('Array', a);
    
    }
return a;
}

const leftRoateArray = (a, d) => {
    const len = a.length;
    let ar0;
    for (let i = 0; i<d; i++){
        ar0 = a[0];
        for (let index = 1; index < a.length; index++) {
            a[index-1] = a[index];
        console.log(`Inner Array: index: ${index}, ${a}`);

        }
        a[len-1] = ar0;
        console.log(`outer Array: i: ${i}, ${a}`);

    }

    return a;
}

const a = [1,2,3,4,5];
const d =4;
const rotLeftRes = leftRoateArray(a, d);
console.log('rotLeftRes: ', rotLeftRes);
const b = [41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51];
const d1 = 10;
const rotLeftRes1 = rotLeft(b, d1);
// console.log('rotLeftRes1: ', rotLeftRes1);