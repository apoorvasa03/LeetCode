/** Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.
 *  Example:
        Input: intervals = [[0,30],[5,10],[15,20]]
        Output: false

 *  Example:
       Input: intervals = [[7,10],[2,4]]
       Output: true
 */

/** time - o(nlogn)  space - o(1) */   
const canAttendMeetings = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);

    for(let i=0; i< intervals.length - 1; i++){
        if(intervals[i+1][0] < intervals[i][1]) return false
    }

    return true
}

// my first approch
 /** time - o(nlogn)  space - o(1) */      
const canAttendMeetings1 = function(intervals) {
    intervals.sort((a,b) => a[1] - b[1]);
    let previous;

   for(let [start, end] of intervals){
        if(!previous) previous = [start, end]
        else if(previous[1] > start) return false
        else previous = [start, end]
    };

    return true
};

console.log(canAttendMeetings([[0,30],[5,10],[15,20]]))
console.log(canAttendMeetings([[7,10],[2,4]]))