var isSubtree = function(root, subRoot) {
    if(!root || !subRoot) return false
    if(isSameTree(root, subRoot)) return true
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};

function isSameTree(p, q){
if(!p && !q) return true
if(!p || !q || p.val != q.val) return false
return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}


class Node{
constructor(val, left =null, right = null){
    this.val = val;
    this.left = left;
    this.right = right
}
}

let node4 = new Node(4)
let node3 = new Node(3)
let node7 = new Node(7)
let node2 = new Node(2, node3, node4)
let node1 = new Node(1, node2, node7)


let nodeSeven = new Node(7)
let node15 = new Node(15)
let node20 = new Node(20, node15, nodeSeven)
let nodeNine = new Node(9)
let node10 = new Node(-10, nodeNine, node20)

let menusThree = new Node(-3)


console.log(isSubtree(node1, node2)) // true
console.log(isSubtree(node1, menusThree)) // false
console.log(isSubtree(node10, nodeSeven)) // true
