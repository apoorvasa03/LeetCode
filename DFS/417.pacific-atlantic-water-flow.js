/** time: o(nm)  space: o(nm) 
 * where M is the number of rows and N is the number of columns.
*/
var pacificAtlantic = function(heights) {
    let result = []
    let row = heights.length
    let col = heights[0].length
    let pacific = new Array(row).fill().map(() => new Array(col).fill(0))
    let atlantic = new Array(row).fill().map(() => new Array(col).fill(0))


    for(let r = 0; r < row; r++){
       dfs(heights, r, 0, -Infinity, pacific)
       dfs(heights, r, col - 1, -Infinity, atlantic)
    }

    for(let c = 0; c < col ; c++){
        dfs(heights, 0, c, -Infinity, pacific)
        dfs(heights, row - 1, c, -Infinity, atlantic)
     }

     for (let r = 0; r < row; r ++) {
        for (let c = 0; c < col; c ++) {
            if (pacific[r][c] == 1 && atlantic[r][c] == 1) {
                result.push([r, c])
            }
        }
    }

    return result;
};


function dfs(matrix, r, c, prev, ocean){
    const rowInbound = 0 <= r && r < matrix.length
    const columnInbound = 0 <= c && c < matrix[0].length

    if(!rowInbound || !columnInbound) return;
    if(matrix[r][c] < prev) return
    if(ocean[r][c] === 1) return

    ocean[r][c] = 1

    dfs (matrix, r - 1, c, matrix[r][c], ocean);
    dfs (matrix, r + 1, c, matrix[r][c], ocean);
    dfs (matrix, r, c - 1, matrix[r][c], ocean);
    dfs (matrix, r, c + 1, matrix[r][c], ocean);


}

const heights = [
    [1,2,2,3,5],
    [3,2,3,4,4],
    [2,4,5,3,1],
    [6,7,1,4,5],
    [5,1,1,2,4]
]

const heights2 = [[2,1],[1,2]]

console.log(pacificAtlantic(heights))
console.log(pacificAtlantic(heights2))
