const invertTree1 = function(root) {
    if(root){
        let temp = root.left
        root.left = invertTree(root.right)
        root.right = invertTree(temp)
    }
    return root
};

function invertTree(root) {
    if(!root) return root
    ;[root.left, root.right] = [root.right, root.left]
    invertTree(root.left)
    invertTree(root.right)
    return root;
}

class Node{
    constructor(data, left =null, right = null){
        this.data = data;
        this.left = left;
        this.right = right
    }
}
let node6 = new Node(6)
let node5 = new Node(5)
let node4 = new Node(4, node5, node6)
let node3 = new Node(3)
let node7 = new Node(7)
let node2 = new Node(2, node3, node4)
let node1 = new Node(1, node2, node7)

console.log(JSON.stringify(invertTree(node1)))


