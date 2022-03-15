/** time: O(N)  space: O(N)*/
var intervalIntersection = function(firstList, secondList) {
    
    let firstPointer = 0, secondPointer = 0;
    let result = []

    while(firstPointer < firstList.length && secondPointer < secondList.length){
        let [start1, end1] = firstList[firstPointer];
        let [start2, end2] = secondList[secondPointer];

        if(start1 <= end2 && start2 <= end1){
            result.push([Math.max(start1, start2), Math.min(end1, end2)])
        }

        if(end1 < end2) firstPointer++
        else secondPointer++
    }
    return result
};



console.log(intervalIntersection([[0,2],[5,10],[13,23],[24,25]],[[1,5],[8,12],[15,24],[25,26]]))
console.log(intervalIntersection([[1,3],[5,9]],[]))