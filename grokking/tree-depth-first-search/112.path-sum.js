/** Time: O(N)  Space: O(log N)
 * Time: we visit each node exactly once, thus the time complexity is \mathcal{O}(N)O(N), where NN is the number of nodes.
 * Space: in the worst case, the tree is completely unbalanced, e.g. each node has only one child node, 
 * the recursion call would occur N times (the height of the tree), 
 * therefore the storage to keep the call stack would be O(N).
 *  But in the best case (the tree is completely balanced), the height of the tree would be log(N). 
 *  Therefore, the space complexity in this case would be O(log(N)).
*/
var hasPathSum = function(root, sum) {
    if(!root) return false

    if(!root.left && !root.right){
        return root.val === sum
    } else {
        return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right , sum - root.val)
    }
}

class Node{
    constructor(val, left= null, right = null, next = null){
        this.val= val;
        this.left = left;
        this.right = right;
        this.next = next;
    }
}

/** example 1 start*/
let node1 = new Node(1)
let _node4 = new Node(4, null, node1)
let node13 = new Node(13)
let node8 = new Node(8, node13, _node4)
let node2= new Node(2)
let node7 = new Node(7)
let node11 = new Node(11, node7, node2)
let node4 = new Node(4, node11)
let node5 = new Node(5, node4, node8)
/** example 1 end*/

console.log(hasPathSum(node5, 22))  // true
console.log(hasPathSum(node5, 26))  // true
console.log(hasPathSum(node5, 0))   // false
console.log(hasPathSum(node5, 30))  // false