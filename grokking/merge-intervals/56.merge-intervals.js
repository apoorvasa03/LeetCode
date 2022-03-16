/** Time: o(nlogn) Space: o(logn)
 Time: sorting requires nlogn time
 Space: sorting space required logn space. result is not consider bcz it the output value
*/
var merge = function(intervals) {
    /** sort the array such that start of the intervals in acsending order */
    intervals.sort((a, b) => a[0] - b[0])
    let result = [intervals[0]]
    for(let i = 1; i < intervals.length; i++){
        /** if the  start of the current interval is less then prev interval, then we have to merge it, else save that interval in result*/
        if(intervals[i][0] <= result[result.length - 1][1]){
            let lastInterval = result.pop()
            let end = Math.max(lastInterval[1], intervals[i][1])
            result.push([lastInterval[0], end])
        }else{
            result.push(intervals[i])
        }
    }
    return result
};

console.log(merge([[1,4],[4,5]])) // [1, 5]
console.log(merge([[1,3],[2,6],[8,10],[15,18]])) // [ [ 1, 6 ], [ 8, 10 ], [ 15, 18 ] ]