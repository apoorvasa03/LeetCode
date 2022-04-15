var searchBST = function(root, val) {
    if(!root) return null;
    if(root.val === val) return root;
    if(val < root.val) {
        return searchBST(root.left, val)
    }else{
        return searchBST(root.right, val)
    } 
};

class Node{
    constructor(val, left =null, right = null){
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

let node7= new Node(7)
let node3 = new Node(3)
let node1 = new Node(1)
let node2 = new Node(2, node1, node3)
let node4 = new Node(4, node2, node7)

console.log(searchBST(node4, 2)) // {val: 2,left: Node { val: 1, left: null, right: null },right: Node { val: 3, left: null, right: null }}
console.log(searchBST(node4, 5)) // null