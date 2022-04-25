/** Time: O(N) space: O(N) */
var insert = function(intervals, newInterval) {
    let result = []
    // check if intervals comes b4 new, els if check if new comes before interval, else it is merged. so get merged newInterval. repeat the process
    for(let [start, end] of intervals){
        if(!newInterval || end < newInterval[0]){
            result.push([start, end])
        }else if (start > newInterval[1]){
            result.push(newInterval)
            result.push([start, end])
            newInterval = null
        }else{
            newInterval[0] = Math.min(newInterval[0], start);
            newInterval[1] = Math.max(newInterval[1], end)
        }
    }

    if(newInterval) result.push(newInterval)
    return result
}

console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8])) // [ [ 1, 2 ], [ 3, 10 ], [ 12, 16 ] ]
console.log(insert([[1,3],[6,9]], [2, 5])) // [ [ 1, 5 ], [ 6, 9 ] ]
console.log(insert([], [5, 7])) // [ [ 5, 7 ] ]

console.log(insert([[1, 5]], [2, 3])) // [ [ 1, 5 ] ]
console.log(insert([[1, 5]], [6, 8])) // [ [ 1, 5 ], [ 6, 8 ] ]

console.log(insert([[1, 5]], [0, 3])) //  [ 0, 5 ] ]
console.log(insert([[1, 5]], [0, 0]))