/** time: O(N) space: O(1)*/
var breathTraversal = function(root){
    let result = [];
    root && traversal(root, 0)

    function traversal(node, level){
        if(!result[level]) result[level] = []
        result[level].push(node.val)

        if(node.left) traversal(node.left, level);
        if(node.right) traversal(node.right, level);
    }
    
    return result
}

var breathTraversal1 = function(root) {
    if(!root) return []
    let queue = [root];
    let result = [];

    while(queue.length){
        let len = queue.length
        let currentResult = []
        while(len){
            let current = queue.shift()
            currentResult.push(current.val)
            if(current.left) queue.push(current.left)
            if(current.right) queue.push(current.right)
            len--
        }
        result.push(currentResult)
    }
    return result;
};

var breathTraversal2 = function(root){
    if(!root) return []
    let queue = [{current: root, level: 0}];
    let result = []

    while(queue.length){
        let {current, level} = queue.pop();

        if(!result[level]) result[level] = []
        result[level].push(current.val)

        if(current.left) queue.push({current: current.left, level : level+1});
        if(current.right) queue.push({current: current.right, level: level + 1})
    }

    return result
}





class Node{
    constructor(val, left= null, right = null){
        this.val= val;
        this.left = left;
        this.right = right;
    }
}
let node7 = new Node(7)
let node15 = new Node(15)
let node20 = new Node(20, node15, node7)
let node9 = new Node(9)
let node3 = new Node(3, node9, node20)

let node1 = new Node(1)

console.log(breathTraversal(node3)) // [ [ 3 ], [ 9, 20 ], [ 15, 7 ] ]
console.log(breathTraversal(node1)) // [[1]]
console.log(breathTraversal([]))    // []
console.log(breathTraversal())      // []