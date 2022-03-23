/** time: O(N) space: O(N)
 * time: even through we have used 2 while, but we are travesing every node only once, hence O(N) time     
*/
 
var breathTraversal = function(root) {
    if(!root) return []
    let queue = [root]
    let result = []
        while(queue.length) {
            let len = queue.length;
            let currentResult = []
            while(len > 0){
                let current = queue.shift();
                currentResult.push(current.val)
                if(current.left) queue.push(current.left);
                if(current.right) queue.push(current.right)
                len--
            }
            result.unshift(currentResult)
        }
    return result
}

var breathTraversal = function(root){
    if(!root) return []
    let queue = [root]
    let result = []

        while(queue.length) {
            let len = queue.length;
            let currentResult = []
            while(len > 0){
                let current = queue.shift();
                currentResult.push(current.val)
                if(current.left) queue.push(current.left);
                if(current.right) queue.push(current.right)
                len--
            }
            result.push(currentResult)
        }

    return result.reverse()
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

console.log(breathTraversal(node3)) // [ [ 15, 7 ], [ 9, 20 ], [ 3 ] ]
console.log(breathTraversal(node1)) // [[1]]
console.log(breathTraversal([]))    // []
console.log(breathTraversal())      // []