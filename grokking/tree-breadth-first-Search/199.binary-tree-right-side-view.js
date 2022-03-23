/** Time: O(N)  Space: O(D)
 * where D is the diameter of the tree
 * TODO: why is "102. Binary Tree Level Order Traversal" is O(N) space and this problem as O(D)
 * - is it bcz in result we store all value in 102, in 199 we just store right view nodes
*/
var rightSideView = function(root) {
    if(!root) return []
    let result = []
    let queue = [root];
    while(queue.length){
        let len = queue.length
        while(len--){
            let current = queue.shift()
            if(len <= 0) result.push(current.val)
            if(current.left) queue.push(current.left)
            if(current.right) queue.push(current.right)
        }
    }
    return result
};


class Node{
    constructor(val, left= null, right = null, next = null){
        this.val= val;
        this.left = left;
        this.right = right;
        this.next = next;
    }
}

/** example 1 start*/
let node4 = new Node(4)
let node3 = new Node(3)
let node2 = new Node(2, node4)
let node1 = new Node(1, node2, node3)
/** example 1 end*/

/** example 2 start*/
let _node7 = new Node(7)
let _node6 = new Node(6)
let _node5 = new Node(5)
let _node4 = new Node(4)
let _node3 = new Node(3, _node6, _node7)
let _node2 = new Node(2, _node4, _node5)
let _node1 = new Node(1, _node2, _node3)
/** example 2 end*/

let node1_ = new Node(1)

console.log(rightSideView(node1))    //  [ 1, 3, 4 ]
console.log(rightSideView(_node1))   // [1, 3, 7]
console.log(rightSideView(node1_))   // [ 1 ]
console.log(rightSideView([]))       // []
console.log(rightSideView())         // []