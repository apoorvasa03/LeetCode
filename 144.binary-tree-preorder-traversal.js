/** Time: O(n) space: O(n)
 * center, left, right */
var preorderTraversal = function(root) {
    let result = []
    if(!root) return result
    let stack = [root];

    while(stack.length){
        let current = stack.pop()
        result.push(current.val)
        if(current.right) stack.push(current.right)
        if(current.left) stack.push(current.left)
    }

    return result
};

var preorderTraversal2 = function(root) {
    return !root ? [] : [root.val, ...postorderTraversal(root.left), ...postorderTraversal(root.right)];
};

var preorderTraversal3 = function(root) {
    let result = []
    if(!root) return result

    function foo(root){
        result.push(root.val)
        if(root.left) foo(root.left)
        if(root.right) foo(root.right)
    }

    foo(root)
    return result
}

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
let _node7 = new Node(7)
let _node6 = new Node(6)
let _node5 = new Node(5)
let _node4 = new Node(4)
let _node3 = new Node(3, _node6, _node7)
let _node2 = new Node(2, _node4, _node5)
let _node1 = new Node(1, _node2, _node3)
/** example 2 end*/

let node1 = new Node(1)

console.log(preorderTraversal(node3))    //  [ 3, 9, 20, 15, 7 ]
console.log(preorderTraversal(_node1))   // [ 1, 2, 4, 5, 3, 6, 7]
console.log(preorderTraversal(node1))    // [ 1 ]
console.log(preorderTraversal([]))       // []
console.log(preorderTraversal())         // []


