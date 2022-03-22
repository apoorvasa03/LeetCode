/** time: O(n) space: O(N) */
/**The drawback of the DFS approach in this case is that all nodes should be visited to ensure that the minimum depth would be found. 
 * Therefore, this results in a O(N) complexity. One way to optimize the complexity is to use the BFS strategy. 
 * We iterate the tree level by level, and the first leaf we reach corresponds to the minimum depth. 
 * As a result, we do not need to iterate all nodes. */
 var minDepth = function(root) {
    if(!root) return 0
    let queue = [root];
    let mindepth = 1
    while(queue.length){
        let len = queue.length
        while(len){
            let node = queue.shift()
            if(!node.left && !node.right) return mindepth
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
            len--
        }
        mindepth++
    }

    return mindepth
};




class Node{
    constructor(val, left= null, right = null){
        this.val= val;
        this.left = left;
        this.right = right;
    }
}



/** example 1 start*/
let node7 = new Node(7)
let node15 = new Node(15)
let node20 = new Node(20, node15, node7)
let node9 = new Node(9)
let node3 = new Node(3, node9, node20)
/** example 1 end*/

/** example 2 start*/
let _node6 = new Node(6)
let _node5 = new Node(5, null, _node6)
let _node4 = new Node(4, null, _node5)
let _node3 = new Node(3, null, _node4)
let _node2 = new Node(2, null, _node3)
/** example 2 end*/

let node1 = new Node(1)

console.log(minDepth(node3))    // 2
console.log(minDepth(_node2))   // 5
console.log(minDepth(node1))    // 1
console.log(minDepth([]))       // 1
console.log(minDepth())         // 0