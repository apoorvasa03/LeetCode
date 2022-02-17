/**time: 0(m*n) space: o(1) */
var setZeroes = function(matrix) {
    let firstRow = false
    let firstColumn = false

    // mark the first coloum and row to zero if any item in a row/coloum is zero
    for(let row =0; row < matrix.length; row++){
        for(let column = 0; column < matrix[0].length; column++){
            if(matrix[row][column] === 0){
                if(row === 0) firstRow = true
                if(column === 0) firstColumn = true
                matrix[row][0] = 0
                matrix[0][column] = 0
            }
        }
    }

    // replace 0 in matrix expected first column and row
    for(let row =1; row < matrix.length; row++){
        for(let column = 1; column < matrix[0].length; column++){
            if(matrix[0][column] === 0|| matrix[row][0] === 0){
                matrix[row][column] = 0
            }
        }
    }

    // if first row is zero, mark it
    if(firstRow){
        matrix[0].fill(0)
    }

    // if first column is zero, mark it
    if(firstColumn){
        for(let i =0; i< matrix.length; i++){
                matrix[i][0] = 0
        }
    }

    return matrix
};

console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]))