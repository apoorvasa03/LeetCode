/** Time: O(NlogN) space: O(1) */
var minMeetingRooms = function(intervals) {
    let startIntervals= [], endIntervals = []

    /** take start and end of a intervals in separate array and sort it */
    for(let [start, end] of intervals){
        startIntervals.push(start)
        endIntervals.push(end)
    }

    startIntervals.sort((a,b) => a -b);
    endIntervals.sort((a,b) => a-b);

    let sIndex=0, eIndex=0,room=0,max=0;
    /** during every start room is allocated, if start finished then there is no need to see end intervals */
    while(sIndex < startIntervals.length){
        /** if start interval is less than end, then room are busy, we need new room, else we can use old room so room--*/
        if(startIntervals[sIndex] < endIntervals[eIndex]){
            sIndex++
            room++
        }else{
            sIndex++;
            room--
        }
        /**get max number of room used in any given time */
        max = Math.max(room, max);
    }
    return max
}

console.log(minMeetingRooms([[13,15],[1,13],[6,9]])) // 2
console.log(minMeetingRooms([[0,30],[5,10],[15,20]])) // 2
console.log(minMeetingRooms([[7,10],[2,4]])) // 1qq