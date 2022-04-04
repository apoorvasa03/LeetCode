/** time: o(n)  space: o(log n) => balanced tree , o(N) => unbalanced tree*/
var maxPathSum = function(root) {
    let res = Number.MIN_SAFE_INTEGER
    function DFS(root){
        if(!root) return 0;
        let leftMax = Math.max(DFS(root.left), 0)
        let rightMax = Math.max(DFS(root.right), 0)
        res = Math.max(res, root.val+ leftMax + rightMax) // current path max value
        return root.val + Math.max(leftMax, rightMax) // return the max without deviation
    }

    DFS(root)
    return res
};


class Node{
  constructor(val, left =null, right = null){
      this.val = val;
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


let nodeSeven = new Node(7)
let node15 = new Node(15)
let node20 = new Node(20, node15, nodeSeven)
let node9 = new Node(9)
let node10 = new Node(-10, node9, node20)

let menusThree = new Node(-3)

console.log(maxPathSum(node10)) // 42
console.log(maxPathSum(node1))  // 20
console.log(maxPathSum(menusThree)) // -3