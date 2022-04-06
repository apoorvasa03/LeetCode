/** Time: O(N)  space: O(logN)*/
var kthSmallest = function(root, k) {
    let current = root;
    let stack = []
    while(current || stack.length){
      while(current){
        stack.push(current)
        current = current.left
      }
  
      current = stack.pop()
      if(--k === 0) return current.val
      current = current.right
    }
  }
  /** time: O(N)  Space: O(N)*/
  var kthSmallest2 = function(root, k) {
      let result = []
    
      function dfs(root){
        if(!root) return;
        dfs(root.left)
        result.push(root.val)
        dfs(root.right)
      }
      dfs(root)
      return result[k-1]
  };
  
  class Node{
    constructor(val, left =null, right = null){
        this.val = val;
        this.left = left;
        this.right = right
    }
  }
  
  
  let node6 = new Node(6)
  let node4 = new Node(4)
  let node1 = new Node(1)
  let node2 = new Node(2, node1)
  let node3 = new Node(3, node2, node4)
  let node5 = new Node(5, node3, node6)
  
  
  
  let _node2 = new Node(2)
  let _node4 = new Node(4)
  let _node1 = new Node(1, null , _node2)
  let _node3 = new Node(3, _node1, _node4)
  
  
  
  console.log(kthSmallest(node5, 3))    //  3
  console.log(kthSmallest(_node3, 1))   // 1
  