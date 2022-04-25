/** Time: O(NlogN) space: O(N) */
var minMeetingRooms = function(intervals) {
    let startIntervals = [], endInterval = []

    for(let [start, end] of intervals){
        startIntervals.push(start);
        endInterval.push(end);
    }

    startIntervals.sort((a,b) => a-b);
    endInterval.sort((a,b) => a-b);

    let si = 0, ei=0, room = 0, max = 0
    /** during every start room is allocated, if start finished then there is no need to see end intervals */
    while(si < startIntervals.length){
        /** if start interval is less than end, then room are busy, we need new room, else we can use old room so room--*/
        if(startIntervals[si] < endInterval[ei]){
            room++
            si++
        }else{
            room--
            ei++
        }
        /**get max number of room used in any given time */
        max = Math.max(room, max)
    }

    return max
    
}


console.log(minMeetingRooms([[13,15],[1,13],[6,9]])) // 2
console.log(minMeetingRooms([[0,30],[5,10],[15,20]])) // 2
console.log(minMeetingRooms([[7,10],[2,4]])) // 1