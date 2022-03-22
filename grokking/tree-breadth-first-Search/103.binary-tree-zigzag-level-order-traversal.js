/** time: O(n) space: O(N) */
var zigzagLevelOrder = function(root) {
    if(!root) return []
    let queue = [root];
    let result = []
    let zig = true;
    while(queue.length){
        let currentResult = []
        let len = queue.length;
        while(len){
            let node = queue.shift()
            if(zig) currentResult.push(node.val)
            else currentResult.unshift(node.val)

            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
            len--
        }
        result.push(currentResult)
        zig = !zig;
    }
    return result;
}

var zigzagLevelOrder1 = function(root) {
    if(!root) return []
    let queue = [root];
    let result = [];
    let zig = true
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
        if(zig){
            result.push(currentResult)
        }else{
            result.push(currentResult.reverse())
        }
        zig = !zig
       
    }
    return result;
};




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

console.log(zigzagLevelOrder(node3)) // [ [ 15, 7 ], [ 9, 20 ], [ 3 ] ]
console.log(zigzagLevelOrder(node1)) // [[1]]
console.log(zigzagLevelOrder([]))    // []
console.log(zigzagLevelOrder())      // []