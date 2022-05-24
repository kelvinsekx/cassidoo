let grid = [
  [1,0,0],
  [0,0,2]
]

function startToEnd(matrix) {
  const starts = getStartingPoint(matrix[0], matrix[1])
  if(typeof(starts) == 'string'){
    return starts;
  }
  const m1 = starts[1],
        m2 = starts[0], 
        matrixInGridIsLast = grid.length-1;
  
  function recursiveMoveOverGrid (
   grid = matrix[m1], 
   presentmatrix=m1, 
   results = [],
   start = m2
   ){
    const lastPosition = matrix[m1].length - 1,
          lastMatrix = matrix.length - 1,
          nextMatrix = presentmatrix + 1;
     
       results = moveRight(start, grid, results)
     	for(let i; i < g.length -1; i++){
        
      }
     
     
    if(presentmatrix == lastMatrix){
      return results;
    }
    results.push('down')
    return recursiveMoveOverGrid(matrix[nextMatrix],nextMatrix, results, 0)
  }
  
  return recursiveMoveOverGrid()
}


function getStartingPoint(matrix1, matrix2){
   if(matrix1.indexOf(1) >= 0){
     return [matrix1.indexOf(1), 0]
   }
  if(matrix2.indexOf(1) >= 0){
    return [matrix2.indexOf(1), 1] 
   }
  return "no way"
}

function moveRight (p1, p2, movements = []) {
    for(let i = p1; i < p2.length - 1; i++){
			if(p2[i] == 2){
        return movements;
      }
      movements.push("right")
    }
    return movements;
}

function moveDown (p1, p2, movements = []) {
			if(p2[i] == 2){
         movements.push("down")
        return movements;
      }
    
    return moveRight(p1, p2, movements);
	}

startToEnd(grid)
