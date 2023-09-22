const data = [
    [1,1,1,0,0],
    [1,1,0,0,0],
    [0,0,1,0,0],
    [0,0,0,1,1]
    ]
    
    
    const findIslands = (matrix) => {
    let coundIsland = 0;
        for (let row=0; row < matrix.length; row++) {
          for (let col=0; col < matrix[row].length; col++) {
                if (matrix[row][col] !== 0) {
            coundIsland += 1;
          }
        }
      }
      
      return coundIsland;
    }
    
    /* const findIslands = (matrix) => {
    let coundIsland = 0;
      for (let row=0; row < matrix.length; row++) {
        for (let col=0; col < matrix[row].length; col++) {
          if (matrix[row][col] !== 0 && matrix[row][col+1] === 0 && matrix[row+1][col] === 0) {
            coundIsland += 1;
          }
        }
      }
      
      return coundIsland;
    } */
    
    console.log(findIslands(data))