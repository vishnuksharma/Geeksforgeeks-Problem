var assert = require("assert");

function notInBox(arr, startRow, startCol) {
  let st = new Set();

  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      let curr = arr[row + startRow][col + startCol];

      // If already encountered before, return
      // false
      if (st.has(curr))
        return false;

      // If it is not an empty cell,
      // insert value at current cell in set
      if (curr != '.')
        st.add(curr);
    }
  }

  // console.log(st);
  return true;
}

const valid_solution = (board) => {
  // Your code here row check
  for (let i = 0; i < board.length; i++ ){
    let set = new Set(board[i]);
    console.log(set, set.size, board[i].indexOf(0));
    if (set.size !== 9 || board[i].indexOf(0) !== -1) {
      return false;
    }
  }

  // column check here
  for (let i = 0; i< board.length; i++) {
    let tmp = new Set();
    for (let j = 0; j< board.length; j++) {
      // console.log(tmp)
      if (tmp.has(board[j][i]) || board[j][i] === 0) {
        return false;
      } else {
        tmp.add(board[j][i]);
      }
    }
  }

  // box check here
  for (let row = 0; row< board.length; row++) {
    for (let col = 0; col< board.length; col++) {
      const startRow = row - row % 3;
      const startCol = col - col % 3;
      if (!notInBox(board, startRow, startCol)) {
        return false;
      }
    }
  }

  return true;
};

// Challenge 1
// Validate rows
const test_valid = () => {
    assert(valid_solution([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
                           [6, 7, 2, 1, 9, 5, 3, 4, 8],
                           [1, 9, 8, 3, 4, 2, 5, 6, 7],
                           [8, 5, 9, 7, 6, 1, 4, 2, 3],
                           [4, 2, 6, 8, 5, 3, 7, 9, 1],
                           [7, 1, 3, 9, 2, 4, 8, 5, 6],
                           [9, 6, 1, 5, 3, 7, 2, 8, 4],
                           [2, 8, 7, 4, 1, 9, 6, 3, 5],
                           [3, 4, 5, 2, 8, 6, 1, 7, 9]]) === true);
  console.log('test_valid passed')
}

const test_invalid_rows = () => {
    assert(valid_solution([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
                           [6, 7, 2, 1, 9, 5, 3, 4, 9], // duplicated 9
                           [1, 9, 8, 3, 4, 2, 5, 6, 7],
                           [8, 5, 9, 7, 6, 1, 4, 2, 3],
                           [4, 2, 6, 8, 5, 3, 7, 9, 1],
                           [7, 1, 3, 9, 2, 4, 8, 5, 8],
                           [9, 6, 1, 5, 3, 7, 2, 8, 4],
                           [2, 8, 7, 4, 1, 9, 6, 3, 5],
                           [3, 4, 5, 2, 8, 6, 1, 7, 6]]) === false);
  
    assert(valid_solution([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
                           [6, 7, 2, 1, 9, 0, 3, 4, 8], // invalid number
                           [1, 9, 8, 3, 4, 2, 5, 6, 7],
                           [8, 5, 9, 7, 6, 1, 0, 2, 3],
                           [4, 2, 6, 8, 5, 3, 7, 9, 1],
                           [7, 1, 3, 9, 2, 4, 8, 5, 6],
                           [9, 6, 1, 5, 3, 7, 2, 8, 4],
                           [2, 8, 7, 4, 1, 9, 6, 3, 5],
                           [3, 4, 5, 2, 8, 6, 1, 7, 9]]) === false);
  console.log('test_invalid_rows passed')
}

// Challenge 2
// Validate Columns
const test_invalid_columns = () => {
  assert(valid_solution([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
                         [6, 7, 2, 1, 9, 5, 3, 4, 8],
                         [1, 9, 8, 3, 4, 2, 5, 6, 7],
                         [8, 5, 9, 7, 6, 1, 4, 2, 3],
                         [4, 2, 6, 8, 5, 3, 7, 9, 1],
                         [7, 1, 3, 9, 2, 4, 8, 5, 6],
                         [9, 6, 1, 5, 3, 7, 2, 8, 4],
                         [8, 2, 7, 4, 1, 9, 6, 3, 5],
                         [3, 4, 5, 2, 8, 6, 1, 7, 9]]) === false);
console.log('test_invalid_columns passed')
}

// Challenge 3
// Validate Box
const test_invalid_box = () => {
  assert(valid_solution([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
                         [6, 7, 2, 1, 9, 5, 3, 4, 8],
                         [1, 9, 8, 3, 4, 2, 5, 6, 7],
                         [8, 5, 9, 7, 6, 1, 4, 2, 3],
                         [4, 2, 6, 8, 5, 3, 7, 9, 1],
                         [7, 1, 3, 9, 2, 4, 8, 5, 6],
                         [9, 6, 1, 5, 3, 7, 2, 8, 4],
                         [8, 2, 7, 4, 1, 9, 6, 3, 5],
/** 9 invalid. */        [3, 4, 9, 2, 8, 6, 1, 7, 9]]) === false);
console.log('test_invalid_box passed')
}
  
test_invalid_columns();

test_valid();
test_invalid_rows();
test_invalid_box();