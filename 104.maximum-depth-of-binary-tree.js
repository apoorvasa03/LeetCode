/**
Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
Example:
Input: root = [3,9,20,null,null,15,7]
Output: 3

Example2:
Input: root = [1,null,2]
Output: 2
 */


/** time - o(n)   space - o(n) 
 * time - we visit each node exactly once, thus the time complexity is O(N), where N is the number of nodes.
 * space -  in the worst case, the tree is completely unbalanced, e.g. each node has only left child node, the recursion call would occur N times (the height of the tree), 
 * therefore the storage to keep the call stack would be O(N). But in the best case (the tree is completely balanced), the height of the tree would be log(N). 
 * Therefore, the space complexity in this case would be O(log(N)).
*/
const maxDepth = function(root) {
    if(!root) return 0

    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};



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

console.log(maxDepth(node1))