/** time: o(n)  space: O(LogN) => for balanced tree*/
var isValidBST = function(root) {
    function valid(node, left, right){
        if(!node) return true;
        if(!(left < node.val && node.val < right)) return false
        return (valid(node.left, left, node.val) && valid(node.right, node.val, right))
    }
    return valid(root, -Infinity, Infinity)
};


class Node{
    constructor(val, left= null, right = null){
        this.val= val;
        this.left = left;
        this.right = right;
    }
}

let node3 = new Node(3)
let node6 = new Node(6)
let node4 = new Node(4, node3, node6)
let node1 = new Node(1)
let node5 = new Node(5, node1, node4)


let nodeThree = new Node(3)
let nodeOne = new Node(1)
let nodeTwo = new Node(2, nodeOne, nodeThree)



console.log(isValidBST(node5)) //false
console.log(isValidBST(nodeTwo)) // true