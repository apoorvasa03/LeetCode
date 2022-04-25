
/** time - o(nlogn)  space - o(1) */   
const canAttendMeetings = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);

    for(let i=0; i< intervals.length - 1; i++){
        if(intervals[i+1][0] < intervals[i][1]) return false
    }

    return true
}

console.log(canAttendMeetings([[0,30],[5,10],[15,20]]))
console.log(canAttendMeetings([[7,10],[2,4]]))