/** time: o(rc)  space: o(1)*/

var numIslands = function(grid) {
    let count = 0;
    for(let r=0; r< grid.length; r++){
        for(let c=0; c < grid[0].length; c++){
            if(grid[r][c] === '0') continue;
            count++
            DFS(grid, r, c)
        }
    }

    return count
}

function DFS(grid, r, c){
    let rowInbound = 0 <= r && r < grid.length;
    let columnInbound = 0 <= c && c < grid[0].length;
    if(!rowInbound || !columnInbound) return;

    if(grid[r][c] === '0') return;

    if(grid[r][c] === '1') grid[r][c] = '0';
    

    DFS(grid, r-1, c)
    DFS(grid, r+1, c)
    DFS(grid, r, c -1)
    DFS(grid, r, c +1)
}


/** time: o(rc)  space: o(rc)*/
var numIslands1 = function(grid) {
    let visited = new Set();
    let count = 0
    for(let r=0; r< grid.length; r++){
        for(let c=0; c < grid[0].length; c++){
            count += exploreIsland(grid, r, c, visited)
        }
    }
    return count
};


function exploreIsland(grid, r, c, visited){
    let rowInbound = 0 <= r && r < grid.length;
    let columnInbound = 0 <= c && c < grid[0].length;
    if(!rowInbound || !columnInbound) return 0

    let pos = r + ',' + c
    if(visited.has(pos)) return 0
    visited.add(pos)

    if(grid[r][c] === '0') return false

    exploreIsland(grid, r-1, c, visited)
    exploreIsland(grid, r+1, c, visited)
    exploreIsland(grid, r, c -1, visited)
    exploreIsland(grid, r, c + 1, visited)

    return 1
}






let grid1 = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
]

let grid2 = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]


  console.log(numIslands(grid1)) // 1
  console.log(numIslands(grid2)) // 3