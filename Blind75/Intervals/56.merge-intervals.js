/** Time: O(N LogN) Space: O(N)*/
var merge = function(intervals) {
    if(intervals.length === 0) return []

    intervals = intervals.sort((a, b) => a[0] - b[0])
    
    let result = [intervals[0]];

    for(let i = 1; i < intervals.length; i++){

        if(intervals[i][0] <= result[result.length -1][1]){
            let lastResult = result.pop();
            let end = Math.max(lastResult[1], intervals[i][1])
            result.push([lastResult[0], end])
        }else{
            result.push(intervals[i])
        }

    }

    return result
};


console.log(merge([[1,3], [8,10] ,[2,6],[15,18]])) // [ [ 1, 6 ], [ 8, 10 ], [ 15, 18 ] ]
console.log(merge([[1,4],[4,5]])) // [ [ 1, 5 ] ]