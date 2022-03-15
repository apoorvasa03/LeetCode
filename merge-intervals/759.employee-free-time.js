var employeeFreeTime = function(schedules) {
    const merged = schedules.reduce((merged, schedule)=> [...merged, ...schedule]);
    merged.sort((a,b) => a.start - b.start);
    console.log(merged)

    let freeTime =[], start = merged[0].start, end = merged[0].end;
    for(let i =1; i< merged.length; i++){
        let current = merged[i];
        if(current.start > end){
            freeTime.push(new Interval(end, current.start));
            start = current.start;
            end = current.end;
        }else{
            start = Math.min(start, current.start);
            end = Math.max(end, current.end)
        }
    }

    return freeTime
}

console.log(employeeFreeTime([[[7,24],[29,33],[45,57],[66,69],[94,99]],[[6,24],[43,49],[56,59],[61,75],[80,81]],[[5,16],[18,26],[33,36],[39,57],[65,74]],[[9,16],[27,35],[40,55],[68,71],[78,81]],[[0,25],[29,31],[40,47],[57,87],[91,94]]]))
// console.log(employeeFreeTime([[[1,2],[5,6]],[[1,3]],[[4,10]]]))
// console.log(employeeFreeTime([[[1,2],[5,6]],[[1,3]],[[4,10]]]))
// console.log(employeeFreeTime([[[1,3],[6,7]],[[2,4]],[[2,5],[9,12]]]))