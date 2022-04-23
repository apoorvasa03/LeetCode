/**  time - o(n)   space- 0(n)
* space -  O(log(N)) in the best case of completely balanced tree and O(N) in the worst case of completely unbalanced tree,
to keep a recursion stack
*/
var isSameTree = function(p, q) {
    if(!p && !q) return true
    if(!p || !q || p.val != q.val) return false
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};

class Node{
    constructor(val, left =null, right = null){
        this.val = val;
        this.left = left;
        this.right = right
    }
}

let node2 = new Node(2)
let node1 = new Node(1, node2, null)


let nodeTwo = new Node(2)
let nodeOne = new Node(1, nodeTwo , null)

console.log(isSameTree(node1, nodeOne)) // true
 1