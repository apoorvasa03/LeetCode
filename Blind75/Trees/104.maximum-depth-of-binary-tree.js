/** Time: O(N) Space: O(log n) for balanced tree, worst case O(N) */
var maxDepth = function(root) {
    if(!root) return 0
    return Math.max( maxDepth(root.left),  maxDepth(root.right)) + 1
}

// level-order-traversal
/** Time: O(N) Space: O(log n) for balanced tree, worst case O(N) */
var maxDepth1 = function(root) {
    let depth = 0
    if(!root) return depth
    let queue = [root]
    while(queue.length > 0){
        let len = queue.length
        depth++
        while(len > 0){
            let current = queue.shift()
            if(current.left) queue.push(current.left)
            if(current.right) queue.push(current.right)
            len--
        }
    }
    return depth
}

class Node{
    constructor(val, left =null, right = null){
        this.val = val;
        this.left = left;
        this.right = right
    }
}
let node8 = new Node(8)
let node9 = new Node(9)
let node6 = new Node(6)
let node5 = new Node(5)
let node4 = new Node(4, node8, node9 )
let node3 = new Node(3, node5, node6)
let node7 = new Node(7)
let node2 = new Node(2, node3, node4)
let node1 = new Node(1, node2, node7)


let nodeSeven = new Node(7)
let node15 = new Node(15)
let node20 = new Node(20, node15, nodeSeven)
let nodeNine = new Node(9)
let node10 = new Node(-10, nodeNine, node20)

let menusThree = new Node(-3)

console.log(maxDepth(node10)) // 3
console.log(maxDepth(node1))  // 4
console.log(maxDepth(menusThree)) // 1