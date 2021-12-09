/**
 You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.
 Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).
 Return intervals after the insertion.

 Eample:
    Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
    Output: [[1,5],[6,9]]

Example:
    Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
    Output: [[1,2],[3,10],[12,16]]
    Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
 */

    var insert = function(intervals, newInterval) {
        let result = []

        for(const [start, end] of intervals){

            if(!newInterval || end < newInterval[0]){
                result.push([start, end])
            }else if(newInterval[1] < start){
                result.push(newInterval)
                result.push([start, end])
                newInterval = null
            }else{
                newInterval[0] = Math.min(start, newInterval[0])
                newInterval[1] = Math.max(end, newInterval[1])
            }
        }

        if(newInterval){
            result.push(newInterval)
        }
        
        return result;
    };

    console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8])) // [ [ 1, 2 ], [ 3, 10 ], [ 12, 16 ] ]
    console.log(insert([[1,3],[6,9]], [2, 5])) // [ [ 1, 5 ], [ 6, 9 ] ]
    console.log(insert([], [5, 7])) // [ [ 5, 7 ] ]

    console.log(insert([[1, 5]], [2, 3])) // [ [ 1, 5 ] ]
    console.log(insert([[1, 5]], [6, 8])) // [ [ 1, 5 ], [ 6, 8 ] ]

    console.log(insert([[1, 5]], [0, 3])) //  [ 0, 5 ] ]
    console.log(insert([[1, 5]], [0, 0]))