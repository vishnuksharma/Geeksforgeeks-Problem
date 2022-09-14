/*
Given an array A = [1, 4, 7, 3, 9, 0, 10, 13, 11, 2, 5, 14]
(of unique elements )
Find all triplets that add up to X
Eg:- If x = 12
Solution set would be 
[[1, 4, 7], [1, 2, 9], [1, 0, 11], [4, 3, 5], [7, 3, 2] . . . ]
*/

function A(arr, x) {
    let newArray = [];
    for (i = 0; i< arr.length; i++){
        let var1 = arr[i] // 1
       for (j = 1; j< arr.length; j++){
           let var2 = arr[j]; // 4
            for (k = 2; k< arr.length; k++){
            
                if (var1 + var2 + arr[k] == x){
                  newArray.push([var1, var2, arr[k]])  
                }
            }
        } 
    }
    return newArray;
}

// console.log(A([1, 4, 7, 3, 9, 0, 10, 13, 11, 2, 5, 14], 12));



function findAllTriplets(array, x) {
    var result = [];
    for(let i=0; i<array.length; i++) {
        for(let j=i+1; j<array.length; j++) {
            let lastOne = findLastElement(array, array[i], array[j], x);
            if(lastOne) {
                result.push([array[i], array[j], lastOne]);
            }
        }
    }
    
    // console.log('result array', result);
    return result;
}

function findLastElement(array, first, second, x) {
    const lastValue = x - first - second;
    // if (lastValue < 0) return;
    if(lastValue !== first && lastValue !== second) {
        console.log(array, array.indexOf(lastValue), lastValue, 'lastValue')
        if(array.indexOf(lastValue)) {
            return lastValue;
        }
    }
    return -1;
}

console.log(findAllTriplets([1, 4, 7, 3, 9, 0, 10, 13, 11, 2, 5, 14], 12));
