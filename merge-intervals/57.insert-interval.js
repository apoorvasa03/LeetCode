
/**
 * Time: O(N)  Space: O(N)
 * if newInterval end is less then interval start, then add newInterval to result, since intervals array is sorted without overlapping, 
        we can push all the remaining intervals to result and return result.
 * else if newInterval start is greater than interval end, add interval to result.
 * else if above two condition failed, then they are overlapping. merge the intervals. dont push to result here, bcz they may be other overlapping intervals
 */
        var insert = function(intervals, newInterval) {
            if(intervals.length === 0) return [newInterval]
            let result = []
        
            for(let i =0; i<intervals.length; i++){
        
                if(newInterval[1] < intervals[i][0]){
                    result.push(newInterval)
                    while(i < intervals.length){
                        result.push(intervals[i++])
                    }
                    return result
                }else if(newInterval[0] > intervals[i][1]){
                    result.push(intervals[i])
                }else{
                    newInterval = [Math.min(newInterval[0], intervals[i][0]), Math.max(newInterval[1], intervals[i][1])]
                }
            }
            /** since newInterval is not yet inserted, we are adding after for block complete   */
            result.push(newInterval)
            return result
        };
        
        console.log(insert([[1,3],[6,9]], [2,5]))
        console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]))