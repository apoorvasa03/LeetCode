/** Time: 0(N)  space: O(H)
 * time: since we visit each node once, its o(n)
 * space: stack will have tree height calls, hence soace is O(H)
*/
var sumNumbers = function(root) {
    let result = 0
    function DFS(root, pathStr){
        if(!root) return 0;
        pathStr = pathStr * 10 + root.val;
        if(!root.left && !root.right) result += pathStr
        DFS(root.left, pathStr)
        DFS(root.right, pathStr)
    }

    DFS(root, 0);
    return result;
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
let node0 = new Node(0)
let node1= new Node(1)
let node5 = new Node(5)
let node9 = new Node(9, node5, node1)
let node4 = new Node(4, node9, node0)
/** example 1 end*/

console.log(sumNumbers(node4))  // 1026