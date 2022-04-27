/** time: o(e + v)  space : O(e+ v)
*/
var countComponents = function(n, edges) {
    let adjList = buildGraph(n, edges)
    let visited = new Set(), count= 0;

    for(let node in adjList){
        count += dfs(node, adjList, visited)
    }
    return count
}

function dfs(node, adjList, visited){
    if(visited.has(node)) return 0;
    visited.add(node)
    // will visite all the connected nodes of node, once completed we have discover new compoenent so return 1
    for(let nextNode of adjList[node]){
        dfs(nextNode.toString(), adjList, visited)
    }

    return 1
}

function buildGraph(n, edges){
    let graph = new Array(n).fill().map(() => [])
    // since its undirected graph, connection is bidirectional
    for(let [src, dist] of edges){
        graph[src].push(dist)
        graph[dist].push(src)
    }

    return graph
}

console.log(countComponents(5, [[0,1],[1,2],[3,4]])) // 2
console.log(countComponents(5, [[0,1],[1,2],[2,3],[3,4]])) //1