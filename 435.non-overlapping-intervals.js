/**
 * Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.
   Example:    
        Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
        Output: 1
        Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
    Example:
        Input: intervals = [[1,2],[1,2],[1,2]]
        Output: 2
        Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.

/** time o(nlogn)  space - o(1) */
const eraseOverlapIntervals = (intervals) => {
	intervals.sort((a,b) => a[1] - b[1]); // ascending order wrt the end
	let pre = null;
	let counter = 0;
	intervals.forEach((item) => {
		if (!pre) pre = item;
		else {
			if (pre[1] > item[0]) counter++;
			else pre = item;
		}
	})
	return counter;
}

/** time o(nlogn)  space - o(1) */
var eraseOverlapIntervals1 = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    let count =0
    let end = intervals[0][1]

    for(let i=1; i< intervals.length ; i++){
        if(intervals[i][0] < end){
            end = Math.min(end, intervals[i][1])
            count++
        }else end = intervals[i][1]
        
    }
    return count
}

// my first approch
/** time o(nlogn)  space - o(n) */
var eraseOverlapIntervals1 = function(intervals) {

    intervals.sort((a,b) => a[0] - b[0])
    let count =0
    let result = [intervals[0]]

    for(let i=1; i< intervals.length; i++){
        if(intervals[i][0] < result[result.length - 1][1]){
            let lastResult = result.pop()
            //  if two intervals are overlapping, we want to remove the interval that has the longer end point 
            // the longer interval will always overlap with more or the same number of future intervals compared to the shorter one
            lastResult = lastResult[1] < intervals[i][1] ? lastResult : intervals[i]
            result.push(lastResult)

            count++
        }else {
            result.push(intervals[i])
        }
    }

    return count
};

console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]])) // 1
console.log(eraseOverlapIntervals([[1,2],[1,2],[1,2]])) // 2
console.log(eraseOverlapIntervals([[1,2],[2,3]])) // 0
console.log(eraseOverlapIntervals([[1,100],[11,22],[1,11],[2,12]])) // 2

console.log(eraseOverlapIntervals([[0,2],[1,3],[2,4],[3,5],[4,6]])) 

