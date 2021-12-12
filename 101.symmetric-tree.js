/** Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center). */



/** time - o(n)  space - o(n)
 space - The number of recursive calls is bound by the height of the tree. In the worst case, the tree is linear and the height is in O(n). 
 Therefore, space complexity due to recursive calls on the stack is O(n) in the worst case
 */
var isSymmetric = function(root) {
   return dfs(root, root)

};

function dfs(p, q){
    if(!p && !q) return true
    if(!p || !q || p.val !== q.val) return false
    return dfs(p.left, q.right) && dfs(p.right, q.left)
}


/** time - o(n)  space - o(n) */
const isSymmetric1 = function (root){
    if(!root) return true

    function isMirror(a, b){
        if(!a && !b) return true
        if(!a || !b || a.val != b.val) return false
        return isMirror(a.left, b.right) && isMirror(a.right, b.left)
    }

    return isMirror(root.left, root.right)
}


class Node{
    constructor(data, left =null, right = null){
        this.val = data;
        this.left = left;
        this.right = right
    }
}
let nodeFour = new Node(4)
let nodeThree = new Node(3)
let node4 = new Node(4)
let node3 = new Node(3)
let nodeTwo = new Node(2, nodeFour, nodeThree)
let node2 = new Node(2, node3, node4)
let node1 = new Node(1, node2, nodeTwo)


console.log(isSymmetric1(node1))