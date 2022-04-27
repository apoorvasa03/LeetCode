/** time: o(e + v)  space : O(e+ v)
 * where e is is the number of dependencies and v is the number of courses
*/
var canFinish = function(numCourses, prerequisites) {
    let adjList = buildAdjList(numCourses, prerequisites)
    let visited = new Set()
    for(let cource in adjList){
        if(!dfs(adjList, cource, visited)) return false
    }
    return true
}

/** if prerequisties of the course is empty([]), then that cource can be taken up(true), 
 * if cource is in visisted list, it mean that there is cyclic graph */
 function dfs(adjList, cource, visited){
    if(adjList[cource].length === 0) return true
    if(visited.has(cource)) return false

    visited.add(cource);

    for(let prerequisite of adjList[cource]){
       if(!dfs(adjList, prerequisite, visited)) return false
    }
     /** since we viisted all the prerequisites of the ccourse, we can delete the course from visisted, 
    and remove all prerequisites of course from adjlist */
    visited.delete(cource)
    adjList[cource] = []

    return true
}

/** this gives the array where index will be the cource and array item will be the prequesties */
function buildAdjList(numCourses, prerequisites){
    let adj = new Array(numCourses).fill(0).map(() =>[])
    for(let [c, d] of prerequisites){
        adj[c].push(d)
    }
    return adj
}


console.log(canFinish(2, [[1,0]]))  // true
console.log(canFinish(2, [[1,0], [0, 1]]))  // false
console.log(canFinish(4, [[2,0],[1,0],[3,1],[3,2],[1,3]])) // false