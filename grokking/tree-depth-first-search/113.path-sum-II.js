/** Time: O(N^2)  Space: O(N^2)
 * TODO: complexity ??
*/

var pathSum = function(root, targetSum) {
    let paths = []
    findPaths(root, targetSum, [], paths)
    return paths
}

function findPaths(root, sum, path,paths){
    if(!root) return;
    path.push(root.val)
    if(!root.left && !root.right && root.val === sum){
        paths.push(path)
        return;
    }

    if(root.left) findPaths(root.left, sum - root.val, [...path], paths)
    if(root.right) findPaths(root.right, sum - root.val, [...path], paths)
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
let _node5 = new Node(5)
let _node4 = new Node(4, _node5, node1)
let node13 = new Node(13)
let node8 = new Node(8, node13, _node4)
let node2= new Node(2)
let node7 = new Node(7)
let node11 = new Node(11, node7, node2)
let node4 = new Node(4, node11)
let node5 = new Node(5, node4, node8)
/** example 1 end*/

console.log(pathSum(node5, 22))  // [[5,4,11,2],[5,8,4,5]]