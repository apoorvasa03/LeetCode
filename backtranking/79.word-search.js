/** time: O(N 4^L)    space- O(L)
 * where N is the number of cells in the board and L is the length of the word to be matched
*/


var exist = function(board, word) {
    let ROWS = board.length
    let COLUMNS = board[0].length
    let path = new Set()
    const tuple =(r, c) => [r, c].toString()

    // if length of the word and index length is same then word excit
    // else again do dfs for all 4 side, keep the visited path
    const dfs = (row, column, i) =>{
        if(word.length === i) return true
 
        if(
            row < 0 || 
             column < 0 || 
             row >= ROWS || 
             column >= COLUMNS || 
             board[row][column] !== word[i] || 
             path.has(tuple(row, column)) // same letter cell may not be used more than once
         ) return false
 
         path.add(tuple(row, column))
 
         let result = dfs(row+1, column, i+1) ||
                      dfs(row-1, column, i+1) ||
                      dfs(row, column+1, i+1) ||
                      dfs(row, column-1, i+1)
         path.delete(tuple(row, column))   
         
         return result
    }
 

    for(let row = 0; row < ROWS; row++){
        for(let column = 0; column < COLUMNS; column++){
            if(dfs(row, column, 0)) return true
        }
    }
 
    return false
 };
 
 console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED")) // true
 console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE")) // true
 console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB")) // false