var isSubtree = function(root, subRoot) {
    if(!root || !subRoot) return false
    if(isMatch(root, subRoot)) return true
    return isSame(root.left, subRoot) || isSubtree(root.right, subRoot)
};

function isSame(p, q){
    if(!p && !q) return true
    if(!p || !q || p.val != q.val) return false
    return isSame(p.left, q.left) && isSame(p.right, q.right)
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
let node10 = new Node(10)

console.log(isSubtree(node1, node3))