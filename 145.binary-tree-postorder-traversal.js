var postorderTraversal = function(root){
    let result = []
    if(!root) return result;
    let stack = [root]
    while(stack.length){
        let current = stack.pop()
        result.unshift(current.val);
        if(current.left) stack.push(current.left)
        if(current.right) stack.push(current.right)
        
    }
    return result
}

var postorderTraversal2 = function(root) {
    return !root ? [] : [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val];
};

var postorderTraversal3 = function(root) {
    let result = []

    function foo(root){
        if(!root) return;
        if(root.left) foo(root.left);
        result.push(root.val)
        if(root.right) foo(root.right);
        
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

console.log(postorderTraversal(node3))    //  [ 9, 15, 7, 20, 3 ]
console.log(postorderTraversal(_node1))   // [4, 5, 2, 6,7, 3, 1 ]
console.log(postorderTraversal(node1))    // [ 1 ]
console.log(postorderTraversal([]))       // []
console.log(postorderTraversal())         // []