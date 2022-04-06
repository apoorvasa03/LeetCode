/** Time: O(logN) Space: O(1)*/
var lowestCommonAncestor = function(root, p, q) {
    while(root){
      if(p.val < root.val && q.val < root.val){
        root = root.left
      }else if(p.val > root.val && q.val > root.val){
        root = root.right
      }else{
        return root
      }
    }
  };
  
  class Node{
    constructor(val, left =null, right = null){
        this.val = val;
        this.left = left;
        this.right = right
    }
  }
  let node9 = new Node(9)
  let node7 = new Node(7)
  let node8 = new Node(8, node7, node9)
  let node5 = new Node(5)
  let node3 = new Node(3)
  let node4 = new Node(4, node3, node5)
  let node0 = new Node(0)
  let node2 = new Node(2, node0, node4)
  let node6 = new Node(6, node2, node8)
  
  console.log(lowestCommonAncestor(node6, node2, node8))    //  node6
  console.log(lowestCommonAncestor(node6, node2, node4))   //  node2
  